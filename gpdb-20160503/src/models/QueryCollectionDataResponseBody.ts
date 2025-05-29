// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCollectionDataResponseBodyMatches } from "./QueryCollectionDataResponseBodyMatches";


export class QueryCollectionDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data list.
   */
  matches?: QueryCollectionDataResponseBodyMatches;
  /**
   * @remarks
   * Detailed information when the request fails.
   * 
   * @example
   * 0.1234
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Status, with the following values:
   * - **success**: Success.
   * - **fail**: Failure.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Only returned when the Offset is not 0, this value represents the total number of hits for the search criteria.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      matches: 'Matches',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matches: QueryCollectionDataResponseBodyMatches,
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.matches && typeof (this.matches as any).validate === 'function') {
      (this.matches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

