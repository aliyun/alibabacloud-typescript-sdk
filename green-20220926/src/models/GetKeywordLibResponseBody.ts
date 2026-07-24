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
   * The keyword library ID.
   * 
   * @example
   * customxx_xxx
   */
  libId?: string;
  /**
   * @remarks
   * The library name.
   * 
   * @example
   * TestLibrary.
   */
  libName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
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
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      keywordCount: 'string',
      libId: 'string',
      libName: 'string',
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

