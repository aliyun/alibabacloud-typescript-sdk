// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlussResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The disk capacity of a single TabletServer node, in GiB.
   * 
   * @example
   * 900
   */
  diskSizeInGB?: number;
  /**
   * @remarks
   * The node specifications of the TabletServer.
   * 
   * @example
   * 4 RCU
   */
  slaveModel?: string;
  /**
   * @remarks
   * The number of TabletServer nodes.
   * 
   * @example
   * 3
   */
  slaveNum?: number;
  /**
   * @remarks
   * The maximum number of elastic compute resources for the lake-stream synchronization service, in CUs.
   * 
   * @example
   * 100
   */
  tieringPostCu?: number;
  /**
   * @remarks
   * The baseline resource count of the lake-stream synchronization service, in CUs.
   */
  tieringPreCu?: number;
  static names(): { [key: string]: string } {
    return {
      diskSizeInGB: 'DiskSizeInGB',
      slaveModel: 'SlaveModel',
      slaveNum: 'SlaveNum',
      tieringPostCu: 'TieringPostCu',
      tieringPreCu: 'TieringPreCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSizeInGB: 'number',
      slaveModel: 'string',
      slaveNum: 'number',
      tieringPostCu: 'number',
      tieringPreCu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

