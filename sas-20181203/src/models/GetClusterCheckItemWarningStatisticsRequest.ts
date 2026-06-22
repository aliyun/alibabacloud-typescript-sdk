// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterCheckItemWarningStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster that you want to query.
   * > Call the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/182997.html) operation to obtain this parameter.
   * 
   * @example
   * cd49575861a3044d49c954e4b3911****
   */
  clusterId?: string;
  /**
   * @remarks
   * The UUID of the server.
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
   * 
   * @example
   * ae1527a9-2308-46ab-b10a-48ae7ff7****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

