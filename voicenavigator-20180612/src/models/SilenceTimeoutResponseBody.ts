// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SilenceTimeoutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The system\\"s next action.
   * 
   * @example
   * TransferToAgent
   */
  action?: string;
  /**
   * @remarks
   * Parameters for the action defined in the Action parameter.
   * 
   * @example
   * { "skillGroupId": "ABC"}
   */
  actionParams?: string;
  /**
   * @remarks
   * Indicates whether the action is interruptible.
   * 
   * @example
   * false
   */
  interruptible?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * The text response to play to the user.
   * 
   * @example
   * 正在为你转接人工坐席
   */
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

