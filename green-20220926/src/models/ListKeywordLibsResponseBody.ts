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
   * The ID of the library.
   * 
   * @example
   * custom_xxxxx
   */
  libId?: string;
  /**
   * @remarks
   * The name of the library.
   * 
   * @example
   * Test
   */
  libName?: string;
  /**
   * @remarks
   * The preprocessing list of the library. If ServiceCode is not specified or not configured, an empty array is returned.
   */
  preprocessList?: string[];
  /**
   * @remarks
   * The associated services.
   * 
   * @example
   * service1,service2
   */
  serviceCodes?: string;
  /**
   * @remarks
   * The UID.
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
      preprocessList: 'PreprocessList',
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
      preprocessList: { 'type': 'array', 'itemType': 'string' },
      serviceCodes: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.preprocessList)) {
      $dara.Model.validateArray(this.preprocessList);
    }
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
   * The detailed description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
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

