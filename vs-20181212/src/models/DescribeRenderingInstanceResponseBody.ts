// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenderingInstanceResponseBodyAdditionalIngresses } from "./DescribeRenderingInstanceResponseBodyAdditionalIngresses";
import { DescribeRenderingInstanceResponseBodyConfigInfo } from "./DescribeRenderingInstanceResponseBodyConfigInfo";
import { DescribeRenderingInstanceResponseBodyPortMappings } from "./DescribeRenderingInstanceResponseBodyPortMappings";
import { DescribeRenderingInstanceResponseBodyRenderingStatus } from "./DescribeRenderingInstanceResponseBodyRenderingStatus";
import { DescribeRenderingInstanceResponseBodySystemInfo } from "./DescribeRenderingInstanceResponseBodySystemInfo";


export class DescribeRenderingInstanceResponseBody extends $dara.Model {
  additionalIngresses?: DescribeRenderingInstanceResponseBodyAdditionalIngresses[];
  configInfo?: DescribeRenderingInstanceResponseBodyConfigInfo;
  /**
   * @example
   * 2024-05-07T02:27:06Z
   */
  creationTime?: string;
  egressIp?: string;
  /**
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  isp?: string;
  portMappings?: DescribeRenderingInstanceResponseBodyPortMappings[];
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  renderingSpec?: string;
  renderingStatus?: DescribeRenderingInstanceResponseBodyRenderingStatus;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  storageSize?: number;
  systemInfo?: DescribeRenderingInstanceResponseBodySystemInfo;
  static names(): { [key: string]: string } {
    return {
      additionalIngresses: 'AdditionalIngresses',
      configInfo: 'ConfigInfo',
      creationTime: 'CreationTime',
      egressIp: 'EgressIp',
      hostname: 'Hostname',
      isp: 'Isp',
      portMappings: 'PortMappings',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      renderingStatus: 'RenderingStatus',
      requestId: 'RequestId',
      storageSize: 'StorageSize',
      systemInfo: 'SystemInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalIngresses: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyAdditionalIngresses },
      configInfo: DescribeRenderingInstanceResponseBodyConfigInfo,
      creationTime: 'string',
      egressIp: 'string',
      hostname: 'string',
      isp: 'string',
      portMappings: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyPortMappings },
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      renderingStatus: DescribeRenderingInstanceResponseBodyRenderingStatus,
      requestId: 'string',
      storageSize: 'number',
      systemInfo: DescribeRenderingInstanceResponseBodySystemInfo,
    };
  }

  validate() {
    if(Array.isArray(this.additionalIngresses)) {
      $dara.Model.validateArray(this.additionalIngresses);
    }
    if(this.configInfo && typeof (this.configInfo as any).validate === 'function') {
      (this.configInfo as any).validate();
    }
    if(Array.isArray(this.portMappings)) {
      $dara.Model.validateArray(this.portMappings);
    }
    if(this.renderingStatus && typeof (this.renderingStatus as any).validate === 'function') {
      (this.renderingStatus as any).validate();
    }
    if(this.systemInfo && typeof (this.systemInfo as any).validate === 'function') {
      (this.systemInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

