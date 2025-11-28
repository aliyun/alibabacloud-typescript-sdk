// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrainPicAvatarStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * M1YJTNTH2yoLmLnzKdYHeGBg
   */
  avatarId?: string;
  /**
   * @example
   * //daily-avatar-property.oss-cn-beijing.aliyuncs.com/avatar-share-property/AVATAR_2D_PIC/Mt.CMTMRYX4TNIU2/retalking_output.mp4?Expires=1764327167&OSSAccessKeyId=LTAI5tBRPnF5JkRCidYA8kw9&Signature=%2BH%2BSBpNDPiMQtPyl8vraEHMv9X8%3D
   */
  previewURL?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'avatarId',
      previewURL: 'previewURL',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
      previewURL: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainPicAvatarStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetTrainPicAvatarStatusResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 7239F9E5-A4DB-55BA-B701-0CE47DBDB0A8
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTrainPicAvatarStatusResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

