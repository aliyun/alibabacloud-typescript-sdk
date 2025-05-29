// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenderingInstanceResponseBodyConfigInfo } from "./DescribeRenderingInstanceResponseBodyConfigInfo";
import { DescribeRenderingInstanceResponseBodyPortMappings } from "./DescribeRenderingInstanceResponseBodyPortMappings";
import { DescribeRenderingInstanceResponseBodyRenderingStatus } from "./DescribeRenderingInstanceResponseBodyRenderingStatus";
import { DescribeRenderingInstanceResponseBodySystemInfo } from "./DescribeRenderingInstanceResponseBodySystemInfo";


export class DescribeRenderingInstanceResponseBody extends $dara.Model {
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
      configInfo: 'ConfigInfo',
      creationTime: 'CreationTime',
      egressIp: 'EgressIp',
      hostname: 'Hostname',
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
      configInfo: DescribeRenderingInstanceResponseBodyConfigInfo,
      creationTime: 'string',
      egressIp: 'string',
      hostname: 'string',
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

