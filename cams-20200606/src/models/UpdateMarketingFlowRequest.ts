// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMarketingFLowRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the campaign to modify.
   * 
   * @example
   * 115311507XXXX49888
   */
  activityCode?: string;
  /**
   * @remarks
   * The description of the campaign.
   * 
   * @example
   * Campaign description
   */
  activityDesc?: string;
  /**
   * @remarks
   * The ID of the campaign to modify.
   * 
   * @example
   * 674574575658675XX
   */
  activityId?: string;
  /**
   * @remarks
   * The name of the campaign.
   * 
   * @example
   * test
   */
  activityName?: string;
  /**
   * @remarks
   * The cron expression for periodic scheduling.
   */
  cronExpression?: string;
  /**
   * @remarks
   * The end time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-11-26 09:59:00
   */
  endDate?: string;
  /**
   * @remarks
   * The execution method. Set this parameter to 1 (cron).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  executionType?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to pass custom parameters.
   * 
   * @example
   * Y: Pass custom parameters. N: Do not pass parameters
   */
  paramFlag?: string;
  /**
   * @remarks
   * The custom parameters to pass.
   * 
   * @example
   * {"testEmail":"wy****999@alibaba-inc.com"}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The code of the associated flow.
   * 
   * @example
   * cf-kr3k31**mfeir8w
   */
  relatedFlowCode?: string;
  /**
   * @remarks
   * The name of the associated flow.
   * 
   * @example
   * testflow
   */
  relatedFlowName?: string;
  /**
   * @remarks
   * The ID of the associated group.
   * 
   * @example
   * 114345654645XX
   */
  relatedGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time in the YYYY-MM-DD HH:mm:ss format.
   * 
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

