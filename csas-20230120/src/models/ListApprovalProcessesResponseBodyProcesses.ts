// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies } from "./ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies";
import { ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies } from "./ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies";
import { ListApprovalProcessesResponseBodyProcessesDlpSendPolicies } from "./ListApprovalProcessesResponseBodyProcessesDlpSendPolicies";
import { ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies } from "./ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies";
import { ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies } from "./ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies";
import { ListApprovalProcessesResponseBodyProcessesEndpointHardeningPolicies } from "./ListApprovalProcessesResponseBodyProcessesEndpointHardeningPolicies";
import { ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies } from "./ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies";
import { ListApprovalProcessesResponseBodyProcessesProcessNodes } from "./ListApprovalProcessesResponseBodyProcessesProcessNodes";
import { ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies } from "./ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies";
import { ListApprovalProcessesResponseBodyProcessesSoftwareHardeningPolicies } from "./ListApprovalProcessesResponseBodyProcessesSoftwareHardeningPolicies";


export class ListApprovalProcessesResponseBodyProcesses extends $dara.Model {
  appUninstallPolicies?: ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies;
  /**
   * @example
   * 2024-02-27 14:04:27
   */
  createTime?: string;
  description?: string;
  deviceRegistrationPolicies?: ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies;
  dlpSendPolicies?: ListApprovalProcessesResponseBodyProcessesDlpSendPolicies;
  domainBlacklistPolicies?: ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies;
  domainWhitelistPolicies?: ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies;
  endpointHardeningPolicies?: ListApprovalProcessesResponseBodyProcessesEndpointHardeningPolicies;
  peripheralBlockPolicies?: ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies;
  /**
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  processName?: string;
  processNodes?: ListApprovalProcessesResponseBodyProcessesProcessNodes[][];
  softwareBlockPolicies?: ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies;
  softwareHardeningPolicies?: ListApprovalProcessesResponseBodyProcessesSoftwareHardeningPolicies;
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
      appUninstallPolicies: ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies,
      dlpSendPolicies: ListApprovalProcessesResponseBodyProcessesDlpSendPolicies,
      domainBlacklistPolicies: ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies,
      domainWhitelistPolicies: ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies,
      endpointHardeningPolicies: ListApprovalProcessesResponseBodyProcessesEndpointHardeningPolicies,
      peripheralBlockPolicies: ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': ListApprovalProcessesResponseBodyProcessesProcessNodes } },
      softwareBlockPolicies: ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies,
      softwareHardeningPolicies: ListApprovalProcessesResponseBodyProcessesSoftwareHardeningPolicies,
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

