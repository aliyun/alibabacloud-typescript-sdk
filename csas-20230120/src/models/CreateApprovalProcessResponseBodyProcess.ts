// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApprovalProcessResponseBodyProcessAppUninstallPolicies } from "./CreateApprovalProcessResponseBodyProcessAppUninstallPolicies";
import { CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies } from "./CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies";
import { CreateApprovalProcessResponseBodyProcessDlpSendPolicies } from "./CreateApprovalProcessResponseBodyProcessDlpSendPolicies";
import { CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies } from "./CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies";
import { CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies } from "./CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies";
import { CreateApprovalProcessResponseBodyProcessEndpointHardeningPolicies } from "./CreateApprovalProcessResponseBodyProcessEndpointHardeningPolicies";
import { CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies } from "./CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies";
import { CreateApprovalProcessResponseBodyProcessProcessNodes } from "./CreateApprovalProcessResponseBodyProcessProcessNodes";
import { CreateApprovalProcessResponseBodyProcessSoftwareBlockPolicies } from "./CreateApprovalProcessResponseBodyProcessSoftwareBlockPolicies";
import { CreateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies } from "./CreateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies";


export class CreateApprovalProcessResponseBodyProcess extends $dara.Model {
  appUninstallPolicies?: CreateApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @example
   * 2022-10-25 10:44:09
   */
  createTime?: string;
  description?: string;
  deviceRegistrationPolicies?: CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  dlpSendPolicies?: CreateApprovalProcessResponseBodyProcessDlpSendPolicies;
  domainBlacklistPolicies?: CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  domainWhitelistPolicies?: CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  endpointHardeningPolicies?: CreateApprovalProcessResponseBodyProcessEndpointHardeningPolicies;
  peripheralBlockPolicies?: CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies;
  /**
   * @example
   * approval-process-dc61e92ba5c5****
   */
  processId?: string;
  processName?: string;
  processNodes?: CreateApprovalProcessResponseBodyProcessProcessNodes[][];
  softwareBlockPolicies?: CreateApprovalProcessResponseBodyProcessSoftwareBlockPolicies;
  softwareHardeningPolicies?: CreateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies;
  static names(): { [key: string]: string } {
    return {
      appUninstallPolicies: 'AppUninstallPolicies',
      createTime: 'CreateTime',
      description: 'Description',
      deviceRegistrationPolicies: 'DeviceRegistrationPolicies',
      dlpSendPolicies: 'DlpSendPolicies',
      domainBlacklistPolicies: 'DomainBlacklistPolicies',
      domainWhitelistPolicies: 'DomainWhitelistPolicies',
      endpointHardeningPolicies: 'EndpointHardeningPolicies',
      peripheralBlockPolicies: 'PeripheralBlockPolicies',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
      softwareBlockPolicies: 'SoftwareBlockPolicies',
      softwareHardeningPolicies: 'SoftwareHardeningPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallPolicies: CreateApprovalProcessResponseBodyProcessAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: CreateApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      endpointHardeningPolicies: CreateApprovalProcessResponseBodyProcessEndpointHardeningPolicies,
      peripheralBlockPolicies: CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': CreateApprovalProcessResponseBodyProcessProcessNodes } },
      softwareBlockPolicies: CreateApprovalProcessResponseBodyProcessSoftwareBlockPolicies,
      softwareHardeningPolicies: CreateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies,
    };
  }

  validate() {
    if(this.appUninstallPolicies && typeof (this.appUninstallPolicies as any).validate === 'function') {
      (this.appUninstallPolicies as any).validate();
    }
    if(this.deviceRegistrationPolicies && typeof (this.deviceRegistrationPolicies as any).validate === 'function') {
      (this.deviceRegistrationPolicies as any).validate();
    }
    if(this.dlpSendPolicies && typeof (this.dlpSendPolicies as any).validate === 'function') {
      (this.dlpSendPolicies as any).validate();
    }
    if(this.domainBlacklistPolicies && typeof (this.domainBlacklistPolicies as any).validate === 'function') {
      (this.domainBlacklistPolicies as any).validate();
    }
    if(this.domainWhitelistPolicies && typeof (this.domainWhitelistPolicies as any).validate === 'function') {
      (this.domainWhitelistPolicies as any).validate();
    }
    if(this.endpointHardeningPolicies && typeof (this.endpointHardeningPolicies as any).validate === 'function') {
      (this.endpointHardeningPolicies as any).validate();
    }
    if(this.peripheralBlockPolicies && typeof (this.peripheralBlockPolicies as any).validate === 'function') {
      (this.peripheralBlockPolicies as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    if(this.softwareBlockPolicies && typeof (this.softwareBlockPolicies as any).validate === 'function') {
      (this.softwareBlockPolicies as any).validate();
    }
    if(this.softwareHardeningPolicies && typeof (this.softwareHardeningPolicies as any).validate === 'function') {
      (this.softwareHardeningPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

