// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHpcClustersResponseBodyHpcClustersHpcCluster extends $dara.Model {
  /**
   * @remarks
   * The description of the HPC cluster.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The description of the HPC cluster.
   * 
   * @example
   * hpc-bp1a5zr3u7nq9cx****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * The name of the HPC cluster.
   * 
   * @example
   * testName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hpcClusterId: 'HpcClusterId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hpcClusterId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

