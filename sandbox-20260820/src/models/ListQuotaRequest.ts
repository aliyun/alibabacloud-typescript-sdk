// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first query. To query the next page, set this parameter to the nextToken value returned in the previous response.
   * 
   * @example
   * Trigger_fasdatalake_deductionfee
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
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

