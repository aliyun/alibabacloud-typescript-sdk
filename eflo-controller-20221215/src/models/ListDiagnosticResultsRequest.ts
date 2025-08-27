// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticResultsRequest extends $dara.Model {
  /**
   * @remarks
   * Type of diagnosis, indicating which diagnostic rules are hit.
   * 
   * @example
   * NetDiag
   */
  diagType?: string;
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 20, the default value is 20.
   * - If the set value is greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * NextToken for the next page. Include this value when requesting the next page.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmywpvugkh7kq
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

