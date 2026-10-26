// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHostAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the host account that you want to query. Only exact match is supported.
   * 
   * @example
   * root
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the host for which you want to query host accounts.
   * > You can call the [ListOperationHosts](https://help.aliyun.com/document_detail/2758857.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the current page when paging in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page when paging in a paged query.  
   * The maximum value of the PageSize parameter is 100. Default value: 20. If you leave this parameter empty, 20 entries are returned by default.
   * > Specify a value for the PageSize parameter.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

