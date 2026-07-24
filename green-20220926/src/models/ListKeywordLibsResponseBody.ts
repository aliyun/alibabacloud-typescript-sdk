// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeywordLibsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-11-30 16:30:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of keywords.
   * 
   * @example
   * 10
   */
  keywordCount?: string;
  /**
   * @remarks
   * The library ID.
   * 
   * @example
   * custom_xxxxx
   */
  libId?: string;
  /**
   * @remarks
   * The library name.
   * 
   * @example
   * 测试
   */
  libName?: string;
  /**
   * @remarks
   * The service codes.
   * 
   * @example
   * service1,service2
   */
  serviceCodes?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 19964*****086772
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      keywordCount: 'KeywordCount',
      libId: 'LibId',
      libName: 'LibName',
      serviceCodes: 'ServiceCodes',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      keywordCount: 'string',
      libId: 'string',
      libName: 'string',
      serviceCodes: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeywordLibsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListKeywordLibsResponseBodyData[];
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID assigned by the backend, which uniquely identifies the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListKeywordLibsResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
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

