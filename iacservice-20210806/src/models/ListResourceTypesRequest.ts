// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @example
   * vpc
   */
  keyword?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * tokenForNextPage
   */
  nextToken?: string;
  /**
   * @example
   * ECS
   */
  product?: string;
  /**
   * @example
   * Normal
   */
  sort?: string;
  /**
   * @example
   * Available,Deprecated
   */
  status?: string;
  /**
   * @example
   * compute
   */
  subcategory?: string;
  /**
   * @example
   * true
   */
  supportTerraformer?: boolean;
  /**
   * @example
   * 1.227.0
   */
  terraformProviderVersion?: string;
  terraformResourceTypes?: string[];
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
      terraformResourceTypes: 'terraformResourceTypes',
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
      terraformResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.terraformResourceTypes)) {
      $dara.Model.validateArray(this.terraformResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

