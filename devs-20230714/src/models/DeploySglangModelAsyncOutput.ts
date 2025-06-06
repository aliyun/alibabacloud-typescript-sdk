// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploySGLangModelAsyncOutput extends $dara.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

