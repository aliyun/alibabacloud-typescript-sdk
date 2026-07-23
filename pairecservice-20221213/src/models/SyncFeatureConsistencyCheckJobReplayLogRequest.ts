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
   * [{\\"Value\\":{\\"FloatFeature\\":0.1}}]
   */
  contextFeatures?: string;
  /**
   * @remarks
   * The feature consistency check job configuration ID. To obtain this ID, see [ListFeatureConsistencyCheckJobConfigs](https://help.aliyun.com/document_detail/2557567.html).
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
   * The instance ID. To obtain this ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The item ID from the log.
   * 
   * This parameter is required.
   * 
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @remarks
   * The request ID from the log.
   * 
   * This parameter is required.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  logRequestId?: string;
  /**
   * @remarks
   * The request time from the log, provided as a UNIX epoch timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1693900981465
   */
  logRequestTime?: number;
  /**
   * @remarks
   * The user ID from the log.
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
   * author__kv_city_expr_cnt_15d：北京市 | tem__min_age_15d:28
   */
  rawFeatures?: string;
  /**
   * @remarks
   * The scene name.
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

