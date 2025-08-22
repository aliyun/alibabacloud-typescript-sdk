// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @example
   * ECS
   */
  keyword?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * eyJ0b2tlbiI6IjEwMjM0NTY3ODkwIn0=
   */
  nextToken?: string;
  /**
   * @example
   * Normal
   */
  sort?: string;
  /**
   * @example
   * Available
   */
  status?: string;
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

