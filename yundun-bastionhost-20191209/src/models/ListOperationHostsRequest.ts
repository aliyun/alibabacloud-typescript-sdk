// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHostsRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the host to query. You can use a domain name or an IP address. Fuzzy match is not supported. Only exact match is supported.
   * 
   * @example
   * 10.162.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The name of the host to query. Fuzzy match is not supported. Only exact match is supported.
   * 
   * @example
   * abc
   */
  hostName?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-09k22avmw0q
   */
  instanceId?: string;
  /**
   * @remarks
   * The operating system of the host to query. Valid values:
   * - **Linux**
   * - **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  operationProjectId?: string;
  /**
   * @remarks
   * The page number of the current page for a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query.  
   * Maximum value of PageSize: 100. Default value: 20. If you leave PageSize empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the host to query. Valid values:
   * - **Local**: local host
   * - **Ecs**: ECS instance
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ECS instance ID. Exact search.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The status of the host to query. Valid values:
   * - **Normal**: Normal
   * - **Release**: Released
   * 
   * @example
   * Normal
   */
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      OSType: 'OSType',
      operationProjectId: 'OperationProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      hostName: 'string',
      instanceId: 'string',
      OSType: 'string',
      operationProjectId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

