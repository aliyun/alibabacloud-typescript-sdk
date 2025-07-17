// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceMapShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the SourceMap files.
   * 
   * This parameter is required.
   */
  fidListShrink?: string;
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
      fidListShrink: 'FidList',
      pid: 'Pid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fidListShrink: 'string',
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

