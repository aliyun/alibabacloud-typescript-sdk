// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyClustersNodes extends $dara.Model {
  /**
   * @remarks
   * The number of malfunctioning compute nodes.
   * 
   * @example
   * 0
   */
  abnormalCounts?: number;
  /**
   * @remarks
   * The number of compute nodes that are being created.
   * 
   * @example
   * 0
   */
  creatingCounts?: number;
  /**
   * @remarks
   * The number of running compute nodes.
   * 
   * @example
   * 1
   */
  runningCounts?: number;
  static names(): { [key: string]: string } {
    return {
      abnormalCounts: 'AbnormalCounts',
      creatingCounts: 'CreatingCounts',
      runningCounts: 'RunningCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalCounts: 'number',
      creatingCounts: 'number',
      runningCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

