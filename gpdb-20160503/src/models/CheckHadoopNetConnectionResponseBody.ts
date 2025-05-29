// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHadoopNetConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return message: Returns error information if the connection fails, otherwise returns an empty string ("").
   * 
   * @example
   * connection timeout
   */
  connectionMessage?: string;
  /**
   * @remarks
   * Connection status:
   * 
   * - Network connected: Success
   * 
   * - Network not connected: Failed
   * 
   * @example
   * Success
   */
  connectionStatus?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionMessage: 'ConnectionMessage',
      connectionStatus: 'ConnectionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionMessage: 'string',
      connectionStatus: 'string',
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

