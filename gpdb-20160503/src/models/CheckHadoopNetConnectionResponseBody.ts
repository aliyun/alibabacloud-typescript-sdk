// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHadoopNetConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message. If the connection fails, an error message is returned. Otherwise, an empty string is returned.
   * 
   * @example
   * connection timeout
   */
  connectionMessage?: string;
  /**
   * @remarks
   * The connection status. Valid values:
   * 
   * - Success: The network is connected.
   * 
   * - Failed: The network is disconnected.
   * 
   * @example
   * Success
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The request ID.
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

