// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrdersRequest extends $dara.Model {
  /**
   * @example
   * Normal
   */
  category?: string;
  /**
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @example
   * completed
   */
  orderStatus?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * polardb
   */
  productCode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderStatus: 'OrderStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productCode: 'string',
      regionId: 'string',
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

