// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes extends $dara.Model {
  /**
   * @remarks
   * The client type.
   * 
   * Valid values:
   * 
   * *   html5: web client
   * *   android: Android client
   * *   windows: Windows client
   * *   ios: iOS client
   * *   macos: macOS client
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * Indicates whether end users are allowed to use a specific type of the client to connect to cloud computers.
   * 
   * Valid values:
   * 
   * *   OFF
   * *   ON
   * 
   * @example
   * ON
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

