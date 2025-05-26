// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataIngestion } from "./DataIngestion";


export class ListBatchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The batch processing tasks.
   */
  batches?: DataIngestion[];
  /**
   * @remarks
   * The pagination token.
   * 
   * The pagination token is used in the next request to retrieve a new page of results if the total number of results exceeds the value of the MaxResults parameter. The next call to the operation returns results lexicographically after the NextToken parameter value.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEDC9B1F-30F2-4C1F-8ED2-B7860187****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batches: 'Batches',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batches: { 'type': 'array', 'itemType': DataIngestion },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.batches)) {
      $dara.Model.validateArray(this.batches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

