// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySupabaseProjectResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The modification type.
   * 
   * This parameter is required.
   * 
   * @example
   * UPGRADE,DOWNGRADE
   */
  modifyType?: string;
  /**
   * @remarks
   * The Supabase project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-tyarplz****
   */
  projectId?: string;
  /**
   * @remarks
   * The new project specifications.
   * 
   * @example
   * 2C4G
   */
  projectSpec?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The storage size, in GB.
   * 
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

