// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMarketingFlowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the campaign.
   * 
   * @example
   * 示例值示例值
   */
  activityDesc?: string;
  /**
   * @remarks
   * The name of the node task instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  activityName?: string;
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * 示例值
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: an empty collection.
   * 
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 示例值示例值示例值
   */
  cronExpression?: string;
  /**
   * @remarks
   * The end time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 示例值示例值示例值
   */
  endDate?: string;
  /**
   * @remarks
   * The trigger method of the baseline scan. Valid values:
   * 
   * - **Schedule**: Triggered by a periodic configuration task.
   * - **Manual**: Manually triggered.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  executionType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parameter flag.
   * 
   * @example
   * 示例值
   */
  paramFlag?: string;
  /**
   * @remarks
   * The API parameters.
   * 
   * @example
   * {}
   */
  paramsShrink?: string;
  /**
   * @remarks
   * The code of the associated flow.
   * 
   * @example
   * 示例值
   */
  relatedFlowCode?: string;
  /**
   * @remarks
   * The name of the associated flow.
   * 
   * @example
   * 示例值
   */
  relatedFlowName?: string;
  /**
   * @remarks
   * The ID of the related group.
   * 
   * @example
   * 43
   */
  relatedGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 示例值
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      activityDesc: 'ActivityDesc',
      activityName: 'ActivityName',
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
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
      activityDesc: 'string',
      activityName: 'string',
      bizCode: 'string',
      bizExtendShrink: 'string',
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

