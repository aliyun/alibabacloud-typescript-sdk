// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostAccountsForHostShareKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the host shared key.
   * > You can call the [ListHostShareKeys](https://help.aliyun.com/document_detail/462973.html) operation to retrieve this parameter.
   * 
   * @example
   * 1124
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to retrieve this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies the page number of the returned results. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The Settings for the paged query determine the number of host accounts associated with the host shared key to return on each page during paging. Default value: **10**, which indicates that 10 host accounts associated with the host shared key are displayed on each page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'number',
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

