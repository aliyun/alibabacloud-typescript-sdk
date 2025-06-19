// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartRenderingSessionResponseBodyLocation } from "./StartRenderingSessionResponseBodyLocation";
import { StartRenderingSessionResponseBodyPortMappings } from "./StartRenderingSessionResponseBodyPortMappings";
import { StartRenderingSessionResponseBodyStateInfo } from "./StartRenderingSessionResponseBodyStateInfo";


export class StartRenderingSessionResponseBody extends $dara.Model {
  /**
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  /**
   * @example
   * false
   */
  isRepeatedRequest?: boolean;
  location?: StartRenderingSessionResponseBodyLocation;
  portMappings?: StartRenderingSessionResponseBodyPortMappings[];
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
  stateInfo?: StartRenderingSessionResponseBodyStateInfo;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      isRepeatedRequest: 'IsRepeatedRequest',
      location: 'Location',
      portMappings: 'PortMappings',
      renderingInstanceId: 'RenderingInstanceId',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      stateInfo: 'StateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      isRepeatedRequest: 'boolean',
      location: StartRenderingSessionResponseBodyLocation,
      portMappings: { 'type': 'array', 'itemType': StartRenderingSessionResponseBodyPortMappings },
      renderingInstanceId: 'string',
      requestId: 'string',
      sessionId: 'string',
      stateInfo: StartRenderingSessionResponseBodyStateInfo,
    };
  }

  validate() {
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

