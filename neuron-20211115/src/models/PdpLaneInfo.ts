// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpLaneInfo extends $dara.Model {
  /**
   * @example
   * 灰度
   */
  alias?: string;
  /**
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @example
   * 252333049301505383
   */
  creatorUid?: string;
  description?: string;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 2023-07-04T00:00:00.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * true
   */
  initGroupFlag?: boolean;
  /**
   * @example
   * 1，2
   */
  inletServices?: string;
  /**
   * @example
   * gray
   */
  name?: string;
  /**
   * @example
   * 1
   */
  productId?: number;
  /**
   * @example
   * linkedmall
   */
  productName?: string;
  /**
   * @example
   * 1，2
   */
  serviceGroupIds?: string;
  /**
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      companyId: 'companyId',
      creatorName: 'creatorName',
      creatorUid: 'creatorUid',
      description: 'description',
      env: 'env',
      gmtCreate: 'gmtCreate',
      id: 'id',
      initGroupFlag: 'initGroupFlag',
      inletServices: 'inletServices',
      name: 'name',
      productId: 'productId',
      productName: 'productName',
      serviceGroupIds: 'serviceGroupIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      companyId: 'number',
      creatorName: 'string',
      creatorUid: 'string',
      description: 'string',
      env: 'string',
      gmtCreate: 'string',
      id: 'number',
      initGroupFlag: 'boolean',
      inletServices: 'string',
      name: 'string',
      productId: 'number',
      productName: 'string',
      serviceGroupIds: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

