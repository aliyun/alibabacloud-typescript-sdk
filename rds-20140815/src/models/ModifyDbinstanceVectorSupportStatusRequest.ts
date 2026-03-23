// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceVectorSupportStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID. You can obtain it by invoking DescribeDBInstances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2vc2bn5c5b7g6****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the vector storage toggle. Valid values:
   * 
   * - **ON**: Enabled.
   * - **OFF**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Scheduled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

