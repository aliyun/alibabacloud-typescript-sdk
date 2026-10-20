// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAddonInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. The target cluster must be in the running state. You can verify the state by checking the State field in the response of DescribeClustersV1 or DescribeClusterDetail.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
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

