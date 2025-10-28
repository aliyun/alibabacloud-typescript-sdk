// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesGroups extends $dara.Model {
  group?: string[];
  static names(): { [key: string]: string } {
    return {
      group: 'group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesIps extends $dara.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyPublishedServicesListListPublishedServices extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * ECD1D6FC-4307-4583-BA6F-215F3857E****
   */
  appId?: string;
  /**
   * @remarks
   * Indicates whether the application runs in a Docker container. Valid values:
   * 
   * *   true: The application runs in a Docker container.
   * *   false: The application does not run in a Docker container.
   * 
   * @example
   * false
   */
  dockerApplication?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * ""
   */
  group2Ip?: string;
  groups?: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesGroups;
  ips?: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesIps;
  /**
   * @remarks
   * The name of the published service.
   * 
   * @example
   * providers:com.****
   */
  name?: string;
  /**
   * @remarks
   * The type of the published service.
   * 
   * @example
   * RESTful
   */
  type?: string;
  /**
   * @remarks
   * The version of the published services.
   * 
   * @example
   * --
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dockerApplication: 'DockerApplication',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dockerApplication: 'boolean',
      group2Ip: 'string',
      groups: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesGroups,
      ips: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServicesIps,
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.groups && typeof (this.groups as any).validate === 'function') {
      (this.groups as any).validate();
    }
    if(this.ips && typeof (this.ips as any).validate === 'function') {
      (this.ips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyPublishedServicesList extends $dara.Model {
  listPublishedServices?: ListPublishedServicesResponseBodyPublishedServicesListListPublishedServices[];
  static names(): { [key: string]: string } {
    return {
      listPublishedServices: 'ListPublishedServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listPublishedServices: { 'type': 'array', 'itemType': ListPublishedServicesResponseBodyPublishedServicesListListPublishedServices },
    };
  }

  validate() {
    if(Array.isArray(this.listPublishedServices)) {
      $dara.Model.validateArray(this.listPublishedServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The published services.
   */
  publishedServicesList?: ListPublishedServicesResponseBodyPublishedServicesList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1D6FC-4307-4583-BA6F-215F3857E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      publishedServicesList: 'PublishedServicesList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      publishedServicesList: ListPublishedServicesResponseBodyPublishedServicesList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.publishedServicesList && typeof (this.publishedServicesList as any).validate === 'function') {
      (this.publishedServicesList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

