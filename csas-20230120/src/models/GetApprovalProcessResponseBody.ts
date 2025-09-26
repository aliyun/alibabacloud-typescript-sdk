// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap extends $dara.Model {
  /**
   * @example
   * 名称
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @example
   * 名称
   */
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessAppUninstallPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap[];
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDeviceRegistrationPoliciesFieldMap extends $dara.Model {
  displayField?: string;
  displayFieldValue?: string;
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessDeviceRegistrationPoliciesFieldMap[];
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessDeviceRegistrationPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDlpSendPoliciesFieldMap extends $dara.Model {
  displayField?: string;
  displayFieldValue?: string;
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDlpSendPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessDlpSendPoliciesFieldMap[];
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessDlpSendPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDomainBlacklistPoliciesFieldMap extends $dara.Model {
  displayField?: string;
  displayFieldValue?: string;
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessDomainBlacklistPoliciesFieldMap[];
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessDomainBlacklistPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDomainWhitelistPoliciesFieldMap extends $dara.Model {
  displayField?: string;
  displayFieldValue?: string;
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessDomainWhitelistPoliciesFieldMap[];
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessDomainWhitelistPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessEndpointHardeningPoliciesFieldMap extends $dara.Model {
  displayField?: string;
  displayFieldValue?: string;
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessEndpointHardeningPoliciesFieldMap[];
  policyIds?: string[];
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessEndpointHardeningPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessPeripheralBlockPoliciesFieldMap extends $dara.Model {
  displayField?: string;
  displayFieldValue?: string;
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessPeripheralBlockPoliciesFieldMap[];
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessPeripheralBlockPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessProcessNodes extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
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

export class GetApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap extends $dara.Model {
  displayField?: string;
  displayFieldValue?: string;
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap[];
  policyIds?: string[];
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessSoftwareHardeningPoliciesFieldMap extends $dara.Model {
  displayField?: string;
  displayFieldValue?: string;
  systemField?: string;
  static names(): { [key: string]: string } {
    return {
      displayField: 'DisplayField',
      displayFieldValue: 'DisplayFieldValue',
      systemField: 'SystemField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayField: 'string',
      displayFieldValue: 'string',
      systemField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcessSoftwareHardeningPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessSoftwareHardeningPoliciesFieldMap[];
  policyIds?: string[];
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessSoftwareHardeningPoliciesFieldMap },
      policyIds: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalProcessResponseBodyProcess extends $dara.Model {
  appUninstallPolicies?: GetApprovalProcessResponseBodyProcessAppUninstallPolicies;
  approvalType?: number;
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
  eventLabel?: string;
  externalConfig?: string;
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
      approvalType: 'ApprovalType',
      createTime: 'CreateTime',
      description: 'Description',
      deviceRegistrationPolicies: 'DeviceRegistrationPolicies',
      dlpSendPolicies: 'DlpSendPolicies',
      domainBlacklistPolicies: 'DomainBlacklistPolicies',
      domainWhitelistPolicies: 'DomainWhitelistPolicies',
      endpointHardeningPolicies: 'EndpointHardeningPolicies',
      eventLabel: 'EventLabel',
      externalConfig: 'ExternalConfig',
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
      approvalType: 'number',
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: GetApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      endpointHardeningPolicies: GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies,
      eventLabel: 'string',
      externalConfig: 'string',
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

export class GetApprovalProcessResponseBody extends $dara.Model {
  process?: GetApprovalProcessResponseBodyProcess;
  /**
   * @example
   * C81E0B4B-AAEB-5FDD-B27E-3F5AF7EBD7EF
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
      process: GetApprovalProcessResponseBodyProcess,
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

