// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRenderingSessionResponseBodyLocation extends $dara.Model {
  /**
   * @remarks
   * The province code of the cloud application service instance.
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
   * The public port or port range, such as 22. For a port range, separate the start port and end port with a forward slash (/), for example, 10/20.
   * 
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @remarks
   * The internal port or port range. The internal port corresponds to the public port on a one-to-one basis. For a port range, separate the start port and end port with a forward slash (/), for example, 10/20.
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
   * The state description.
   * 
   * @example
   * Session starting
   */
  comment?: string;
  /**
   * @remarks
   * The session state.
   * 
   * @example
   * SessionStarting
   */
  state?: string;
  /**
   * @remarks
   * The time when the state was last updated. The value is a UTC time in the YYYY-MM-DDTHH:mmZ format based on the ISO 8601 standard.
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
   * The instance hostname. The default value is the access elastic IP address (EIP).
   * 
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  /**
   * @remarks
   * Indicates whether the request is a repeated request.
   * 
   * @example
   * false
   */
  isRepeatedRequest?: boolean;
  /**
   * @remarks
   * The location information of the cloud application service instance.
   */
  location?: StartRenderingSessionResponseBodyLocation;
  /**
   * @remarks
   * The port mapping information.
   */
  portMappings?: StartRenderingSessionResponseBodyPortMappings[];
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
   * The session state information.
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

