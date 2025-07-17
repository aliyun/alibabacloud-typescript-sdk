// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceMapRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the SourceMap files.
   * 
   * This parameter is required.
   */
  fidList?: string[];
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fidList: 'FidList',
      pid: 'Pid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fidList: { 'type': 'array', 'itemType': 'string' },
      pid: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fidList)) {
      $dara.Model.validateArray(this.fidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

