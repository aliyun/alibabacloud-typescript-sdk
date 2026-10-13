// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The diagnostic type.
   * 
   * @example
   * NetDiag
   */
  diagType?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If this parameter is not specified or is set to a value less than 20, the default value is 20.
   * 
   * - If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken that was returned from the previous API call.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmywpvugk****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      diagType: 'DiagType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

