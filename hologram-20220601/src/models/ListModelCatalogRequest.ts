// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * Default value:
   * 	20
   * Maximum value:
   * 	100
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken returned from the previous API call.
   * 
   * @example
   * uat-assembly-cut-3d-bbig
   */
  nextToken?: string;
  /**
   * @remarks
   * The model provider.
   * 
   * @example
   * holo_bailian
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

