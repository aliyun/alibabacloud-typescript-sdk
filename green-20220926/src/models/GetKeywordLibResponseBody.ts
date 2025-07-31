// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeywordLibResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-01-29 10:26:00
   */
  gmtModified?: string;
  /**
   * @example
   * 100
   */
  keywordCount?: string;
  /**
   * @example
   * customxx_xxx
   */
  libId?: string;
  libName?: string;
  /**
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
   * @example
   * 200
   */
  code?: number;
  data?: GetKeywordLibResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
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

