// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpServiceGroupDetail extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @example
   * 员工管理
   */
  alias?: string;
  /**
   * @example
   * 管理
   */
  description?: string;
  /**
   * @example
   * 979ae3bf-805b-4561-8019-43b034179441
   */
  edasId?: string;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * DEV
   */
  envType?: string;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * DEFAULT
   */
  groupType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * k8s-log-custom-asi-region-cn-hangzhou-1883014953109615
   */
  logProject?: string;
  /**
   * @example
   * asi-addon-stdout
   */
  logStore?: string;
  /**
   * @example
   * employee
   */
  name?: string;
  /**
   * @example
   * INNER
   */
  orgType?: string;
  /**
   * @example
   * 1
   */
  pbcId?: number;
  /**
   * @example
   * 979ae3bf-805b-4561-801
   */
  pipelineId?: string;
  /**
   * @example
   * 1
   */
  productId?: number;
  /**
   * @example
   * yunmall
   */
  productName?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @example
   * SDK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      alias: 'alias',
      description: 'description',
      edasId: 'edasId',
      enterpriseId: 'enterpriseId',
      env: 'env',
      envType: 'envType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupType: 'groupType',
      id: 'id',
      logProject: 'logProject',
      logStore: 'logStore',
      name: 'name',
      orgType: 'orgType',
      pbcId: 'pbcId',
      pipelineId: 'pipelineId',
      productId: 'productId',
      productName: 'productName',
      region: 'region',
      requestId: 'requestId',
      serviceId: 'serviceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      alias: 'string',
      description: 'string',
      edasId: 'string',
      enterpriseId: 'number',
      env: 'string',
      envType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupType: 'string',
      id: 'number',
      logProject: 'string',
      logStore: 'string',
      name: 'string',
      orgType: 'string',
      pbcId: 'number',
      pipelineId: 'string',
      productId: 'number',
      productName: 'string',
      region: 'string',
      requestId: 'string',
      serviceId: 'number',
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

