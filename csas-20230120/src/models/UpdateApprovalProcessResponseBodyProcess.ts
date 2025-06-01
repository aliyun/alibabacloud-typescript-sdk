// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies } from "./UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies";
import { UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies } from "./UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies";
import { UpdateApprovalProcessResponseBodyProcessDlpSendPolicies } from "./UpdateApprovalProcessResponseBodyProcessDlpSendPolicies";
import { UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies } from "./UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies";
import { UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies } from "./UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies";
import { UpdateApprovalProcessResponseBodyProcessEndpointHardeningPolicies } from "./UpdateApprovalProcessResponseBodyProcessEndpointHardeningPolicies";
import { UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies } from "./UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies";
import { UpdateApprovalProcessResponseBodyProcessProcessNodes } from "./UpdateApprovalProcessResponseBodyProcessProcessNodes";
import { UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies } from "./UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies";
import { UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies } from "./UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies";


export class UpdateApprovalProcessResponseBodyProcess extends $dara.Model {
  appUninstallPolicies?: UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @example
   * 2022-07-11 15:31:39
   */
  createTime?: string;
  description?: string;
  deviceRegistrationPolicies?: UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  dlpSendPolicies?: UpdateApprovalProcessResponseBodyProcessDlpSendPolicies;
  domainBlacklistPolicies?: UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  domainWhitelistPolicies?: UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  endpointHardeningPolicies?: UpdateApprovalProcessResponseBodyProcessEndpointHardeningPolicies;
  peripheraBlockPolicies?: UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies;
  /**
   * @example
   * approval-process-2677fcf063f5****
   */
  processId?: string;
  processName?: string;
  processNodes?: UpdateApprovalProcessResponseBodyProcessProcessNodes[][];
  softwareBlockPolicies?: UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies;
  softwareHardeningPolicies?: UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies;
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
      peripheraBlockPolicies: 'PeripheraBlockPolicies',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
      softwareBlockPolicies: 'SoftwareBlockPolicies',
      softwareHardeningPolicies: 'SoftwareHardeningPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallPolicies: UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: UpdateApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      endpointHardeningPolicies: UpdateApprovalProcessResponseBodyProcessEndpointHardeningPolicies,
      peripheraBlockPolicies: UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessProcessNodes } },
      softwareBlockPolicies: UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies,
      softwareHardeningPolicies: UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies,
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
    if(this.peripheraBlockPolicies && typeof (this.peripheraBlockPolicies as any).validate === 'function') {
      (this.peripheraBlockPolicies as any).validate();
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

