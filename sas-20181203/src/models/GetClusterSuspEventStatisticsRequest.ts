// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterSuspEventStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster that you want to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c6094b964bfc145fe9e418c869e7e****
   */
  clusterId?: string;
  /**
   * @remarks
   * The source of the request. Set this parameter to sas.
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

