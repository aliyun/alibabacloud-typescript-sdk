// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterSuspEventStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * @example
   * c6094b964bfc145fe9e418c869e7e****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the request source. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      from: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

