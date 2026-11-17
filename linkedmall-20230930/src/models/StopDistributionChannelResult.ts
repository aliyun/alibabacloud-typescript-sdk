// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDistributionChannelResult extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * CODE_SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The description of the return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

