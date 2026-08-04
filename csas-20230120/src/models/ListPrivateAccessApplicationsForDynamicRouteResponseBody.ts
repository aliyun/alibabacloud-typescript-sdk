// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * Start port.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * End port.
   * 
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications extends $dara.Model {
  /**
   * @remarks
   * Collection of private access application addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * Private access application ID.
   * 
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @remarks
   * Time when the private access application was created.
   * 
   * @example
   * 2022-04-13 13:33:24
   */
  createTime?: string;
  /**
   * @remarks
   * Private access application description.
   * 
   * @example
   * 这是一条被动态路由引用的内网访问应用
   */
  description?: string;
  /**
   * @remarks
   * Private access application name.
   * 
   * @example
   * application_name
   */
  name?: string;
  /**
   * @remarks
   * Collection of private access application port ranges.
   */
  portRanges?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges[];
  /**
   * @remarks
   * Protocol used by the private access application. Valid values:
   * 
   * - **All**: All protocols.
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * @example
   * All
   */
  protocol?: string;
  /**
   * @remarks
   * Status of the private access application. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes extends $dara.Model {
  /**
   * @remarks
   * Collection of private access applications.
   */
  applications?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications[];
  /**
   * @remarks
   * Dynamic route ID.
   * 
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      dynamicRouteId: 'DynamicRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications },
      dynamicRouteId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of dynamic routes.
   */
  dynamicRoutes?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes[];
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRoutes)) {
      $dara.Model.validateArray(this.dynamicRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

