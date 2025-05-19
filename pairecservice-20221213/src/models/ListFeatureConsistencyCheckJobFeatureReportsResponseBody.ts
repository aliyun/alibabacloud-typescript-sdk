// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff } from "./ListFeatureConsistencyCheckJobFeatureReportsResponseBodyReportsOfFeatureDiff";


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

