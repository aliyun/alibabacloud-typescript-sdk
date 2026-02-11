// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceAppRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

