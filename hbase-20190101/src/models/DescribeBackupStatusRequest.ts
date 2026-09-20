// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HBaseue cluster for which data backup is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

