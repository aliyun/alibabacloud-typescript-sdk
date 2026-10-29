// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingSessionResponseBodyAdditionalIngressesPortMappings extends $dara.Model {
  /**
   * @remarks
   * The external port or port range, such as 22. For a port range, separate the start and end ports with a forward slash (/), for example, 10/20.
   * 
   * @example
   * 11060/11079
   */
  externalPort?: string;
  /**
   * @remarks
   * The internal port or port range. The internal ports correspond one-to-one to the external ports. For a port range, separate the start and end ports with a forward slash (/), for example, 10/20.
   * 
   * @example
   * 11060/11079
   */
  internalPort?: string;
  static names(): { [key: string]: string } {
    return {
      externalPort: 'ExternalPort',
      internalPort: 'InternalPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalPort: 'string',
      internalPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingSessionResponseBodyAdditionalIngresses extends $dara.Model {
  /**
   * @remarks
   * The domain name or IP address of the cloud application service instance.
   * 
   * @example
   * 111.45.29.96
   */
  hostname?: string;
  /**
   * @remarks
   * The ISP code. Valid values:
   * 1. cmcc
   * 2. unicom
   * 3. telecom
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * The port mapping list.
   */
  portMappings?: DescribeRenderingSessionResponseBodyAdditionalIngressesPortMappings[];
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      isp: 'Isp',
      portMappings: 'PortMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      isp: 'string',
      portMappings: { 'type': 'array', 'itemType': DescribeRenderingSessionResponseBodyAdditionalIngressesPortMappings },
    };
  }

  validate() {
    if(Array.isArray(this.portMappings)) {
      $dara.Model.validateArray(this.portMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingSessionResponseBodyLocation extends $dara.Model {
  /**
   * @remarks
   * The province code of the cloud application service instance.
   * 
   * @example
   * 310000
   */
  provinceCode?: string;
  static names(): { [key: string]: string } {
    return {
      provinceCode: 'ProvinceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingSessionResponseBodyPortMappings extends $dara.Model {
  /**
   * @remarks
   * The external port or port range, such as 22. For a port range, separate the start and end ports with a forward slash (/), for example, 10/20.
   * 
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @remarks
   * The internal port or port range. The internal ports correspond one-to-one to the external ports. For a port range, separate the start and end ports with a forward slash (/), for example, 10/20.
   * 
   * @example
   * 49008/49015
   */
  internalPort?: string;
  static names(): { [key: string]: string } {
    return {
      externalPort: 'ExternalPort',
      internalPort: 'InternalPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalPort: 'string',
      internalPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingSessionResponseBodyStateInfo extends $dara.Model {
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * Started
   */
  comment?: string;
  /**
   * @remarks
   * The session status. Valid values:
   * 1. SessionStarting: The session is starting.
   * 2. SessionStartSuspended: The session start is suspended. You can initiate start again to retry.
   * 3. SessionStarted: The session is started or in use.
   * 4. SessionStartFailed: The session failed to start.
   * 5. SessionAbnormal: The session is abnormal after a successful start.
   * 6. SessionStopping: The session is stopping.
   * 7. SessionStopFailed: The session failed to stop.
   * 
   * @example
   * SessionStarted
   */
  state?: string;
  /**
   * @remarks
   * The time when the status was last updated. The time follows the ISO 8601 standard and includes the time zone offset. The format is YYYY-MM-DDTHH:mm:ss+HH:mm.
   * 
   * @example
   * 2024-10-15T10:05:20+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      state: 'State',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      state: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The additional optional ingress network information.
   */
  additionalIngresses?: DescribeRenderingSessionResponseBodyAdditionalIngresses[];
  /**
   * @remarks
   * The cloud application ID.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * c91263a0-f9ac-45bd-bbe9-6e293ad32d91
   */
  clientId?: string;
  /**
   * @remarks
   * The instance hostname. By default, the value is the elastic IP address (EIP) used for access.
   * 
   * @example
   * 111.45.29.96
   */
  hostname?: string;
  /**
   * @remarks
   * The ISP code. Valid values:
   * 1. cmcc
   * 2. unicom
   * 3. telecom
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * The location information of the cloud application service instance.
   */
  location?: DescribeRenderingSessionResponseBodyLocation;
  /**
   * @remarks
   * The cloud application patch package ID. An empty value indicates the original version.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * The port mapping information.
   */
  portMappings?: DescribeRenderingSessionResponseBodyPortMappings[];
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * session-i205217481741918129226
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time. The time is in UTC and follows the ISO 8601 standard. The format is YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2025-05-18T02:20:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The session status information.
   */
  stateInfo?: DescribeRenderingSessionResponseBodyStateInfo;
  static names(): { [key: string]: string } {
    return {
      additionalIngresses: 'AdditionalIngresses',
      appId: 'AppId',
      clientId: 'ClientId',
      hostname: 'Hostname',
      isp: 'Isp',
      location: 'Location',
      patchId: 'PatchId',
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
      patchId: 'string',
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

