// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewInstanceRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidParamter
   */
  code?: string;
  /**
   * @example
   * Parameter is null or invalid.
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  root?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      root: 'boolean',
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

