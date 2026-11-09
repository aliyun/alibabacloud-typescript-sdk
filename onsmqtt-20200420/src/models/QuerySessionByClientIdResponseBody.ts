// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionByClientIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the ApsaraMQ for MQTT client is connected to the ApsaraMQ for MQTT broker. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  onlineStatus?: boolean;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DBBC0E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatus: 'OnlineStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatus: 'boolean',
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

