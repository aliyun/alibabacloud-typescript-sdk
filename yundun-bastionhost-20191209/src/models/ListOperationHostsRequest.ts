// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHostsRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the host. You can specify a domain name or an IP address. Only exact matches are supported.
   * 
   * @example
   * 10.162.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The name of the host. Only exact matches are supported.
   * 
   * @example
   * abc
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-09k22avmw0q
   */
  instanceId?: string;
  /**
   * @remarks
   * The operating system of the host. Valid values:
   * 
   * - **Linux**
   * 
   * - **Windows**
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * The number of the page to return. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.<br> The maximum value is 100. The default value is 20. If you do not specify this parameter, the default value is used.<br>
   * 
   * > Specify a value for this parameter.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the region where the Bastionhost instance resides.
   * 
   * > For more information about regions and zones, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the host. Valid values:
   * 
   * - **Local**: a local host
   * 
   * - **Ecs**: an ECS instance
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the ECS instance. Only exact matches are supported.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The state of the host. Valid values:
   * 
   * - **Normal**: The host is running.
   * 
   * - **Release**: The host is released.
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

