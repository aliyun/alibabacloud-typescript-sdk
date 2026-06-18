// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshImportMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The export task ID.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      slinkTaskId: 'SlinkTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slinkTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshImportMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data.
   */
  data?: RefreshImportMetaResponseBodyData;
  /**
   * @remarks
   * The result details of the import or export task. > This parameter is empty unless an exception occurs.
   * 
   * @example
   * *****
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE4F6C34-065F-45AA-B5DC-4B8D816F6305
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RefreshImportMetaResponseBodyData,
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

