// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationSlotsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB cluster to query.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-test123456
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The child node name of the distributed instance, which is used to filter replication slots.
   * 
   * @example
   * testGroup
   */
  subGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      subGroupName: 'SubGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      subGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

