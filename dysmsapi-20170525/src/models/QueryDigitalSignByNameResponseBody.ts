// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDigitalSignByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the access denial. This parameter is returned only if Resource Access Management (RAM) authentication fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request. A value of `OK` indicates that the request was successful. Other values indicate error codes.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * - `gmtModified`: The time when the signature was last modified.
   * 
   * - `creator`: The ID of the user who created the signature.
   * 
   * - `signName`: The name of the digital SMS signature.
   * 
   * - `qualificationId`: The ID of the qualification. You can create qualifications in the console or by calling an API operation.
   * 
   * - `signIndustry`: The industry type. Valid values: `0` (General) and `1` (E-commerce).
   * 
   * - `signVersion`: The version of the signature. This value is updated for each new version. The current version is 1.
   * 
   * - `telecomRegisterStatus`: The filing status with China Telecom. Valid values: `0` (Filing Failed), `3` (Filing Successful), `-1` (Filing in Progress), and `-2` (Not Filed).
   * 
   * - `signCode`: The code of the digital SMS signature.
   * 
   * - `gmtCreate`: The time when the signature was created.
   * 
   * - `signId`: The ID of the signature. This is a unique identifier.
   * 
   * - `mobileRegisterStatus`: The filing status with China Mobile.
   * 
   * - `SignSource`: The source of the signature. Valid values:
   * 
   * - `mobileAvailableStatus`: The availability status with China Mobile. Valid values: `0` (Unavailable) and `1` (Available). We recommend that you select an available signature when you create a template or send a digital SMS message.
   * 
   * - `unicomRegisterStatus`: The filing status with China Unicom. Valid values: `0` (Filing Failed), `3` (Filing Successful), `-1` (Filing in Progress), and `-2` (Not Filed).
   * 
   * - `unicomAvailableStatus`: The availability status with China Unicom. Valid values: `0` (Unavailable) and `1` (Available). We recommend that you select an available signature when you create a template or send a digital SMS message.
   * 
   * - `telecomAvailableStatus`: The availability status with China Telecom. Valid values: `0` (Unavailable) and `1` (Available). We recommend that you select an available signature when you create a template or send a digital SMS message.
   * 
   * @example
   * "Data": {
   *     "gmtModified": 1770005896000,
   *     "creator": "UID:1498275912899720",
   *     "signName": "驳回理由",
   *     "qualificationId": 2757722,
   *     "qualificationVersion": 1768974751432,
   *     "signIndustry": 0,
   *     "registerStatueReason": {},
   *     "signVersion": 1,
   *     "remark": "",
   *     "telecomRegisterStatus": -1,
   *     "signCode": "DIGSIGN_100000168688001_1769050485148_pYZu1",
   *     "gmtCreate": 1769050485000,
   *     "signId": 22784769,
   *     "mobileRegisterStatus": -1,
   *     "signSource": 0,
   *     "mobileAvailableStatus": 0,
   *     "attachmentList": [],
   *     "unicomRegisterStatus": 3,
   *     "unicomAvailableStatus": 1,
   *     "signType": 1,
   *     "telecomAvailableStatus": 0,
   *     "extendMessage": "{}"
   *   },
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

