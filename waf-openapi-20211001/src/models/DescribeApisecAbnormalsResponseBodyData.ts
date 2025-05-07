// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecAbnormalsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of risk-related security events.
   * 
   * @example
   * 2
   */
  abnormalEventNumber?: number;
  /**
   * @remarks
   * The ID of the risk.
   * 
   * @example
   * 7c1431f27ae7e9c8cc64095***68e
   */
  abnormalId?: string;
  /**
   * @remarks
   * The details of the risk. The value is a string that consists of multiple parameters in the JSON format. Valid values:
   * 
   * * **rule**: risk-related rule
   * * **data_type**: sensitive data type
   * * **custom_rule_name**: custom rule name
   * * **rule_name**: built-in rule name
   * 
   * @example
   * { "data_type": ["1005","1004"], "rule": { "parent": "RiskType_Permission", "code": "Risk_UnauthSensitive", "level": "high", "origin": "default", "name": "Risk_UnauthSensitive" } }
   */
  abnormalInfo?: string;
  /**
   * @remarks
   * The level of the risk. Valid values:
   * 
   * * **high**
   * * **medium**
   * * **low**
   * 
   * @example
   * high
   */
  abnormalLevel?: string;
  /**
   * @remarks
   * The type of the risk.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported types of risks.
   * 
   * @example
   * LackOfSpeedLimit
   */
  abnormalTag?: string;
  /**
   * @remarks
   * The status of the risk.
   * 
   * @example
   * unresolved
   */
  abnromalStatus?: string;
  /**
   * @remarks
   * The risk-related API.
   * 
   * @example
   * /api/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the risk-related API.
   * 
   * @example
   * 09559c0d71ca2ffc996b81***836d8
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the business purposes of APIs.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The time at which the risk was first detected. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  discoverTime?: number;
  /**
   * @remarks
   * The risk-related samples.
   */
  examples?: string[];
  /**
   * @remarks
   * The time at which the API was first detected. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1701138088
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether the API is followed. Valid values:
   * 
   * *   **1**: yes
   * *   **0**(default): no
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The time at which the risk was marked as ignored. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  ignoreTime?: number;
  /**
   * @remarks
   * The time at which the API was last accessed. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  lastestTime?: number;
  /**
   * @remarks
   * The time at which the risk was last detected. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  latestDiscoverTime?: number;
  /**
   * @remarks
   * The domain name or IP address of the API.
   * 
   * @example
   * a.aliyun.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Business side notified
   */
  note?: string;
  /**
   * @remarks
   * The source of the risk type. Valid values:
   * 
   * *   **custom**
   * *   **default**
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The status of the risk. Valid values:
   * 
   * * **toBeConfirmed**
   * * **confirmed**
   * * **toBeFixed**
   * * **fixed**
   * * **ignored**
   * 
   * @example
   * Confirmed
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalEventNumber: 'AbnormalEventNumber',
      abnormalId: 'AbnormalId',
      abnormalInfo: 'AbnormalInfo',
      abnormalLevel: 'AbnormalLevel',
      abnormalTag: 'AbnormalTag',
      abnromalStatus: 'AbnromalStatus',
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      apiTag: 'ApiTag',
      discoverTime: 'DiscoverTime',
      examples: 'Examples',
      firstTime: 'FirstTime',
      follow: 'Follow',
      ignoreTime: 'IgnoreTime',
      lastestTime: 'LastestTime',
      latestDiscoverTime: 'LatestDiscoverTime',
      matchedHost: 'MatchedHost',
      note: 'Note',
      origin: 'Origin',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalEventNumber: 'number',
      abnormalId: 'string',
      abnormalInfo: 'string',
      abnormalLevel: 'string',
      abnormalTag: 'string',
      abnromalStatus: 'string',
      apiFormat: 'string',
      apiId: 'string',
      apiTag: 'string',
      discoverTime: 'number',
      examples: { 'type': 'array', 'itemType': 'string' },
      firstTime: 'number',
      follow: 'number',
      ignoreTime: 'number',
      lastestTime: 'number',
      latestDiscoverTime: 'number',
      matchedHost: 'string',
      note: 'string',
      origin: 'string',
      userStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

