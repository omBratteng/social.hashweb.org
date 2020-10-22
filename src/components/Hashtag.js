import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hashtag = styled(FontAwesomeIcon)`
	color: var(--red);
	margin-right: 0.75rem;
	max-width: 1.25rem;
	vertical-align: -0.125em;

	@media (min-width: 768px) {
		max-width: 1.75rem;
	}
`

export default Hashtag
