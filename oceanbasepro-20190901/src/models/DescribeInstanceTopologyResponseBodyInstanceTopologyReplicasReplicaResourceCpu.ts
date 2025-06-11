// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceCpu extends $dara.Model {
  /**
   * @remarks
   * The total number of CPU cores of the replica.
   * 
   * @example
   * 16
   */
  totalCpu?: number;
  /**
   * @remarks
   * The number of CPU cores used by the replica.
   * 
   * @example
   * 8
   */
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      totalCpu: 'TotalCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCpu: 'number',
      usedCpu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

