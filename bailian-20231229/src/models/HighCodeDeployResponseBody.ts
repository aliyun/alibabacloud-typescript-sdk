// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HighCodeDeployResponseBody extends $dara.Model {
  /**
   * @example
   * {\"key\": \"value\"}
   */
  data?: string;
  /**
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @example
   * 用户不存在
   */
  errorMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
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

