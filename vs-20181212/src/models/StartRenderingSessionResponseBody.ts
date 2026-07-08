// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRenderingSessionResponseBodyLocation extends $dara.Model {
  /**
   * @remarks
   * Province code of the cloud application service instance
   * 
   * @example
   * 610000
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

export class StartRenderingSessionResponseBodyPortMappings extends $dara.Model {
  /**
   * @remarks
   * External port or port range, such as 22. For a port range, separate the start and end ports with a forward slash (/), for example, 10/20.
   * 
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @remarks
   * Internal port or port range. Ports correspond one-to-one with external ports. For a port range, separate the start and end ports with a forward slash (/), for example, 10/20.
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

export class StartRenderingSessionResponseBodyStateInfo extends $dara.Model {
  /**
   * @remarks
   * State description
   * 
   * @example
   * 会话启动中
   */
  comment?: string;
  /**
   * @remarks
   * Session state
   * 
   * @example
   * SessionStarting
   */
  state?: string;
  /**
   * @remarks
   * Last update time of the state
   * 
   * @example
   * 2021-05-06T06:37Z
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

export class StartRenderingSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Instance hostname. By default, this is the EIP used for access.
   * 
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  /**
   * @remarks
   * Is this a repeated request
   * 
   * @example
   * false
   */
  isRepeatedRequest?: boolean;
  /**
   * @remarks
   * Cloud application service instance location information
   */
  location?: StartRenderingSessionResponseBodyLocation;
  /**
   * @remarks
   * Port mapping information
   */
  portMappings?: StartRenderingSessionResponseBodyPortMappings[];
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
   * Session state information
   */
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

