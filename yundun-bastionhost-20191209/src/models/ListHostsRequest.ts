// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostsRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the host. You can use a domain name or an IP address. Fuzzy match is not supported. Only exact match is supported.
   * 
   * @example
   * 1.1.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The ID of the host group to which the host belongs.
   * > You can call the [ListHostGroups](https://help.aliyun.com/document_detail/201307.html) operation to obtain the host group ID.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The name of the host. Fuzzy match is not supported. Only exact match is supported.
   * 
   * @example
   * host
   */
  hostName?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance whose hosts you want to query.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operating system of the host. Valid values:
   * - **Linux**
   * - **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
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
   * Specifies the number of hosts to return per page in a paged query. Default value: **10**, which indicates that 10 hosts are returned per page.
   * > Do not leave PageSize empty.
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
  projectId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the host. Valid values:
   * - **Local**: local host
   * - **Ecs**: ECS instance
   * - **Rds**: RDS dedicated cluster host
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ECS instance ID or the dedicated cluster host ID to which the host corresponds. Fuzzy match is not supported. Only exact match is supported.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The status of the host. Valid values:
   * - **Normal**: normal
   * - **Release**: released
   * 
   * @example
   * Normal
   */
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      hostGroupId: 'HostGroupId',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      OSType: 'OSType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      hostGroupId: 'string',
      hostName: 'string',
      instanceId: 'string',
      OSType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'string',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

