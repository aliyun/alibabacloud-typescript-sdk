// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationVswitchesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  deploy?: boolean;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2ze559r1z1bpwqxwp****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deploy: 'Deploy',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deploy: 'boolean',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

