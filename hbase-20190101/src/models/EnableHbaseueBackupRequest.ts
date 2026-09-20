// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableHBaseueBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The cold storage size for the backup service. The minimum value is 800 GB.
   * 
   * @example
   * 800
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * The ID of the HBaseue cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  hbaseueClusterId?: string;
  /**
   * @remarks
   * The number of backup nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      coldStorageSize: 'ColdStorageSize',
      hbaseueClusterId: 'HbaseueClusterId',
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      coldStorageSize: 'number',
      hbaseueClusterId: 'string',
      nodeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

