// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBClusterBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of Cluster 1.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv2ez-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of Cluster 2.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxb9f2w-be
   */
  DBClusterIdBak?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv2ez
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBClusterIdBak: 'DBClusterIdBak',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBClusterIdBak: 'string',
      DBInstanceId: 'string',
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

