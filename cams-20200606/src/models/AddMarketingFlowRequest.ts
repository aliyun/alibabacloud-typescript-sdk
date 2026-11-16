// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMarketingFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the campaign.
   * 
   * @example
   * Sample value
   */
  activityDesc?: string;
  /**
   * @remarks
   * The name of the node task instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value
   */
  activityName?: string;
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * Sample value
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: an empty set.
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * Sample value
   */
  cronExpression?: string;
  /**
   * @remarks
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * Sample value
   */
  endDate?: string;
  /**
   * @remarks
   * The trigger method for baseline scans. Valid values:
   * 
   * - **Schedule**: Triggered by a scheduled task.
   * - **Manual**: Manually triggered.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value
   */
  executionType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parameter flag.
   * 
   * @example
   * Sample value
   */
  paramFlag?: string;
  /**
   * @remarks
   * The API parameters.
   * 
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The code of the associated flow.
   * 
   * @example
   * Sample value
   */
  relatedFlowCode?: string;
  /**
   * @remarks
   * The name of the associated flow.
   * 
   * @example
   * Sample value
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
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * Sample value
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

