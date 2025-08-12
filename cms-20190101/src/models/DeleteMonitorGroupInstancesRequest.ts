// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorGroupInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * >  For more information about how to obtain the abbreviation of a cloud service name, see `metricCategory` in the response parameter `Labels` of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * The instances to be removed from the application group. Separate multiple instances with commas (,). You can remove a maximum of 20 instances from an application group at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * i-a2d5q7pm3f912****,i-a2d5q7pm3f222****
   */
  instanceIdList?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIdList: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

