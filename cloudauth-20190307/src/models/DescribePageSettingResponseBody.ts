// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Failure reasons.
   * 
   * @example
   * {
   *             "11": "认证不通过，可能原因：1、公安网照片缺失；2、公安网照片格式错误；3、公安网照片找不到人脸等可能",
   *             "1": "认证通过",
   *             "12": "认证不通过，可能原因：公安网系统异常，无法比对等可能",
   *             "2": "认证不通过，原因：实名校验不通过",
   *             "3": "认证不通过，可能原因：1、身份证照片模糊、光线问题造成字体无法识别；2、身份证照片信息与需认证的身份证姓名不一致；3、提交的照片为非身份证照片等可能",
   *             "4": "认证不通过，可能原因：1、身份证照片模糊、光线问题造成字体无法识别；2、身份证照片信息与需认证的身份证号码不一致；3、提交的照片为非身份证照片等可能",
   *             "5": "认证不通过，可能原因：身份证照片有效期已过期（或即将过期）等可能",
   *             "6": "认证不通过，可能原因：人脸与身份证头像不一致等可能",
   *             "7": "认证不通过，可能原因：人脸与公安网照片不一致等可能",
   *             "8": "认证不通过，可能原因：1、提交的身份证照片非身份证原照片；2、未提交有效身份证照片等可能",
   *             "9": "认证不通过，可能原因：非账号本人操作等可能",
   *             "10": "认证不通过，可能原因：非同人操作等可能"
   *         }
   */
  failReasons?: { [key: string]: any };
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * C58A8581-6A5B-55F1-B2EF-1CEAC97DA181
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failReasons: 'FailReasons',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReasons: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.failReasons) {
      $dara.Model.validateMap(this.failReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

