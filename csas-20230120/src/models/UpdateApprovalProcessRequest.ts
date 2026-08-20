// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfigFieldMap extends $dara.Model {
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfigFieldMap[];
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

export class UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareHardeningSchemaConfig extends $dara.Model {
  externalProcessId?: string;
  fieldMap?: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareHardeningSchemaConfigFieldMap[];
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
  appUninstallSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsAppUninstallSchemaConfig;
  deviceRegistrationSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsDeviceRegistrationSchemaConfig;
  dlpSendSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsDlpSendSchemaConfig;
  domainBlacklistSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsDomainBlacklistSchemaConfig;
  domainWhitelistSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsDomainWhitelistSchemaConfig;
  endpointHardeningSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsEndpointHardeningSchemaConfig;
  peripheralBlockSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsPeripheralBlockSchemaConfig;
  privateAccessBlockSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsPrivateAccessBlockSchemaConfig;
  softwareBlockSchemaConfig?: UpdateApprovalProcessRequestMatchSchemaConfigsSoftwareBlockSchemaConfig;
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
   * The ID of the device uninstall approval template.
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
   * The ID of the file outgoing approval template.
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
  endpointHardeningSchemaId?: string;
  /**
   * @remarks
   * The ID of the peripheral control approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  peripheralBlockSchemaId?: string;
  privateAccessBlockSchemaId?: string;
  /**
   * @remarks
   * The ID of the software blocking approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  softwareBlockSchemaId?: string;
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
  approvalType?: number;
  /**
   * @remarks
   * The description of the approval process. The description must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. Chinese characters are supported.
   * 
   * @example
   * This is a test
   */
  description?: string;
  eventLabel?: string;
  externalConfig?: string;
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
   * The name of the approval process. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). Chinese characters are supported.
   * 
   * @example
   * Test
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

