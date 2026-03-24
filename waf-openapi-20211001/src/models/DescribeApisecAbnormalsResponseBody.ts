// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecAbnormalsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of risk events that are associated with the security risk.
   * 
   * @example
   * 2
   */
  abnormalEventNumber?: number;
  /**
   * @remarks
   * The ID of the security risk.
   * 
   * @example
   * 7c1431f27ae7e9c8cc64095***68e
   */
  abnormalId?: string;
  /**
   * @remarks
   * The details of the security risk in JSON format. The JSON object contains the following fields:
   * 
   * - **rule**: The detection rule that triggered the security risk.
   * 
   * - **data_type**: The type of sensitive data.
   * 
   * - **custom_rule_name**: The name of the custom rule.
   * 
   * - **rule_name**: The name of the built-in rule.
   * 
   * @example
   * {
   *     "data_type": ["1005","1004"],
   *     "rule": {
   *         "parent": "RiskType_Permission",
   *         "code": "Risk_UnauthSensitive",
   *         "level": "high",
   *         "origin": "default",
   *         "name": "Risk_UnauthSensitive"
   *     }
   * }
   */
  abnormalInfo?: string;
  /**
   * @remarks
   * The severity level of the security risk. Valid values:
   * 
   * - **high**: High.
   * 
   * - **medium**: Medium.
   * 
   * - **low**: Low.
   * 
   * @example
   * high
   */
  abnormalLevel?: string;
  /**
   * @remarks
   * The type of the security risk.
   * 
   * > Call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to query the supported risk types.
   * 
   * @example
   * LackOfSpeedLimit
   */
  abnormalTag?: string;
  /**
   * @remarks
   * The processing status of the security risk.
   * 
   * @example
   * unresolved
   */
  abnromalStatus?: string;
  /**
   * @remarks
   * The path of the API that is associated with the security risk.
   * 
   * @example
   * /api/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API that is associated with the security risk.
   * 
   * @example
   * 09559c0d71ca2ffc996b81***836d8
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * 
   * > Call [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) to query the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The time when the security risk was first detected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  discoverTime?: number;
  /**
   * @remarks
   * The list of security risk samples.
   * 
   * @deprecated
   */
  examples?: string[];
  /**
   * @remarks
   * The time when the API was first discovered. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1701138088
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether the security risk is being followed. Valid values:
   * 
   * - **1**: The security risk is being followed.
   * 
   * - **0** (default): The security risk is not being followed.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The time when the security risk was marked as ignored. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  ignoreTime?: number;
  /**
   * @remarks
   * The most recent time when the API was accessed. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  lastestTime?: number;
  /**
   * @remarks
   * The most recent time when the security risk was detected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  latestDiscoverTime?: number;
  /**
   * @remarks
   * The domain name or IP address that the API resides on.
   * 
   * @example
   * a.aliyun.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The remarks for the security risk.
   * 
   * @example
   * Strict
   */
  note?: string;
  /**
   * @remarks
   * The source of the risk detection rule. Valid values:
   * 
   * - **custom**: Custom rule.
   * 
   * - **default**: Built-in rule.
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The handling status of the security risk. Valid values:
   * 
   * - **toBeConfirmed**: To be confirmed.
   * 
   * - **confirmed**: Confirmed.
   * 
   * - **toBeFixed**: To be fixed.
   * 
   * - **fixed**: Fixed (manually verified).
   * 
   * - **ignored**: Ignored.
   * 
   * - **toBeVerified**: To be verified by the system.
   * 
   * - **notFixed**: Verification failed.
   * 
   * - **systemFixed**: Fixed (verified by the system).
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

export class DescribeApisecAbnormalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of security risks.
   */
  data?: DescribeApisecAbnormalsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9469646C-F2CC-5F0F-8401-C53***4F46
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of security risks returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecAbnormalsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

