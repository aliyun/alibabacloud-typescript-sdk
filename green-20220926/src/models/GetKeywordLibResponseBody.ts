// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeywordLibResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-01-29 10:26:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of keywords.
   * 
   * @example
   * 100
   */
  keywordCount?: string;
  /**
   * @remarks
   * The ID of the keyword library.
   * 
   * @example
   * customxx_xxx
   */
  libId?: string;
  /**
   * @remarks
   * The name of the keyword library.
   * 
   * @example
   * Test keyword library
   */
  libName?: string;
  /**
   * @remarks
   * The preprocessing list of the keyword library. If ServiceCode is not specified or no preprocessing is configured, an empty array is returned.
   */
  preprocessList?: string[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1825457112123838
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      keywordCount: 'KeywordCount',
      libId: 'LibId',
      libName: 'LibName',
      preprocessList: 'PreprocessList',
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

export class GetKeywordLibResponseBody extends $dara.Model {
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
  data?: GetKeywordLibResponseBodyData;
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
      data: GetKeywordLibResponseBodyData,
      msg: 'string',
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

