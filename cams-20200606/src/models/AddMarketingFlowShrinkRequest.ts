// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMarketingFlowShrinkRequest extends $dara.Model {
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
  bizExtendShrink?: string;
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
  paramsShrink?: string;
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

