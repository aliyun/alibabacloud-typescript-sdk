// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 5
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @example
   * feature_consistency_check_1
   */
  featureConsistencyCheckJobConfigName?: string;
  /**
   * @example
   * 4
   */
  featureConsistencyCheckJobId?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtEndTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtStartTime?: string;
  logs?: string[];
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      featureConsistencyCheckJobConfigName: 'FeatureConsistencyCheckJobConfigName',
      featureConsistencyCheckJobId: 'FeatureConsistencyCheckJobId',
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      logs: 'Logs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      featureConsistencyCheckJobConfigName: 'string',
      featureConsistencyCheckJobId: 'string',
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureConsistencyCheckJobsResponseBody extends $dara.Model {
  featureConsistencyCheckJobs?: ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs[];
  /**
   * @example
   * A04CB8C0-E74A-5E83-BC61-64D153574EC7
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckJobs: 'FeatureConsistencyCheckJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckJobs: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobsResponseBodyFeatureConsistencyCheckJobs },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureConsistencyCheckJobs)) {
      $dara.Model.validateArray(this.featureConsistencyCheckJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

