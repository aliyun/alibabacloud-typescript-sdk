// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The display field.
   * 
   * @example
   * 名称
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
   * 
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
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap[];
  /**
   * @remarks
   * The list of endpoint uninstall policy IDs.
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
  /**
   * @remarks
   * The display field.
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
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

export class GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies extends $dara.Model {
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessDeviceRegistrationPoliciesFieldMap[];
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
  /**
   * @remarks
   * The display field.
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
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

export class GetApprovalProcessResponseBodyProcessDlpSendPolicies extends $dara.Model {
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessDlpSendPoliciesFieldMap[];
  /**
   * @remarks
   * The list of file outgoing policy IDs.
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
  /**
   * @remarks
   * The display field.
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
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

export class GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies extends $dara.Model {
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessDomainBlacklistPoliciesFieldMap[];
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
  /**
   * @remarks
   * The display field.
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
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

export class GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies extends $dara.Model {
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping table.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessDomainWhitelistPoliciesFieldMap[];
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
  /**
   * @remarks
   * The display field.
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
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

export class GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies extends $dara.Model {
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessEndpointHardeningPoliciesFieldMap[];
  /**
   * @remarks
   * The policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The template ID.
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
  /**
   * @remarks
   * The display field.
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
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

export class GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessPeripheralBlockPoliciesFieldMap[];
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

export class GetApprovalProcessResponseBodyProcessPrivateAccessBlockPoliciesFieldMap extends $dara.Model {
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

export class GetApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: GetApprovalProcessResponseBodyProcessPrivateAccessBlockPoliciesFieldMap[];
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
      fieldMap: { 'type': 'array', 'itemType': GetApprovalProcessResponseBodyProcessPrivateAccessBlockPoliciesFieldMap },
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
   * @remarks
   * The approver ID.
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

export class GetApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The display field.
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
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

export class GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap[];
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
  /**
   * @remarks
   * The display field.
   */
  displayField?: string;
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field.
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

export class GetApprovalProcessResponseBodyProcessSoftwareHardeningPolicies extends $dara.Model {
  /**
   * @remarks
   * The external flow ID.
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The field mapping.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessSoftwareHardeningPoliciesFieldMap[];
  /**
   * @remarks
   * The policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The template ID.
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
  /**
   * @remarks
   * The list of policies associated with endpoint uninstallation.
   */
  appUninstallPolicies?: GetApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @remarks
   * The approval type.
   */
  approvalType?: number;
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
   * The approval flow description.
   * 
   * @example
   * 这是一个审批流程
   */
  description?: string;
  /**
   * @remarks
   * The list of policies associated with device registration.
   */
  deviceRegistrationPolicies?: GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  /**
   * @remarks
   * The list of policies associated with file outgoing.
   */
  dlpSendPolicies?: GetApprovalProcessResponseBodyProcessDlpSendPolicies;
  /**
   * @remarks
   * The list of policies associated with the domain name blacklist.
   */
  domainBlacklistPolicies?: GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  /**
   * @remarks
   * The list of policies associated with the domain name whitelist.
   */
  domainWhitelistPolicies?: GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  /**
   * @remarks
   * The endpoint protection policies.
   */
  endpointHardeningPolicies?: GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies;
  /**
   * @remarks
   * The label.
   */
  eventLabel?: string;
  /**
   * @remarks
   * The external configuration.
   */
  externalConfig?: string;
  /**
   * @remarks
   * The list of policies associated with peripheral control.
   */
  peripheralBlockPolicies?: GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies;
  privateAccessBlockPolicies?: GetApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies;
  /**
   * @remarks
   * The approval flow ID.
   * 
   * @example
   * approval-process-35ee09077ee9****
   */
  processId?: string;
  /**
   * @remarks
   * The approval flow name.
   * 
   * @example
   * 测试
   */
  processName?: string;
  /**
   * @remarks
   * The list of approval nodes.
   */
  processNodes?: GetApprovalProcessResponseBodyProcessProcessNodes[][];
  /**
   * @remarks
   * The list of policies associated with software blocking.
   */
  softwareBlockPolicies?: GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies;
  /**
   * @remarks
   * The software hardening policies.
   */
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
      privateAccessBlockPolicies: GetApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies,
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

export class GetApprovalProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval flow.
   */
  process?: GetApprovalProcessResponseBodyProcess;
  /**
   * @remarks
   * The request ID.
   * 
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

