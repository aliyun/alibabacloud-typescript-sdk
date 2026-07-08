// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecAbnormalsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of events associated with the risk.
   * 
   * @example
   * 2
   */
  abnormalEventNumber?: number;
  /**
   * @remarks
   * The risk ID.
   * 
   * @example
   * 7c1431f27ae7e9c8cc64095***68e
   */
  abnormalId?: string;
  /**
   * @remarks
   * The detailed risk information, which is a JSON string constructed from a series of parameters. The parameters include:
   * - **rule**: the rule associated with the risk.
   * - **data_type**: the sensitive data type.
   * - **custom_rule_name**: the custom rule name.
   * - **rule_name**: the built-in rule name.
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
   * The risk level. Valid values:
   * - **high**: high risk.
   * - **medium**: medium risk.
   * - **low**: low risk.
   * 
   * @example
   * high
   */
  abnormalLevel?: string;
  /**
   * @remarks
   * The risk type.
   * 
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported risk types.
   * 
   * @example
   * LackOfSpeedLimit
   */
  abnormalTag?: string;
  /**
   * @remarks
   * The risk status.
   * 
   * @example
   * unresolved
   */
  abnromalStatus?: string;
  /**
   * @remarks
   * The API operation associated with the risk.
   * 
   * @example
   * /api/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API associated with the risk.
   * 
   * @example
   * 09559c0d71ca2ffc996b81***836d8
   */
  apiId?: string;
  /**
   * @remarks
   * The business purpose of the API.
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported business purposes.
   * 
   * @example
   * SendMail
   */
  apiTag?: string;
  /**
   * @remarks
   * The time when the risk was first detected. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  discoverTime?: number;
  /**
   * @remarks
   * The list of examples associated with the risk.
   * 
   * @deprecated
   */
  examples?: string[];
  /**
   * @remarks
   * The time when the API asset was first discovered. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1701138088
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether the risk is followed. Valid values:
   * - **1**: followed.
   * - **0**: not followed. This is the default value.
   * 
   * @example
   * 0
   */
  follow?: number;
  /**
   * @remarks
   * The time when the user marked the risk as ignored. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  ignoreTime?: number;
  /**
   * @remarks
   * The most recent access time of the API asset. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  lastestTime?: number;
  /**
   * @remarks
   * The time when the risk was most recently detected. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1684252800
   */
  latestDiscoverTime?: number;
  /**
   * @remarks
   * The domain name or IP address to which the API operation belongs.
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
   * Strict
   */
  note?: string;
  /**
   * @remarks
   * The source of the risk type. Valid values:
   * - **custom**: custom.
   * - **default**: built-in.
   * 
   * @example
   * custom
   */
  origin?: string;
  /**
   * @remarks
   * The risk status. Valid values:
   * - **toBeConfirmed**: to be confirmed.
   * - **confirmed**: confirmed.
   * - **toBeFixed**: to be fixed.
   * - **fixed**: fixed (manually verified).
   * - **ignored**: ignored.
   * - ** toBeVerified**: to be verified by the system.
   * - ** notFixed**: not fixed after verification.
   * - ** systemFixed**: fixed (verified by the system).
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
   * The list of risks.
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
   * The total number of entries returned.
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

