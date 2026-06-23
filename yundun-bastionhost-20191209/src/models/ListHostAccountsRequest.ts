// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the host account that you want to query. The name can be up to 128 characters in length. This parameter supports only term queries.
   * 
   * @example
   * abc
   */
  hostAccountName?: string;
  /**
   * @remarks
   * The ID of the host for which you want to query host accounts.
   * 
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to obtain the host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The array of host IDs for which you want to query host accounts.
   * 
   * > This parameter takes effect only when the value of the HostId parameter is 0. If the HostId parameter is specified with a non-zero value, this parameter is ignored.
   * 
   * @example
   * ["2","3"]
   */
  hostIds?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.<br> The maximum value of the PageSize parameter is 100. The default value is 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The protocol of the host account that you want to query.<br> Valid values:
   * 
   * - SSH
   * 
   * - RDP
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
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
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocolName: 'ProtocolName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      hostIds: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      protocolName: 'string',
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

