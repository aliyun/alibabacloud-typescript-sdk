// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesGroups extends $dara.Model {
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

export class ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesIps extends $dara.Model {
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

export class ListConsumedServicesResponseBodyConsumedServicesListListConsumedServices extends $dara.Model {
  appId?: string;
  dockerApplication?: boolean;
  group2Ip?: string;
  groups?: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesGroups;
  ips?: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesIps;
  name?: string;
  type?: string;
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
      groups: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesGroups,
      ips: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServicesIps,
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

export class ListConsumedServicesResponseBodyConsumedServicesList extends $dara.Model {
  listConsumedServices?: ListConsumedServicesResponseBodyConsumedServicesListListConsumedServices[];
  static names(): { [key: string]: string } {
    return {
      listConsumedServices: 'ListConsumedServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listConsumedServices: { 'type': 'array', 'itemType': ListConsumedServicesResponseBodyConsumedServicesListListConsumedServices },
    };
  }

  validate() {
    if(Array.isArray(this.listConsumedServices)) {
      $dara.Model.validateArray(this.listConsumedServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  consumedServicesList?: ListConsumedServicesResponseBodyConsumedServicesList;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * a5281053-08e4-47a5-b2ab-5c0323de7b5a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consumedServicesList: 'ConsumedServicesList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      consumedServicesList: ListConsumedServicesResponseBodyConsumedServicesList,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.consumedServicesList && typeof (this.consumedServicesList as any).validate === 'function') {
      (this.consumedServicesList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

