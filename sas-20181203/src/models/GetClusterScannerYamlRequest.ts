// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterScannerYamlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to query.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * cd49575861a3044d49c954e4b3911****
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

