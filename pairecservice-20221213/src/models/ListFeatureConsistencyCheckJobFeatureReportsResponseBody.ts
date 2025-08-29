// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff extends $dara.Model {
  /**
   * @example
   * gender
   */
  featureName?: string;
  /**
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  logRequestId?: string;
  /**
   * @example
   * 1010
   */
  logUserId?: string;
  /**
   * @example
   * male
   */
  offlineValue?: string;
  /**
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
   * @example
   * https://********
   */
  dataPath?: string;
  /**
   * @example
   * oss://********
   */
  ossPath?: string;
  reportsOfFeatureDiff?: ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff[];
  /**
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

