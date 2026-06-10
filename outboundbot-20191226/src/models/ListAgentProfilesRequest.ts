// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentProfilesRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the application. This is an optional system field.
   * 
   * @example
   * 127.0.0.1
   */
  appIp?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      appIp: 'AppIp',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIp: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

