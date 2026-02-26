// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the number of returned entries exceeds the `MaxResults` value, the entries are truncated and this token is returned. To fetch the remaining entries, pass this token in the subsequent request.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

