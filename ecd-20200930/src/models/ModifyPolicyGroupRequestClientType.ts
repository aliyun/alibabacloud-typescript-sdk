// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyGroupRequestClientType extends $dara.Model {
  /**
   * @remarks
   * The type of the Alibaba Cloud Workspace client.
   * 
   * >  If you do not specify the `ClientType` parameter, all types of the client are allowed by default.
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
   * Specifies whether to allow end users to use a specific type of the client to connect to cloud computers.
   * 
   * >  If you do not specify the `ClientType` parameter, all types of the client are allowed by default.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
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

