// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMeteringDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * parameter \\"service\\" can not be blank.
   */
  dynamicMessage?: string;
  /**
   * @example
   * false
   */
  forceFatal?: boolean;
  /**
   * @example
   * Instance 5723f7ee-952d-411f-94f4-b942a550d9b8 does not exist.
   */
  message?: string;
  /**
   * @example
   * A6A33748-D573-593C-A3BC-593E33D68311
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      forceFatal: 'ForceFatal',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
      forceFatal: 'boolean',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
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

