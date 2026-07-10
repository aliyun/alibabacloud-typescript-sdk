// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaceVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The device risk label.
   * 
   * @example
   * ROOT,VPN,HOOK
   */
  deviceRisk?: string;
  /**
   * @remarks
   * The device token.
   * 
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @remarks
   * The identity information of the verification subject. This field is empty in common verification scenarios.
   * 
   * @example
   * null
   */
  identityInfo?: string;
  /**
   * @remarks
   * The supplementary material information of the verification subject, primarily image-based materials. The value is in JSON format. See the example below.
   * 
   * @example
   * {"faceAttack": "F","facialPictureFront": {"qualityScore": 88.3615493774414,"pictureUrl": "https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg","ossBucketName": "cn-shanghai-aliyun-cloudauth-1260051251634779","ossObjectName": "verify/1260051251634779/6ba7bcfccf33f56cdb44ed086f36ce3e0.jpeg"}}
   */
  materialInfo?: string;
  /**
   * @remarks
   * Indicates whether the verification is passed. A value of T indicates passed. A value of F indicates not passed.
   * 
   * @example
   * T
   */
  passed?: string;
  /**
   * @remarks
   * The verification result description. For more information, see the SubCode description below.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * Indicates whether the response is successful.
   * 
   * @example
   * True
   */
  success?: string;
  /**
   * @remarks
   * The identity information and corresponding encoding entered by the user in rare character mode. The value is a JSON-formatted string. An empty string is returned if the name does not contain rare characters.
   * 
   * - name: the name entered by the user.
   * 
   * - verifyName: the final name encoding that passed verification. For example, if a rare character is verified through transcoding: "王先生", the actual verified name is "王先升".
   * 
   * - number: the ID number entered by the user.
   * 
   * @example
   * {
   *   "number": "610***********1110",
   *   "name": "王先生",
   *   "verifyName": "王先"
   * }
   */
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      deviceRisk: 'DeviceRisk',
      deviceToken: 'DeviceToken',
      identityInfo: 'IdentityInfo',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      success: 'Success',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceRisk: 'string',
      deviceToken: 'string',
      identityInfo: 'string',
      materialInfo: 'string',
      passed: 'string',
      subCode: 'string',
      success: 'string',
      userInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success. Other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result information.
   */
  resultObject?: DescribeFaceVerifyResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeFaceVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

