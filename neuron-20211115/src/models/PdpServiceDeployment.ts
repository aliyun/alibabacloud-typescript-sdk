// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpServiceDeployment extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @example
   * MULTI_TENANT_DAPR
   */
  applicationType?: string;
  /**
   * @example
   * cd65b247-****-475b-ad4b-7039040d625c
   */
  changeOrderId?: string;
  context?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @example
   * AUTO
   */
  deploymentType?: string;
  /**
   * @example
   * 部署员工管理
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdad
   */
  edasId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 2022-2-22 11:11:2
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-2-22 11:11:2
   */
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-v12wpq
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20220421100717_prepub
   */
  imageTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  instanceCount?: number;
  /**
   * @example
   * 0
   */
  isServiceGroupEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  memory?: number;
  message?: string;
  /**
   * @example
   * INNER
   */
  orgType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pbcId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * management
   */
  pbcName?: string;
  /**
   * @example
   * 12
   */
  pipelineTimes?: number;
  /**
   * @example
   * cri-v1d49e57e8ojcwpq
   */
  repositoryId?: string;
  requestId?: string;
  /**
   * @example
   * DEPLOYMENT_PENDING
   */
  rollbackStatus?: string;
  serviceGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * employee
   */
  serviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEPLOYMENT_PENDING
   */
  status?: string;
  /**
   * @example
   * 123
   */
  timeout?: number;
  /**
   * @example
   * 2
   */
  times?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SERVICE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      applicationType: 'applicationType',
      changeOrderId: 'changeOrderId',
      context: 'context',
      cpu: 'cpu',
      deploymentType: 'deploymentType',
      description: 'description',
      edasId: 'edasId',
      enterpriseId: 'enterpriseId',
      env: 'env',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      imageId: 'imageId',
      imageTag: 'imageTag',
      instanceCount: 'instanceCount',
      isServiceGroupEnable: 'isServiceGroupEnable',
      memory: 'memory',
      message: 'message',
      orgType: 'orgType',
      pbcId: 'pbcId',
      pbcName: 'pbcName',
      pipelineTimes: 'pipelineTimes',
      repositoryId: 'repositoryId',
      requestId: 'requestId',
      rollbackStatus: 'rollbackStatus',
      serviceGroupId: 'serviceGroupId',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      status: 'status',
      timeout: 'timeout',
      times: 'times',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      applicationType: 'string',
      changeOrderId: 'string',
      context: 'string',
      cpu: 'number',
      deploymentType: 'string',
      description: 'string',
      edasId: 'string',
      enterpriseId: 'number',
      env: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      imageId: 'string',
      imageTag: 'string',
      instanceCount: 'number',
      isServiceGroupEnable: 'number',
      memory: 'number',
      message: 'string',
      orgType: 'string',
      pbcId: 'number',
      pbcName: 'string',
      pipelineTimes: 'number',
      repositoryId: 'string',
      requestId: 'string',
      rollbackStatus: 'string',
      serviceGroupId: 'number',
      serviceId: 'number',
      serviceName: 'string',
      status: 'string',
      timeout: 'number',
      times: 'number',
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

