// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVirtualClusterRequest extends $dara.Model {
  /**
   * @example
   * selectdb-o2yg***-be
   */
  activeClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-vcg-b****-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * selectdb-pu6y****-be
   */
  standbyClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      activeClusterId: 'ActiveClusterId',
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      standbyClusterId: 'StandbyClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeClusterId: 'string',
      DBClusterId: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
      standbyClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

