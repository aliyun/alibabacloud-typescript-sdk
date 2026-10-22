// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
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
   * - **Proxy**: proxy
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
  /**
   * @remarks
   * The page number of the current page for paging in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for paging in a paged query.  
   * Maximum value: 100. Default value: 20. If this parameter is left empty, 20 entries are returned by default.
   * > Do not leave this parameter empty.
   * 
   * @example
   * 20
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
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      projectId: 'ProjectId',
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

