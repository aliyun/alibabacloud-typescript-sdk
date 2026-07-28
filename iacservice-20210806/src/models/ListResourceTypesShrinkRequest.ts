// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - zh-CN: Chinese.
   * - en-US: English.
   * 
   * Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The keyword for searching resource codes or names. Fuzzy match is supported.
   * 
   * @example
   * vpc
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 0 to 200. Default value: 100.
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
   * tokenForNextPage
   */
  nextToken?: string;
  /**
   * @remarks
   * The product code. Fuzzy match is supported.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The order in which resource types are returned. Valid values:
   * - Normal (default): returned in normal order.
   * - Top: returned in order of popularity.
   * 
   * @example
   * Normal
   */
  sort?: string;
  /**
   * @remarks
   * The status filter list. Valid values:
   * - Available
   * - Deprecated.
   * 
   * @example
   * Available,Deprecated
   */
  status?: string;
  /**
   * @remarks
   * The product subcategory in Terraform.
   * 
   * @example
   * compute
   */
  subcategory?: string;
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
  /**
   * @remarks
   * The Terraform resources.
   */
  terraformResourceTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      product: 'product',
      sort: 'sort',
      status: 'status',
      subcategory: 'subcategory',
      supportTerraformer: 'supportTerraformer',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformResourceTypesShrink: 'terraformResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      product: 'string',
      sort: 'string',
      status: 'string',
      subcategory: 'string',
      supportTerraformer: 'boolean',
      terraformProviderVersion: 'string',
      terraformResourceTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

