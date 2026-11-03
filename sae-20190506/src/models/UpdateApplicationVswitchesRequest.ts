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
  /**
   * @remarks
   * Specifies whether to deploy the application immediately. Valid values:
   * 
   * - **true**: Deploys the application immediately. This is the default value.
   * - **false**: Deploys the application later.
   * 
   * @example
   * true
   */
  deploy?: boolean;
  /**
   * @remarks
   * The minimum percentage of ready instances.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of ready instances.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * The vSwitch ID.
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
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deploy: 'boolean',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
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

