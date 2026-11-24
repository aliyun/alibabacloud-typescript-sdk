// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the endpoint uninstallation policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the device registration policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesDlpSendPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the file sending policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the domain name blacklist policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the domain name whitelist policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesEndpointHardeningPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the endpoint hardening policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the peripheral control policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesPrivateAccessBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the internal network access control applications.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesProcessNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the approver.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The username of the approver.
   * 
   * @example
   * 王先生
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the software block policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcessesSoftwareHardeningPolicies extends $dara.Model {
  /**
   * @remarks
   * The IDs of the software hardening policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalProcessesResponseBodyProcesses extends $dara.Model {
  /**
   * @remarks
   * The policies associated with endpoint uninstallation.
   */
  appUninstallPolicies?: ListApprovalProcessesResponseBodyProcessesAppUninstallPolicies;
  /**
   * @remarks
   * The type of the approval process. Valid values: 0 (built-in approval), 1 (DingTalk approval), 2 (WeCom approval), and 3 (Lark approval).
   * 
   * @example
   * 0
   */
  approvalType?: number;
  /**
   * @remarks
   * The time when the approval process was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-02-27 14:04:27
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the approval process.
   * 
   * @example
   * Approval process for file sending scenarios
   */
  description?: string;
  /**
   * @remarks
   * The policies associated with device registration.
   */
  deviceRegistrationPolicies?: ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies;
  /**
   * @remarks
   * The policies associated with file sending.
   */
  dlpSendPolicies?: ListApprovalProcessesResponseBodyProcessesDlpSendPolicies;
  /**
   * @remarks
   * The policies associated with the domain name blacklist.
   */
  domainBlacklistPolicies?: ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies;
  /**
   * @remarks
   * The policies associated with the domain name whitelist.
   */
  domainWhitelistPolicies?: ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies;
  /**
   * @remarks
   * The policies associated with endpoint hardening. If the approval process is not configured with an approval template of this type, SchemaId and PolicyIds are empty.
   */
  endpointHardeningPolicies?: ListApprovalProcessesResponseBodyProcessesEndpointHardeningPolicies;
  /**
   * @remarks
   * The policies associated with peripheral control.
   */
  peripheralBlockPolicies?: ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies;
  /**
   * @remarks
   * The policies associated with internal network access control. If the approval process is not configured with an approval template of this type, SchemaId and PolicyIds are empty.
   */
  privateAccessBlockPolicies?: ListApprovalProcessesResponseBodyProcessesPrivateAccessBlockPolicies;
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  /**
   * @remarks
   * The name of the approval process.
   * 
   * @example
   * File sending approval
   */
  processName?: string;
  /**
   * @remarks
   * The approval nodes.
   */
  processNodes?: ListApprovalProcessesResponseBodyProcessesProcessNodes[][];
  /**
   * @remarks
   * The policies associated with the software block.
   */
  softwareBlockPolicies?: ListApprovalProcessesResponseBodyProcessesSoftwareBlockPolicies;
  /**
   * @remarks
   * The policies associated with software hardening. If the approval process is not configured with an approval template of this type, SchemaId and PolicyIds are empty.
   */
  softwareHardeningPolicies?: ListApprovalProcessesResponseBodyProcessesSoftwareHardeningPolicies;
  static names(): { [key: string]: string } {
    return {
      appUninstallPolicies: 'AppUninstallPolicies',
      approvalType: 'ApprovalType',
      createTime: 'CreateTime',
      description: 'Description',
      deviceRegistrationPolicies: 'DeviceRegistrationPolicies',
      dlpSendPolicies: 'DlpSendPolicies',
      domainBlacklistPolicies: 'DomainBlacklistPolicies',
      domainWhitelistPolicies: 'DomainWhitelistPolicies',
      endpointHardeningPolicies: 'EndpointHardeningPolicies',
      peripheralBlockPolicies: 'PeripheralBlockPolicies',
      privateAccessBlockPolicies: 'PrivateAccessBlockPolicies',
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
      approvalType: 'number',
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: ListApprovalProcessesResponseBodyProcessesDeviceRegistrationPolicies,
      dlpSendPolicies: ListApprovalProcessesResponseBodyProcessesDlpSendPolicies,
      domainBlacklistPolicies: ListApprovalProcessesResponseBodyProcessesDomainBlacklistPolicies,
      domainWhitelistPolicies: ListApprovalProcessesResponseBodyProcessesDomainWhitelistPolicies,
      endpointHardeningPolicies: ListApprovalProcessesResponseBodyProcessesEndpointHardeningPolicies,
      peripheralBlockPolicies: ListApprovalProcessesResponseBodyProcessesPeripheralBlockPolicies,
      privateAccessBlockPolicies: ListApprovalProcessesResponseBodyProcessesPrivateAccessBlockPolicies,
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
    if(this.privateAccessBlockPolicies && typeof (this.privateAccessBlockPolicies as any).validate === 'function') {
      (this.privateAccessBlockPolicies as any).validate();
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

export class ListApprovalProcessesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval processes.
   */
  processes?: ListApprovalProcessesResponseBodyProcesses[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E39C33B-F565-55C6-ACC2-953FCE7DA7D6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of approval processes.
   * 
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      processes: 'Processes',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processes: { 'type': 'array', 'itemType': ListApprovalProcessesResponseBodyProcesses },
      requestId: 'string',
      totalNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

