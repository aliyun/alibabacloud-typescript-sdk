// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployPipelineInfo } from "./DeployPipelineInfo";


export class DeployDetailInfo extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @example
   * account1
   */
  accountName?: string;
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
   * @example
   * sdad
   */
  edasId?: string;
  /**
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
  isMonitorEnable?: number;
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
   * @example
   * 1
   */
  pbcId?: number;
  /**
   * @example
   * management
   */
  pbcName?: string;
  /**
   * @example
   * 123141
   */
  pipelineId?: string;
  pipelineInfos?: DeployPipelineInfo[];
  /**
   * @example
   * 23131
   */
  pipelineRunId?: string;
  /**
   * @example
   * cri-v1d49e57e8ojcwpq
   */
  repositoryId?: string;
  /**
   * @example
   * DEPLOYMENT_PENDING
   */
  rollbackStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @example
   * employee
   */
  serviceName?: string;
  /**
   * @example
   * DEPLOYMENT_PENDING
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
      accountName: 'accountName',
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
      isMonitorEnable: 'isMonitorEnable',
      memory: 'memory',
      message: 'message',
      orgType: 'orgType',
      pbcId: 'pbcId',
      pbcName: 'pbcName',
      pipelineId: 'pipelineId',
      pipelineInfos: 'pipelineInfos',
      pipelineRunId: 'pipelineRunId',
      repositoryId: 'repositoryId',
      rollbackStatus: 'rollbackStatus',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      status: 'status',
      times: 'times',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
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
      isMonitorEnable: 'number',
      memory: 'number',
      message: 'string',
      orgType: 'string',
      pbcId: 'number',
      pbcName: 'string',
      pipelineId: 'string',
      pipelineInfos: { 'type': 'array', 'itemType': DeployPipelineInfo },
      pipelineRunId: 'string',
      repositoryId: 'string',
      rollbackStatus: 'string',
      serviceId: 'number',
      serviceName: 'string',
      status: 'string',
      times: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineInfos)) {
      $dara.Model.validateArray(this.pipelineInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

