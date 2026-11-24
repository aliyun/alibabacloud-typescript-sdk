// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Reason for reporting
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The identifier of the system field, such as approvalReason.
   * 
   * @example
   * approvalReason
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

export class UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap[];
  /**
   * @remarks
   * The list of endpoint uninstallation policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Report domain name
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The identifier of the system field, such as report_domain.
   * 
   * @example
   * report_domain
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

export class UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPoliciesFieldMap[];
  /**
   * @remarks
   * The list of device registration policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessDlpSendPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * File name
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The identifier of the system field, such as fileName.
   * 
   * @example
   * fileName
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

export class UpdateApprovalProcessResponseBodyProcessDlpSendPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessDlpSendPoliciesFieldMap[];
  /**
   * @remarks
   * The list of outbound file transfer policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessDlpSendPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessDomainBlacklistPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Report website access
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The identifier of the system field, such as reportDomain.
   * 
   * @example
   * reportDomain
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

export class UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessDomainBlacklistPoliciesFieldMap[];
  /**
   * @remarks
   * The list of domain name blacklist policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessDomainBlacklistPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessDomainWhitelistPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Report website access
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The identifier of the system field, such as reportDomain.
   * 
   * @example
   * reportDomain
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

export class UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessDomainWhitelistPoliciesFieldMap[];
  /**
   * @remarks
   * The list of domain name whitelist policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessDomainWhitelistPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessEndpointHardeningPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Process name
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field identifier, such as processName.
   * 
   * @example
   * processName
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

export class UpdateApprovalProcessResponseBodyProcessEndpointHardeningPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessEndpointHardeningPoliciesFieldMap[];
  /**
   * @remarks
   * The list of endpoint hardening policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessEndpointHardeningPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessPeripheraBlockPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Operating system
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The identifier of the system field, such as devType.
   * 
   * @example
   * devType
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

export class UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessPeripheraBlockPoliciesFieldMap[];
  /**
   * @remarks
   * The list of peripheral control policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessPeripheraBlockPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessPrivateAccessBlockPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Reported application
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field identifier, such as applicationId.
   * 
   * @example
   * applicationId
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

export class UpdateApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessPrivateAccessBlockPoliciesFieldMap[];
  /**
   * @remarks
   * The list of internal network access control policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessPrivateAccessBlockPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessProcessNodes extends $dara.Model {
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

export class UpdateApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Report software
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The identifier of the system field, such as softwareName.
   * 
   * @example
   * softwareName
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

export class UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap[];
  /**
   * @remarks
   * The list of software block policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Process name
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the control in the external approval form. The value is in the Type%%%Control ID format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field identifier, such as processName.
   * 
   * @example
   * processName
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

export class UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk) or 3 (Lark), the process code from the external approval platform is returned. For other approval types, an empty value is returned.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPoliciesFieldMap[];
  /**
   * @remarks
   * The list of software hardening policy IDs.
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
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      policyIds: 'PolicyIds',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPoliciesFieldMap },
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

export class UpdateApprovalProcessResponseBodyProcess extends $dara.Model {
  /**
   * @remarks
   * The list of policies associated with endpoint uninstallation.
   */
  appUninstallPolicies?: UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies;
  /**
   * @remarks
   * The approval type. Valid values:
   * - 0: Built-in approval.
   * - 1: DingTalk approval.
   * - 2: WeCom approval.
   * - 3: Lark approval.
   * 
   * @example
   * 1
   */
  approvalType?: number;
  /**
   * @remarks
   * The time when the approval process was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-07-11 15:31:39
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the approval process.
   * 
   * @example
   * Office endpoint software installation and uninstallation approval process
   */
  description?: string;
  /**
   * @remarks
   * The list of policies associated with device registration.
   */
  deviceRegistrationPolicies?: UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  /**
   * @remarks
   * The list of policies associated with outbound file transfer.
   */
  dlpSendPolicies?: UpdateApprovalProcessResponseBodyProcessDlpSendPolicies;
  /**
   * @remarks
   * The list of policies associated with the domain name blacklist.
   */
  domainBlacklistPolicies?: UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies;
  /**
   * @remarks
   * The list of policies associated with the domain name whitelist.
   */
  domainWhitelistPolicies?: UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies;
  /**
   * @remarks
   * The list of associated endpoint hardening policies.
   */
  endpointHardeningPolicies?: UpdateApprovalProcessResponseBodyProcessEndpointHardeningPolicies;
  /**
   * @remarks
   * The event callback URL. This field returns the complete event callback URL of the external platform when the approval type is 1 (DingTalk approval) or 3 (Lark approval). For other approval types, this field is empty.
   * 
   * @example
   * https://callback.example.com/sase/api/v1/approval/dingtalk/callback/9m4e2mr0ui3e8a21****
   */
  eventLabel?: string;
  /**
   * @remarks
   * The external approval configuration. This field contains the integration information for the external approval platform when the approval type is 1 (DingTalk approval) or 3 (Lark approval). For other approval types, this field is empty.
   * 
   * @example
   * {"appKey":"dingn1a2b3c4d5e6f****","appSecret":"f9c8e7d6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0****","eventVerifyToken":"7a8b9c0d1e2f3a4b5c6d7e8f9a0b****","eventAesKey":"1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t****"}
   */
  externalConfig?: string;
  /**
   * @remarks
   * The list of policies associated with peripheral control.
   */
  peripheraBlockPolicies?: UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies;
  /**
   * @remarks
   * The list of associated internal network access control policies.
   */
  privateAccessBlockPolicies?: UpdateApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies;
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * approval-process-2677fcf063f5****
   */
  processId?: string;
  /**
   * @remarks
   * The name of the approval process.
   * 
   * @example
   * Endpoint software installation approval process
   */
  processName?: string;
  /**
   * @remarks
   * The list of approval nodes.
   */
  processNodes?: UpdateApprovalProcessResponseBodyProcessProcessNodes[][];
  /**
   * @remarks
   * The list of policies associated with software blocking.
   */
  softwareBlockPolicies?: UpdateApprovalProcessResponseBodyProcessSoftwareBlockPolicies;
  /**
   * @remarks
   * The list of associated software hardening policies.
   */
  softwareHardeningPolicies?: UpdateApprovalProcessResponseBodyProcessSoftwareHardeningPolicies;
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
      peripheraBlockPolicies: 'PeripheraBlockPolicies',
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
      appUninstallPolicies: UpdateApprovalProcessResponseBodyProcessAppUninstallPolicies,
      approvalType: 'number',
      createTime: 'string',
      description: 'string',
      deviceRegistrationPolicies: UpdateApprovalProcessResponseBodyProcessDeviceRegistrationPolicies,
      dlpSendPolicies: UpdateApprovalProcessResponseBodyProcessDlpSendPolicies,
      domainBlacklistPolicies: UpdateApprovalProcessResponseBodyProcessDomainBlacklistPolicies,
      domainWhitelistPolicies: UpdateApprovalProcessResponseBodyProcessDomainWhitelistPolicies,
      endpointHardeningPolicies: UpdateApprovalProcessResponseBodyProcessEndpointHardeningPolicies,
      eventLabel: 'string',
      externalConfig: 'string',
      peripheraBlockPolicies: UpdateApprovalProcessResponseBodyProcessPeripheraBlockPolicies,
      privateAccessBlockPolicies: UpdateApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies,
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

export class UpdateApprovalProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval process.
   */
  process?: UpdateApprovalProcessResponseBodyProcess;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
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
      process: UpdateApprovalProcessResponseBodyProcess,
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

