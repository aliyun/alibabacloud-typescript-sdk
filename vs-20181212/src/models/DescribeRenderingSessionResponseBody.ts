// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenderingSessionResponseBodyAdditionalIngresses } from "./DescribeRenderingSessionResponseBodyAdditionalIngresses";
import { DescribeRenderingSessionResponseBodyLocation } from "./DescribeRenderingSessionResponseBodyLocation";
import { DescribeRenderingSessionResponseBodyPortMappings } from "./DescribeRenderingSessionResponseBodyPortMappings";
import { DescribeRenderingSessionResponseBodyStateInfo } from "./DescribeRenderingSessionResponseBodyStateInfo";


export class DescribeRenderingSessionResponseBody extends $dara.Model {
  additionalIngresses?: DescribeRenderingSessionResponseBodyAdditionalIngresses[];
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * c91263a0-f9ac-45bd-bbe9-6e293ad32d91
   */
  clientId?: string;
  /**
   * @example
   * 111.45.29.96
   */
  hostname?: string;
  isp?: string;
  location?: DescribeRenderingSessionResponseBodyLocation;
  portMappings?: DescribeRenderingSessionResponseBodyPortMappings[];
  renderingInstanceId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * session-i205217481741918129226
   */
  sessionId?: string;
  /**
   * @example
   * 2025-05-18T02:20:00Z
   */
  startTime?: string;
  stateInfo?: DescribeRenderingSessionResponseBodyStateInfo;
  static names(): { [key: string]: string } {
    return {
      additionalIngresses: 'AdditionalIngresses',
      appId: 'AppId',
      clientId: 'ClientId',
      hostname: 'Hostname',
      isp: 'Isp',
      location: 'Location',
      portMappings: 'PortMappings',
      renderingInstanceId: 'RenderingInstanceId',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      stateInfo: 'StateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalIngresses: { 'type': 'array', 'itemType': DescribeRenderingSessionResponseBodyAdditionalIngresses },
      appId: 'string',
      clientId: 'string',
      hostname: 'string',
      isp: 'string',
      location: DescribeRenderingSessionResponseBodyLocation,
      portMappings: { 'type': 'array', 'itemType': DescribeRenderingSessionResponseBodyPortMappings },
      renderingInstanceId: 'string',
      requestId: 'string',
      sessionId: 'string',
      startTime: 'string',
      stateInfo: DescribeRenderingSessionResponseBodyStateInfo,
    };
  }

  validate() {
    if(Array.isArray(this.additionalIngresses)) {
      $dara.Model.validateArray(this.additionalIngresses);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.portMappings)) {
      $dara.Model.validateArray(this.portMappings);
    }
    if(this.stateInfo && typeof (this.stateInfo as any).validate === 'function') {
      (this.stateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

