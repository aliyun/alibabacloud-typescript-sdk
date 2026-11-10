// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to search for products. Fuzzy matching is supported.
   * 
   * @example
   * ECS
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 0 to 200. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * eyJ0b2tlbiI6IjEwMjM0NTY3ODkwIn0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * - Normal: Default sorting. This is the default value.
   * - Top: Sorting by popularity.
   * 
   * @example
   * Normal
   */
  sort?: string;
  /**
   * @remarks
   * The status. Valid values: Available and Deprecated.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether Terraformer is supported.
   * 
   * @example
   * true
   */
  supportTerraformer?: boolean;
  /**
   * @remarks
   * The Terraform provider version. If this parameter is left empty, the latest version is used by default.
   * 
   * @example
   * 1.227.0
   */
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sort: 'sort',
      status: 'status',
      supportTerraformer: 'supportTerraformer',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sort: 'string',
      status: 'string',
      supportTerraformer: 'boolean',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

