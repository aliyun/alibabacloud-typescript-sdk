// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve more results. You do not need to specify this parameter for the first request. For subsequent requests, use the token obtained from the previous response.
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

