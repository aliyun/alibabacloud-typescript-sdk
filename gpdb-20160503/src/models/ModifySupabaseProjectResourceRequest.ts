// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySupabaseProjectResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UPGRADE,DOWNGRADE
   */
  modifyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sbp-tyarplz****
   */
  projectId?: string;
  /**
   * @example
   * 2C4G
   */
  projectSpec?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      modifyType: 'ModifyType',
      projectId: 'ProjectId',
      projectSpec: 'ProjectSpec',
      regionId: 'RegionId',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyType: 'string',
      projectId: 'string',
      projectSpec: 'string',
      regionId: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

