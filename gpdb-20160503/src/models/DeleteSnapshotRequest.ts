// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0/3522648
   */
  lsn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      lsn: 'Lsn',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lsn: 'string',
      projectId: 'string',
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

