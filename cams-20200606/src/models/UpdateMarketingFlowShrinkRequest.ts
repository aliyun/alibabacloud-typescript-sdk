// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMarketingFLowShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  activityCode?: string;
  /**
   * @example
   * 示例值
   */
  activityDesc?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  activityId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  activityName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  cronExpression?: string;
  /**
   * @example
   * 示例值示例值
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  executionType?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值
   */
  paramFlag?: string;
  paramsShrink?: string;
  /**
   * @example
   * 示例值
   */
  relatedFlowCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  relatedFlowName?: string;
  /**
   * @example
   * 42
   */
  relatedGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
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
      paramsShrink: 'Params',
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
      paramsShrink: 'string',
      relatedFlowCode: 'string',
      relatedFlowName: 'string',
      relatedGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

