// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressGroup } from "./AddressGroup";


export class ListUserApplicationsResponseBodyApplicationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port.
   * 
   * @example
   * 80
   */
  begin?: string;
  /**
   * @remarks
   * The end port.
   * 
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
   * @remarks
   * The action for private application access:
   * 
   * - **Block**: blocks access.
   * 
   * - **Allow**: allows access.
   * 
   * @example
   * Block
   */
  action?: string;
  /**
   * @remarks
   * The application address group. This parameter is returned when ConfigMode is set to Precise. This parameter is empty when ConfigMode is an empty string.
   */
  addressGroups?: AddressGroup[];
  /**
   * @remarks
   * The list of private access application addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration mode. Valid values:
   * 
   * - Empty string: default mode.
   * 
   * - Precise: precise mode.
   * 
   * @example
   * Precise
   */
  configMode?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * The port ranges of the private access application. Multiple port ranges cannot be repeated or overlap.
   */
  portRanges?: ListUserApplicationsResponseBodyApplicationsPortRanges[];
  /**
   * @remarks
   * The protocol of the private access application. Valid values:
   * 
   * - **All**: all protocols.
   * 
   * - **TCP**: TCP.
   * 
   * - **UDP**: UDP.
   * 
   * - **HTTP**: HTTP.
   * 
   * - **HTTPS**: HTTPS.
   * 
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
  /**
   * @remarks
   * The list of applications that the user is authorized to access.
   */
  applications?: ListUserApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of applications that the user is authorized to access.
   * 
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

