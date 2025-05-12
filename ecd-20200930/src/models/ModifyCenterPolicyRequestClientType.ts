// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenterPolicyRequestClientType extends $dara.Model {
  /**
   * @remarks
   * The type of the Alibaba Cloud Workspace client that end users can use to connect to cloud computers.
   * 
   * Valid values:
   * 
   * *   html5: the web client.
   * *   android: the Android client.
   * *   ios: the iOS client.
   * *   windows: the Windows client.
   * *   macos: the macOS client.
   * 
   * @example
   * android
   */
  clientType?: string;
  /**
   * @remarks
   * Specifies whether end users can use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.
   * 
   * >  If you don\\"t specify `ClientType`, any client can be used to connect to cloud computers.
   * 
   * Valid values:
   * 
   * *   off: End users cannot use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.
   * *   on: End users can use the specified type of Alibaba Cloud Workspace client to connect to cloud computers.
   * 
   * @example
   * off
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

