// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMarketingFlowRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  activityDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  activityName?: string;
  /**
   * @example
   * 示例值
   */
  bizCode?: string;
  /**
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值示例值
   */
  cronExpression?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  executionType?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值
   */
  paramFlag?: string;
  /**
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @example
   * 示例值
   */
  relatedFlowCode?: string;
  /**
   * @example
   * 示例值
   */
  relatedFlowName?: string;
  /**
   * @example
   * 43
   */
  relatedGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      activityDesc: 'ActivityDesc',
      activityName: 'ActivityName',
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      cronExpression: 'CronExpression',
      endDate: 'EndDate',
      executionType: 'ExecutionType',
      ownerId: 'OwnerId',
      paramFlag: 'ParamFlag',
      params: 'Params',
      relatedFlowCode: 'RelatedFlowCode',
      relatedFlowName: 'RelatedFlowName',
      relatedGroupId: 'RelatedGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityDesc: 'string',
      activityName: 'string',
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      cronExpression: 'string',
      endDate: 'string',
      executionType: 'string',
      ownerId: 'number',
      paramFlag: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      relatedFlowCode: 'string',
      relatedFlowName: 'string',
      relatedGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startDate: 'string',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

