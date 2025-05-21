// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentsRequest extends $dara.Model {
  /**
   * @remarks
   * Environment alias, fuzzy search.
   * 
   * @example
   * 测试
   */
  aliasLike?: string;
  /**
   * @remarks
   * Gateway ID, exact search.
   * 
   * @example
   * gw-cptv6ktlhtgnqr73h8d1
   */
  gatewayId?: string;
  /**
   * @remarks
   * Gateway name, fuzzy search.
   * 
   * @example
   * test-gw
   */
  gatewayNameLike?: string;
  gatewayType?: string;
  /**
   * @remarks
   * Environment name, fuzzy search.
   * 
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @remarks
   * Page number, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek2sy66mftleiq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasLike: 'aliasLike',
      gatewayId: 'gatewayId',
      gatewayNameLike: 'gatewayNameLike',
      gatewayType: 'gatewayType',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasLike: 'string',
      gatewayId: 'string',
      gatewayNameLike: 'string',
      gatewayType: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

