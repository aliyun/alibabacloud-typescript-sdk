// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SilenceTimeoutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action.
   * 
   * @example
   * TransferToAgent
   */
  action?: string;
  /**
   * @remarks
   * The action parameters.
   * 
   * @example
   * { "skillGroupId": "ABC"}
   */
  actionParams?: string;
  /**
   * @remarks
   * Indicates whether the action can be interrupted.
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
   * The text response.
   * 
   * @example
   * Transferring you to a human agent
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

