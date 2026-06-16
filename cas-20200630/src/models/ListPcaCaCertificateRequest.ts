// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPcaCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page. The default value is 20.
   * 
   * Valid values: 1 to 2000.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. Leave this parameter empty to start the query from the first page. If this parameter is not returned, all results have been returned.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
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

