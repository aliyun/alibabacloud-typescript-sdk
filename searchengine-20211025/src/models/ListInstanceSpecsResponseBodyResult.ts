// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceSpecsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The maximum storage of a single data node. Unit: GB.
   * 
   * @example
   * 600
   */
  maxDisk?: number;
  /**
   * @remarks
   * The memory of the instance. Unit: GB.
   * 
   * @example
   * 4
   */
  mem?: number;
  /**
   * @remarks
   * The minimum storage of a single data node. Unit: GB.
   * 
   * @example
   * 100
   */
  minDisk?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      maxDisk: 'maxDisk',
      mem: 'mem',
      minDisk: 'minDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      maxDisk: 'number',
      mem: 'number',
      minDisk: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

