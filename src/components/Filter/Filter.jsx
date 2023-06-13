import PropTypes from 'prop-types';
import { Container, FilterLabel, FilterInput } from './Filter.styled';

export function Filter({ onChangeFilter }) {
  return (
    <Container>
      <FilterLabel>
        Find contact by name
        <FilterInput type="text" onChange={onChangeFilter} />
      </FilterLabel>
    </Container>
  );
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
