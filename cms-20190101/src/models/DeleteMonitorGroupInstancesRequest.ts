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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - **true**: performs a dry run and does not delete the resource instances. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a regular request and deletes the resource instances if the request passes the dry run.
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
   * The IDs of the instances to delete. Separate multiple IDs with commas. You can delete up to 20 instances at a time.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupId: 'GroupId',
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
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

