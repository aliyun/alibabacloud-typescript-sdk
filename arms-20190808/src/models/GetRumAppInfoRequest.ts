// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The group to which the application belongs.
   * 
   * @example
   * default
   */
  appGroup?: string;
  /**
   * @remarks
   * The process ID (PID) of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
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
  static names(): { [key: string]: string } {
    return {
      appGroup: 'AppGroup',
      pid: 'Pid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroup: 'string',
      pid: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

