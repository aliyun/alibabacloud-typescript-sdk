// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The environment alias. Fuzzy match is supported.
   * 
   * @example
   * 测试
   */
  aliasLike?: string;
  /**
   * @remarks
   * The gateway ID. Exact match is supported.
   * 
   * @example
   * gw-cptv6ktlhtgnqr73h8d1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway name. Fuzzy match is supported.
   * 
   * @example
   * test-gw
   */
  gatewayNameLike?: string;
  /**
   * @remarks
   * The gateway type.
   * 
   * @example
   * APIGateway
   */
  gatewayType?: string;
  /**
   * @remarks
   * The environment name. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2nqpppkzplmq
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

