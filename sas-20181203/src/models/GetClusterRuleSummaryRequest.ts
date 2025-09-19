// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterRuleSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * cc49d88d1exxx
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

