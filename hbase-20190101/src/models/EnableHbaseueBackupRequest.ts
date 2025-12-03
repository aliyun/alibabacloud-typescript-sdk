// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableHBaseueBackupRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  clientToken?: string;
  /**
   * @example
   * 800
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  hbaseueClusterId?: string;
  /**
   * @remarks
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

