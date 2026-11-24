// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Reason for reporting
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Report domain name
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * File name
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Report website access
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Report website access
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Process name
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Operating system
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Reported application
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Report software
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareHardeningSchemaConfigFieldMap extends $dara.Model {
  /**
   * @remarks
   * The name of the control in the external approval form. This parameter is used to locate the form control when the approval type is 1 (DingTalk approval).
   * 
   * @example
   * Process name
   */
  displayField?: string;
  /**
   * @remarks
   * The type and identifier of the external approval form control, in the format of Type%%%ControlID. This parameter is used to locate the form control when the approval type is 2 (WeCom approval) or 3 (Lark approval).
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareHardeningSchemaConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the external approval process. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter specifies the process code (processCode) of the external platform.
   * 
   * @example
   * PROC-1a2b3c4d5e6f****
   */
  externalProcessId?: string;
  /**
   * @remarks
   * The mapping list between system fields and external approval form controls.
   */
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareHardeningSchemaConfigFieldMap[];
  /**
   * @remarks
   * The ID of the approval template. The ID must be consistent with the template ID of the corresponding policy type in MatchSchemas. If this parameter is left empty, the approval template association is not saved for this policy type.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      externalProcessId: 'ExternalProcessId',
      fieldMap: 'FieldMap',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProcessId: 'string',
      fieldMap: { 'type': 'array', 'itemType': UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareHardeningSchemaConfigFieldMap },
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldMap)) {
      $dara.Model.validateArray(this.fieldMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemaConfigs extends $dara.Model {
  /**
   * @remarks
   * The approval template configuration for the application uninstallation policy.
   */
  appUninstallSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the device registration policy.
   */
  deviceRegistrationSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the file outbound sending policy.
   */
  dlpSendSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the domain name blacklist policy.
   */
  domainBlacklistSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the domain name whitelist policy.
   */
  domainWhitelistSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the endpoint hardening policy.
   */
  endpointHardeningSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the peripheral control policy.
   */
  peripheralBlockSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the internal network access control policy.
   */
  privateAccessBlockSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the software blocking policy.
   */
  softwareBlockSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfig;
  /**
   * @remarks
   * The approval template configuration for the software hardening policy.
   */
  softwareHardeningSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareHardeningSchemaConfig;
  static names(): { [key: string]: string } {
    return {
      appUninstallSchemaConfig: 'AppUninstallSchemaConfig',
      deviceRegistrationSchemaConfig: 'DeviceRegistrationSchemaConfig',
      dlpSendSchemaConfig: 'DlpSendSchemaConfig',
      domainBlacklistSchemaConfig: 'DomainBlacklistSchemaConfig',
      domainWhitelistSchemaConfig: 'DomainWhitelistSchemaConfig',
      endpointHardeningSchemaConfig: 'EndpointHardeningSchemaConfig',
      peripheralBlockSchemaConfig: 'PeripheralBlockSchemaConfig',
      privateAccessBlockSchemaConfig: 'PrivateAccessBlockSchemaConfig',
      softwareBlockSchemaConfig: 'SoftwareBlockSchemaConfig',
      softwareHardeningSchemaConfig: 'SoftwareHardeningSchemaConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfig,
      deviceRegistrationSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfig,
      dlpSendSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfig,
      domainBlacklistSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfig,
      domainWhitelistSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfig,
      endpointHardeningSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfig,
      peripheralBlockSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfig,
      privateAccessBlockSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfig,
      softwareBlockSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfig,
      softwareHardeningSchemaConfig: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareHardeningSchemaConfig,
    };
  }

  validate() {
    if(this.appUninstallSchemaConfig && typeof (this.appUninstallSchemaConfig as any).validate === 'function') {
      (this.appUninstallSchemaConfig as any).validate();
    }
    if(this.deviceRegistrationSchemaConfig && typeof (this.deviceRegistrationSchemaConfig as any).validate === 'function') {
      (this.deviceRegistrationSchemaConfig as any).validate();
    }
    if(this.dlpSendSchemaConfig && typeof (this.dlpSendSchemaConfig as any).validate === 'function') {
      (this.dlpSendSchemaConfig as any).validate();
    }
    if(this.domainBlacklistSchemaConfig && typeof (this.domainBlacklistSchemaConfig as any).validate === 'function') {
      (this.domainBlacklistSchemaConfig as any).validate();
    }
    if(this.domainWhitelistSchemaConfig && typeof (this.domainWhitelistSchemaConfig as any).validate === 'function') {
      (this.domainWhitelistSchemaConfig as any).validate();
    }
    if(this.endpointHardeningSchemaConfig && typeof (this.endpointHardeningSchemaConfig as any).validate === 'function') {
      (this.endpointHardeningSchemaConfig as any).validate();
    }
    if(this.peripheralBlockSchemaConfig && typeof (this.peripheralBlockSchemaConfig as any).validate === 'function') {
      (this.peripheralBlockSchemaConfig as any).validate();
    }
    if(this.privateAccessBlockSchemaConfig && typeof (this.privateAccessBlockSchemaConfig as any).validate === 'function') {
      (this.privateAccessBlockSchemaConfig as any).validate();
    }
    if(this.softwareBlockSchemaConfig && typeof (this.softwareBlockSchemaConfig as any).validate === 'function') {
      (this.softwareBlockSchemaConfig as any).validate();
    }
    if(this.softwareHardeningSchemaConfig && typeof (this.softwareHardeningSchemaConfig as any).validate === 'function') {
      (this.softwareHardeningSchemaConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequestMatchSchemas extends $dara.Model {
  /**
   * @remarks
   * The ID of the application uninstallation approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  appUninstallSchemaId?: string;
  /**
   * @remarks
   * The ID of the device registration approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  deviceRegistrationSchemaId?: string;
  /**
   * @remarks
   * The ID of the file outbound sending approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  dlpSendSchemaId?: string;
  /**
   * @remarks
   * The ID of the domain name blacklist approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  domainBlacklistSchemaId?: string;
  /**
   * @remarks
   * The ID of the domain name whitelist approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  domainWhitelistSchemaId?: string;
  /**
   * @remarks
   * The ID of the endpoint hardening approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  endpointHardeningSchemaId?: string;
  /**
   * @remarks
   * The ID of the peripheral control approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  peripheralBlockSchemaId?: string;
  /**
   * @remarks
   * The ID of the internal network access control approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  privateAccessBlockSchemaId?: string;
  /**
   * @remarks
   * The ID of the software blocking approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  softwareBlockSchemaId?: string;
  /**
   * @remarks
   * The ID of the software hardening approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  softwareHardeningSchemaId?: string;
  static names(): { [key: string]: string } {
    return {
      appUninstallSchemaId: 'AppUninstallSchemaId',
      deviceRegistrationSchemaId: 'DeviceRegistrationSchemaId',
      dlpSendSchemaId: 'DlpSendSchemaId',
      domainBlacklistSchemaId: 'DomainBlacklistSchemaId',
      domainWhitelistSchemaId: 'DomainWhitelistSchemaId',
      endpointHardeningSchemaId: 'EndpointHardeningSchemaId',
      peripheralBlockSchemaId: 'PeripheralBlockSchemaId',
      privateAccessBlockSchemaId: 'PrivateAccessBlockSchemaId',
      softwareBlockSchemaId: 'SoftwareBlockSchemaId',
      softwareHardeningSchemaId: 'SoftwareHardeningSchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUninstallSchemaId: 'string',
      deviceRegistrationSchemaId: 'string',
      dlpSendSchemaId: 'string',
      domainBlacklistSchemaId: 'string',
      domainWhitelistSchemaId: 'string',
      endpointHardeningSchemaId: 'string',
      peripheralBlockSchemaId: 'string',
      privateAccessBlockSchemaId: 'string',
      softwareBlockSchemaId: 'string',
      softwareHardeningSchemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApprovalProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The approval type. Valid values: 0 (built-in approval), 1 (DingTalk approval), 2 (WeCom approval), and 3 (Lark approval). Default value: 0.
   * 
   * @example
   * 1
   */
  approvalType?: number;
  /**
   * @remarks
   * The description of the approval process. The description must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * Office endpoint software installation and uninstallation approval process
   */
  description?: string;
  /**
   * @remarks
   * The event callback identifier. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter is used to generate the event callback URL for the external platform. You can pass a complete callback URL, and the server retains only the part after the callback path prefix.
   * 
   * @example
   * https://callback.example.com/sase/api/v1/approval/dingtalk/callback/9m4e2mr0ui3e8a21****
   */
  eventLabel?: string;
  /**
   * @remarks
   * The integration configuration for the external approval platform. This parameter is required when the approval type is 1 (DingTalk approval) or 3 (Lark approval). It includes integration parameters such as appKey and appSecret, and must be passed as a JSON string.
   * 
   * @example
   * {"appKey":"dingn1a2b3c4d5e6f****","appSecret":"f9c8e7d6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0****","eventVerifyToken":"7a8b9c0d1e2f3a4b5c6d7e8f9a0b****","eventAesKey":"1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t****"}
   */
  externalConfig?: string;
  /**
   * @remarks
   * The external approval template configurations. Configure the approval template ID, external approval process ID, and field mappings based on the policy type. This parameter is used only when ApprovalType is set to 1 (DingTalk approval), 2 (WeCom approval), or 3 (Lark approval). If this parameter is not passed, the existing template associations of the approval process are cleared. The approval templates associated with business policies cannot be cleared.
   */
  matchSchemaConfigs?: UpdateApprovalProcessRequestMatchSchemaConfigs;
  /**
   * @remarks
   * The matched approval templates.
   */
  matchSchemas?: UpdateApprovalProcessRequestMatchSchemas;
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * This parameter is required.
   * 
   * @example
   * approval-process-f16bf74b2b29****
   */
  processId?: string;
  /**
   * @remarks
   * The name of the approval process. The name must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Endpoint software installation approval process
   */
  processName?: string;
  /**
   * @remarks
   * The list of approval nodes. You can define up to 5 approval nodes.
   */
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      description: 'Description',
      eventLabel: 'EventLabel',
      externalConfig: 'ExternalConfig',
      matchSchemaConfigs: 'MatchSchemaConfigs',
      matchSchemas: 'MatchSchemas',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'number',
      description: 'string',
      eventLabel: 'string',
      externalConfig: 'string',
      matchSchemaConfigs: UpdateApprovalProcessRequestMatchSchemaConfigs,
      matchSchemas: UpdateApprovalProcessRequestMatchSchemas,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(this.matchSchemaConfigs && typeof (this.matchSchemaConfigs as any).validate === 'function') {
      (this.matchSchemaConfigs as any).validate();
    }
    if(this.matchSchemas && typeof (this.matchSchemas as any).validate === 'function') {
      (this.matchSchemas as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

