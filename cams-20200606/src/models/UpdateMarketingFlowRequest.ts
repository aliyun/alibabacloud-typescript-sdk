// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMarketingFLowRequest extends $dara.Model {
  /**
   * @example
   * 115311507XXXX49888
   */
  activityCode?: string;
  /**
   * @example
   * 示例值
   */
  activityDesc?: string;
  /**
   * @example
   * 674574575658675XX
   */
  activityId?: string;
  /**
   * @example
   * test
   */
  activityName?: string;
  cronExpression?: string;
  /**
   * @example
   * 2025-11-26 09:59:00
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
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
   * {"testEmail":"wy****999@alibaba-inc.com"}
   */
  params?: { [key: string]: any };
  /**
   * @example
   * cf-kr3k31**mfeir8w
   */
  relatedFlowCode?: string;
  /**
   * @example
   * testflow
   */
  relatedFlowName?: string;
  /**
   * @example
   * 114345654645XX
   */
  relatedGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 2025-11-25 09:59:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      activityCode: 'ActivityCode',
      activityDesc: 'ActivityDesc',
      activityId: 'ActivityId',
      activityName: 'ActivityName',
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
      activityCode: 'string',
      activityDesc: 'string',
      activityId: 'string',
      activityName: 'string',
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
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

