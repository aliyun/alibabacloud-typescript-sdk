// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMultiZoneClusterNodeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the multi-zone instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-dj45g7d6rbrd****
   */
  clusterId?: string;
  /**
   * @remarks
   * The node specifications of the core node. For valid values, refer to DescribeInstanceType.
   * 
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * The node specifications of the log node. For valid values, refer to DescribeInstanceType.
   * 
   * @example
   * hbase.sn1.2xlarge
   */
  logInstanceType?: string;
  /**
   * @remarks
   * The node specifications of the master node. For valid values, refer to DescribeInstanceType.
   * 
   * @example
   * hbase.sn1.8xlarge
   */
  masterInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreInstanceType: 'CoreInstanceType',
      logInstanceType: 'LogInstanceType',
      masterInstanceType: 'MasterInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreInstanceType: 'string',
      logInstanceType: 'string',
      masterInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

