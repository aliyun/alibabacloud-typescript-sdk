// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingSessionResponseBodyAdditionalIngressesPortMappings extends $dara.Model {
  externalPort?: string;
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
  hostname?: string;
  isp?: string;
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
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
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
  comment?: string;
  /**
   * @example
   * SessionStarted
   */
  state?: string;
  /**
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

