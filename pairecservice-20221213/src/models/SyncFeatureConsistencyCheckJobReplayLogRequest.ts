// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncFeatureConsistencyCheckJobReplayLogRequest extends $dara.Model {
  /**
   * @remarks
   * The context features.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\"Value\":{\"FloatFeature\":0.1}}]
   */
  contextFeatures?: string;
  /**
   * @remarks
   * The ID of the feature consistency check job configuration. For information about how to obtain the configuration ID, see [ListFeatureConsistencyCheckJobConfigs](https://help.aliyun.com/document_detail/2557567.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @remarks
   * The generated features.
   * 
   * This parameter is required.
   * 
   * @example
   * week_day:1 | userid:3 | itemid:9001 | cate:cat1 | click_5_seq__cate:cat1
   */
  generatedFeatures?: string;
  /**
   * @remarks
   * The ID of the instance. For information about how to obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The item ID in the log.
   * 
   * This parameter is required.
   * 
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @remarks
   * The request ID in the log.
   * 
   * This parameter is required.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  logRequestId?: string;
  /**
   * @remarks
   * The request time in the log (UNIX epoch timestamp).
   * 
   * This parameter is required.
   * 
   * @example
   * 1693900981465
   */
  logRequestTime?: number;
  /**
   * @remarks
   * The user ID in the log.
   * 
   * This parameter is required.
   * 
   * @example
   * 1010
   */
  logUserId?: string;
  /**
   * @remarks
   * The raw features.
   * 
   * This parameter is required.
   * 
   * @example
   * author__kv_city_expr_cnt_15d:Beijing | tem__min_age_15d:28
   */
  rawFeatures?: string;
  /**
   * @remarks
   * The name of the scene.
   * 
   * This parameter is required.
   * 
   * @example
   * video-feed
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      contextFeatures: 'ContextFeatures',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      generatedFeatures: 'GeneratedFeatures',
      instanceId: 'InstanceId',
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logRequestTime: 'LogRequestTime',
      logUserId: 'LogUserId',
      rawFeatures: 'RawFeatures',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextFeatures: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      generatedFeatures: 'string',
      instanceId: 'string',
      logItemId: 'string',
      logRequestId: 'string',
      logRequestTime: 'number',
      logUserId: 'string',
      rawFeatures: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

