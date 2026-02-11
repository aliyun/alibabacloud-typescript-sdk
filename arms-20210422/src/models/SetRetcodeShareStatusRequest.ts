// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRetcodeShareStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  pid?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      regionId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

