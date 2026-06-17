// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseSupabaseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The Supabase instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sbp-180****
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

