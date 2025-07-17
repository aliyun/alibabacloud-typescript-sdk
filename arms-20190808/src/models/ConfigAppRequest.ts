// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigAppRequest extends $dara.Model {
  /**
   * @remarks
   * The process identifier (PID) of the application. Separate multiple PIDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * iioe7jcnuk@582846f37******,atc889zkcf@d8deedfa9bf******
   */
  appIds?: string;
  /**
   * @remarks
   * Specifies whether to turn on or off the main switch of the ARMS agent. The monitoring stops after the switch is turned off. If you do not specify this parameter, the main switch status of the ARMS agent is queried.
   * 
   * *   `true`: turns on the switch
   * *   `false`: turns off the switch
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the application. Set the value to **TRACE**.
   * 
   * @example
   * TRACE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      enable: 'Enable',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      enable: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

