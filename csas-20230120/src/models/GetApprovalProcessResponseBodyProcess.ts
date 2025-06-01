// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApprovalProcessResponseBodyProcessAppUninstallPolicies } from "./GetApprovalProcessResponseBodyProcessAppUninstallPolicies";
import { GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies } from "./GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies";
import { GetApprovalProcessResponseBodyProcessDlpSendPolicies } from "./GetApprovalProcessResponseBodyProcessDlpSendPolicies";
import { GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies } from "./GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies";
import { GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies } from "./GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies";
import { GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies } from "./GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies";
import { GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies } from "./GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies";
import { GetApprovalProcessResponseBodyProcessProcessNodes } from "./GetApprovalProcessResponseBodyProcessProcessNodes";
import { GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies } from "./GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies";
import { GetApprovalProcessResponseBodyProcessSoftwareHardeningPolicies } from "./GetApprovalProcessResponseBodyProcessSoftwareHardeningPolicies";


export class GetApprovalProcessResponseBodyProcess extends $dara.Model {
  appUninstallPolicies?: GetApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @example
   * 2022-10-25 10:44:09
   */
  createTime?: string;
  description?: string;
  deviceRegistrationPolicies?: GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  dlpSendPolicies?: GetApprovalProcessResponseBodyProcessDlpSendPolicies;
  domainBlacklistPolicies?: GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  domainWhitelistPolicies?: GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  endpointHardeningPolicies?: GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies;
  peripheralBlockPolicies?: GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies;
  /**
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  processName?: string;
  processNodes?: GetApprovalProcessResponseBodyProcessProcessNodes[][];
  softwareBlockPolicies?: GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies;
  softwareHardeningPolicies?: GetApprovalProcessResponseBodyProcessSoftwareHardeningPolicies;
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
      appUninstallPolicies: GetApprovalProcessResponseBodyProcessAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: GetApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      endpointHardeningPolicies: GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies,
      peripheralBlockPolicies: GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessProcessNodes } },
      softwareBlockPolicies: GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies,
      softwareHardeningPolicies: GetApprovalProcessResponseBodyProcessSoftwareHardeningPolicies,
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

