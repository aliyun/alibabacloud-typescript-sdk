// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackflowFeatureConsistencyCheckJobDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\\"{\\\\\\"itemid\\\\\\":{\\\\\\"value\\\\\\":1010,\\\\\\"type\\\\\\":\\\\\\"string\\\\\\"}}\\"]
   */
  itemFeatures?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  logRequestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1693900981465
   */
  logRequestTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1010
   */
  logUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * video-feed
   */
  sceneName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\\"{\\\\\\"dbmtl_probs_is_valid_play\\\\\\":0.00032182207107543945,\\\\\\"dbmtl_y_play_time\\\\\\":0.0043269748210906982}\\"]
   */
  scores?: string;
  serviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\\"userid\\":{\\"value\\":1010,\\"type\\":\\"string\\"},\\"click_5_seq\\":{\\"value\\":\\"9001;9002;9003;9004;9005\\",\\"type\\":\\"string\\"}}
   */
  userFeatures?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      instanceId: 'InstanceId',
      itemFeatures: 'ItemFeatures',
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logRequestTime: 'LogRequestTime',
      logUserId: 'LogUserId',
      sceneName: 'SceneName',
      scores: 'Scores',
      serviceName: 'ServiceName',
      userFeatures: 'UserFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckJobConfigId: 'string',
      instanceId: 'string',
      itemFeatures: 'string',
      logItemId: 'string',
      logRequestId: 'string',
      logRequestTime: 'number',
      logUserId: 'string',
      sceneName: 'string',
      scores: 'string',
      serviceName: 'string',
      userFeatures: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

