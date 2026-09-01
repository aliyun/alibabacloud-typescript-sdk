// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterceptionSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to query. This parameter takes effect only on the InterceptionCountInDays response parameter.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c2999***bb61b
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of cluster types to exclude.
   */
  excludeClusterTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      excludeClusterTypes: 'ExcludeClusterTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      excludeClusterTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludeClusterTypes)) {
      $dara.Model.validateArray(this.excludeClusterTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

