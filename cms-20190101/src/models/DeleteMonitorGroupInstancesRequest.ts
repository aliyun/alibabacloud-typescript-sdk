// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorGroupInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * > For more information about how to obtain the abbreviation of a cloud service name, see the `metricCategory` field in the `Labels` response parameter of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request format, and service limits, but does not delete the instances. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a normal request. If the request passes the check, the instances are deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * The IDs of the instances to be deleted. Separate multiple instance IDs with commas (,). You can delete up to 20 instances at a time.
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
      dryRun: 'DryRun',
      groupId: 'GroupId',
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dryRun: 'boolean',
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

