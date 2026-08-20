// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApprovalProcessResponseBodyProcessAppUninstallPolicies extends $dara.Model {
  /**
   * @remarks
   * The list of terminal uninstall policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The approval template ID.
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

export class CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies extends $dara.Model {
  /**
   * @remarks
   * The list of device registration policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The approval template ID.
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

export class CreateApprovalProcessResponseBodyProcessDlpSendPolicies extends $dara.Model {
  /**
   * @remarks
   * The list of file outbound policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The approval template ID.
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

export class CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies extends $dara.Model {
  /**
   * @remarks
   * The list of domain name blacklist policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The approval template ID.
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

export class CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies extends $dara.Model {
  /**
   * @remarks
   * The list of domain name whitelist policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The approval template ID.
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

export class CreateApprovalProcessResponseBodyProcessEndpointHardeningPolicies extends $dara.Model {
  policyIds?: string[];
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

export class CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The list of peripheral control policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The approval template ID.
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

export class CreateApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies extends $dara.Model {
  policyIds?: string[];
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

export class CreateApprovalProcessResponseBodyProcessProcessNodes extends $dara.Model {
  /**
   * @remarks
   * The approver ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The approver username.
   * 
   * @example
   * Mr. Wang
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

export class CreateApprovalProcessResponseBodyProcessSoftwareBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The list of software blocking policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The approval template ID.
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

export class CreateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies extends $dara.Model {
  policyIds?: string[];
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

export class CreateApprovalProcessResponseBodyProcess extends $dara.Model {
  /**
   * @remarks
   * The list of policies associated with terminal uninstall.
   */
  appUninstallPolicies?: CreateApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @remarks
   * The time when the approval flow was created.
   * 
   * @example
   * 2022-10-25 10:44:09
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the approval flow.
   * 
   * @example
   * This is an approval flow
   */
  description?: string;
  /**
   * @remarks
   * The list of policies associated with device registration.
   */
  deviceRegistrationPolicies?: CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  /**
   * @remarks
   * The list of policies associated with file outbound.
   */
  dlpSendPolicies?: CreateApprovalProcessResponseBodyProcessDlpSendPolicies;
  /**
   * @remarks
   * The list of policies associated with the domain name blacklist.
   */
  domainBlacklistPolicies?: CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  /**
   * @remarks
   * The list of policies associated with the domain name whitelist.
   */
  domainWhitelistPolicies?: CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  endpointHardeningPolicies?: CreateApprovalProcessResponseBodyProcessEndpointHardeningPolicies;
  /**
   * @remarks
   * The list of policies associated with peripheral control.
   */
  peripheralBlockPolicies?: CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies;
  privateAccessBlockPolicies?: CreateApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies;
  /**
   * @remarks
   * The approval flow ID.
   * 
   * @example
   * approval-process-dc61e92ba5c5****
   */
  processId?: string;
  /**
   * @remarks
   * The approval flow name.
   * 
   * @example
   * Test
   */
  processName?: string;
  /**
   * @remarks
   * The list of approval nodes.
   */
  processNodes?: CreateApprovalProcessResponseBodyProcessProcessNodes[][];
  /**
   * @remarks
   * The list of policies associated with software blocking.
   */
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
      appUninstallPolicies: CreateApprovalProcessResponseBodyProcessAppUninstallPolicies,
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: CreateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: CreateApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: CreateApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: CreateApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      endpointHardeningPolicies: CreateApprovalProcessResponseBodyProcessEndpointHardeningPolicies,
      peripheralBlockPolicies: CreateApprovalProcessResponseBodyProcessPeripheralBlockPolicies,
      privateAccessBlockPolicies: CreateApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies,
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

export class CreateApprovalProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval flow.
   */
  process?: CreateApprovalProcessResponseBodyProcess;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CABFEBB-0CE7-575E-833A-266F75D46713
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: CreateApprovalProcessResponseBodyProcess,
      requestId: 'string',
    };
  }

  validate() {
    if(this.process && typeof (this.process as any).validate === 'function') {
      (this.process as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

