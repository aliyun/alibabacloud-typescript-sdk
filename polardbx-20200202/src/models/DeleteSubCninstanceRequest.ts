// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubCNInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  instanceClusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      instanceClusterName: 'InstanceClusterName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      instanceClusterName: 'string',
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

