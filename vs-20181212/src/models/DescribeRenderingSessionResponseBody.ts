// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingSessionResponseBodyAdditionalIngressesPortMappings extends $dara.Model {
  /**
   * @remarks
   * Public port or port range, such as 22. For a port range, use a forward slash (/) to separate the start and end ports. Example: 10/20.
   * 
   * @example
   * 11060/11079
   */
  externalPort?: string;
  /**
   * @remarks
   * Private port or port range. Each private port maps one-to-one with a public port. For a port range, use a forward slash (/) to separate the start and end ports. Example: 10/20.
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
   * Domain name or IP address of the cloud application service instance
   * 
   * @example
   * 111.45.29.96
   */
  hostname?: string;
  /**
   * @remarks
   * Carrier code. Valid values:
   * 
   * 1. cmcc
   * 
   * 2. unicom
   * 
   * 3. telecom
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * List of port mappings
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
   * Province code of the cloud application service instance
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
   * Public port or port range, such as 22. For a port range, use a forward slash (/) to separate the start and end ports. Example: 10/20.
   * 
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @remarks
   * Private port or port range. Each private port maps one-to-one with a public port. For a port range, use a forward slash (/) to separate the start and end ports. Example: 10/20.
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
   * State description
   * 
   * @example
   * 已启动
   */
  comment?: string;
  /**
   * @remarks
   * Session state. Valid values:
   * 
   * 1. SessionStarting: Starting the session
   * 
   * 2. SessionStartSuspended: Session start is suspended. Retry by calling Start again.
   * 
   * 3. SessionStarted: Session started or in use
   * 
   * 4. SessionStartFailed: Session failed to start
   * 
   * 5. SessionAbnormal: Session became abnormal after starting successfully
   * 
   * 6. SessionStopping: Stopping the session
   * 
   * 7. SessionStopFailed: Session failed to stop
   * 
   * @example
   * SessionStarted
   */
  state?: string;
  /**
   * @remarks
   * Time when the state was last updated
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
   * Additional optional ingress network information
   */
  additionalIngresses?: DescribeRenderingSessionResponseBodyAdditionalIngresses[];
  /**
   * @remarks
   * Cloud application ID
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * End client ID
   * 
   * @example
   * c91263a0-f9ac-45bd-bbe9-6e293ad32d91
   */
  clientId?: string;
  /**
   * @remarks
   * Instance hostname. Defaults to the EIP address.
   * 
   * @example
   * 111.45.29.96
   */
  hostname?: string;
  /**
   * @remarks
   * Carrier code. Valid values:
   * 
   * 1. cmcc
   * 
   * 2. unicom
   * 
   * 3. telecom
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * Cloud application service instance location
   */
  location?: DescribeRenderingSessionResponseBodyLocation;
  /**
   * @remarks
   * Cloud application patch package ID. An empty value means the original version.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @remarks
   * Port mapping information
   */
  portMappings?: DescribeRenderingSessionResponseBodyPortMappings[];
  /**
   * @remarks
   * Cloud application service instance ID
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * session-i205217481741918129226
   */
  sessionId?: string;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 2025-05-18T02:20:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Session state information
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

