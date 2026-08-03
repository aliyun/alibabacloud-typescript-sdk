// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlarmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code returned by the alarm service
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 闹钟id为空
   */
  message?: string;
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the alarm deletion was executed successfully
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

