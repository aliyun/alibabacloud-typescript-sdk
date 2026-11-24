// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Registration reason
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field identifier, such as approvalReason.
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

export class GetApprovalProcessResponseBodyProcessAppUninstallPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessAppUninstallPoliciesFieldMap[];
  /**
   * @remarks
   * The list of endpoint uninstall policy IDs.
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
   * The name of the control in the external approval form.
   * 
   * @example
   * Registered domain name
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
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

export class GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessDeviceRegistrationPoliciesFieldMap[];
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
   * The name of the control in the external approval form.
   * 
   * @example
   * File name
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field identifier, such as fileName.
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

export class GetApprovalProcessResponseBodyProcessDlpSendPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessDlpSendPoliciesFieldMap[];
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
   * The name of the control in the external approval form.
   * 
   * @example
   * Reported access website
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
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

export class GetApprovalProcessResponseBodyProcessDomainBlacklistPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessDomainBlacklistPoliciesFieldMap[];
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
   * The name of the control in the external approval form.
   * 
   * @example
   * Reported access website
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
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

export class GetApprovalProcessResponseBodyProcessDomainWhitelistPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessDomainWhitelistPoliciesFieldMap[];
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
   * The name of the control in the external approval form.
   * 
   * @example
   * Process name
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
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

export class GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessEndpointHardeningPoliciesFieldMap[];
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
   * The name of the control in the external approval form.
   * 
   * @example
   * Operating system
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
   * 
   * @example
   * Textarea%%%widget-1a2b****
   */
  displayFieldValue?: string;
  /**
   * @remarks
   * The system field identifier, such as devType.
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

export class GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessPeripheralBlockPoliciesFieldMap[];
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
  /**
   * @remarks
   * The name of the control in the external approval form.
   * 
   * @example
   * Application ID
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
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

export class GetApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessPrivateAccessBlockPoliciesFieldMap[];
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
   * 张三
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
   * The name of the control in the external approval form.
   * 
   * @example
   * Reported software
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
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

export class GetApprovalProcessResponseBodyProcessSoftwareBlockPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessSoftwareBlockPoliciesFieldMap[];
  /**
   * @remarks
   * The list of software blocking policy IDs.
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
   * The name of the control in the external approval form.
   * 
   * @example
   * Process name
   */
  displayField?: string;
  /**
   * @remarks
   * The identifier of the control in the external approval form. DingTalk approval returns the control label. WeCom and Lark approvals return the value in the "Control type%%%Control ID" format.
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

export class GetApprovalProcessResponseBodyProcessSoftwareHardeningPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. If the approval type is 1 (DingTalk approval), this parameter corresponds to the DingTalk process code. If the approval type is 2 (WeCom approval), this parameter corresponds to the template ID. If the approval type is 3 (Lark approval), this parameter corresponds to the approval definition code. If the approval type is 0 (built-in approval), this parameter is empty.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The list of mappings between system fields and external approval form controls.
   */
  fieldMap?: GetApprovalProcessResponseBodyProcessSoftwareHardeningPoliciesFieldMap[];
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
   * The list of associated endpoint uninstall policies.
   */
  appUninstallPolicies?: GetApprovalProcessResponseBodyProcessAppUninstallPolicies;
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
   * 2022-10-25 10:44:09
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the approval process.
   * 
   * @example
   * Approval flow for office network public domain name whitelist reporting.
   */
  description?: string;
  /**
   * @remarks
   * The list of policies associated with device registration.
   */
  deviceRegistrationPolicies?: GetApprovalProcessResponseBodyProcessDeviceRegistrationPolicies;
  /**
   * @remarks
   * The list of associated outbound file transfer policies.
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
   * The list of associated endpoint hardening policies.
   */
  endpointHardeningPolicies?: GetApprovalProcessResponseBodyProcessEndpointHardeningPolicies;
  /**
   * @remarks
   * The event callback URL. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter returns the complete event callback URL of the external platform. For other approval types, this parameter is empty.
   * 
   * @example
   * https://callback.example.com/sase/api/v1/approval/dingtalk/callback/approval-event-1a2b****
   */
  eventLabel?: string;
  /**
   * @remarks
   * The external approval configuration. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter includes the integration configuration for the external approval platform, including appKey, appSecret, eventVerifyToken, and eventAesKey. For other approval types, this parameter is empty.
   * 
   * @example
   * {"appKey":"dingabc1234****","appSecret":"a1b2c3d4****","eventVerifyToken":"e5f6a7b8****","eventAesKey":"c9d0e1f2****"}
   */
  externalConfig?: string;
  /**
   * @remarks
   * The list of associated peripheral control policies.
   */
  peripheralBlockPolicies?: GetApprovalProcessResponseBodyProcessPeripheralBlockPolicies;
  /**
   * @remarks
   * The list of policies associated with internal network access control.
   */
  privateAccessBlockPolicies?: GetApprovalProcessResponseBodyProcessPrivateAccessBlockPolicies;
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
   * Office network public domain name whitelist approval
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
   * The list of associated software hardening policies.
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
   * The approval process.
   */
  process?: GetApprovalProcessResponseBodyProcess;
  /**
   * @remarks
   * The ID of the request.
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

