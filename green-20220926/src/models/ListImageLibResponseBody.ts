// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageLibResponseBodyLibList extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Remarks
   */
  comment?: string;
  /**
   * @remarks
   * The moderation exemption configuration.
   * 
   * @example
   * 1
   */
  freeInspection?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-06-03 15:20:14
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-06-03 15:20:14
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of images in the image library.
   * 
   * @example
   * 1
   */
  imageNum?: number;
  /**
   * @remarks
   * The ID of the image library.
   * 
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * The name of the image library.
   * 
   * @example
   * Test
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      freeInspection: 'FreeInspection',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageNum: 'ImageNum',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      freeInspection: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageNum: 'number',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLibResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code, which is consistent with the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of image library information.
   */
  libList?: ListImageLibResponseBodyLibList[];
  /**
   * @remarks
   * The maximum number of supported image libraries.
   * 
   * @example
   * 5
   */
  maxLibCount?: number;
  /**
   * @remarks
   * The detailed description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The success flag.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      libList: 'LibList',
      maxLibCount: 'MaxLibCount',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      libList: { 'type': 'array', 'itemType': ListImageLibResponseBodyLibList },
      maxLibCount: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.libList)) {
      $dara.Model.validateArray(this.libList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

