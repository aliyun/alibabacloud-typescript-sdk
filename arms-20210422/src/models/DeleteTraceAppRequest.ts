// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTraceAppRequest extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pid: 'string',
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

