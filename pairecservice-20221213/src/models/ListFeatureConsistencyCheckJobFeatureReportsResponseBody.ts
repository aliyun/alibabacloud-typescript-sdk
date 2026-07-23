// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff extends $dara.Model {
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * gender
   */
  featureName?: string;
  /**
   * @remarks
   * The item ID.
   * 
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  logRequestId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1010
   */
  logUserId?: string;
  /**
   * @remarks
   * The offline value.
   * 
   * @example
   * male
   */
  offlineValue?: string;
  /**
   * @remarks
   * The online value.
   * 
   * @example
   * male
   */
  onlineValue?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logUserId: 'LogUserId',
      offlineValue: 'OfflineValue',
      onlineValue: 'OnlineValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      logItemId: 'string',
      logRequestId: 'string',
      logUserId: 'string',
      offlineValue: 'string',
      onlineValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobFeatureReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data path.
   * 
   * @example
   * https://********
   */
  dataPath?: string;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * oss://********
   */
  ossPath?: string;
  /**
   * @remarks
   * The feature comparison reports.
   */
  reportsOfFeatureDiff?: ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBD41FBF-E75C-551A-92FA-CAD654AA006F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPath: 'DataPath',
      ossPath: 'OssPath',
      reportsOfFeatureDiff: 'ReportsOfFeatureDiff',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPath: 'string',
      ossPath: 'string',
      reportsOfFeatureDiff: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportsOfFeatureDiff)) {
      $dara.Model.validateArray(this.reportsOfFeatureDiff);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

