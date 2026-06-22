// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * Cccfd68c474454665ace07efce924****
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

