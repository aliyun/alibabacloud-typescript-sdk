// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressGroup } from "./AddressGroup";


export class ListUserApplicationsResponseBodyApplicationsPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: string;
  /**
   * @example
   * 81
   */
  end?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'string',
      end: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * Block
   */
  action?: string;
  addressGroups?: AddressGroup[];
  addresses?: string[];
  /**
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
  configMode?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  portRanges?: ListUserApplicationsResponseBodyApplicationsPortRanges[];
  /**
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      addressGroups: 'AddressGroups',
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      configMode: 'ConfigMode',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      addressGroups: { 'type': 'array', 'itemType': AddressGroup },
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      configMode: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListUserApplicationsResponseBodyApplicationsPortRanges },
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressGroups)) {
      $dara.Model.validateArray(this.addressGroups);
    }
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

export class ListUserApplicationsResponseBody extends $dara.Model {
  applications?: ListUserApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListUserApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
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

