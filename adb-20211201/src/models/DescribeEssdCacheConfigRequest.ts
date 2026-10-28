// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEssdCacheConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf685u1o987hj6rn
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. The value must be the same as the region of the instance specified by DBClusterId.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

