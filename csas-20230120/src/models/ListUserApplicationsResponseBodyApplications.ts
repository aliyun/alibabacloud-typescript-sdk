// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserApplicationsResponseBodyApplicationsPortRanges } from "./ListUserApplicationsResponseBodyApplicationsPortRanges";


export class ListUserApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * Block
   */
  action?: string;
  addresses?: string[];
  /**
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
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
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListUserApplicationsResponseBodyApplicationsPortRanges },
      protocol: 'string',
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

