// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-tl329pvu70x
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the network domain.
   * 
   * @example
   * SSH Proxy
   */
  networkDomainName?: string;
  /**
   * @remarks
   * The type of the network domain. Valid values:
   * 
   * - **Direct**: direct connection
   * 
   * - **Proxy**: proxy connection
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
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
   * The number of entries to return on each page.<br> The maximum value is 100. The default value is 20. If you do not specify this parameter, 20 entries are returned on each page.<br>
   * 
   * > Do not leave the PageSize value empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about regions and zones, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
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

