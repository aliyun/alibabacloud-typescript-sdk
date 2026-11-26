// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApprovalProcessRequestMatchSchemas extends $dara.Model {
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
   * The ID of the outbound file transfer approval template.
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

export class CreateApprovalProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the approval process. The description must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * Process for approving employees\" temporary access to internal network applications
   */
  description?: string;
  /**
   * @remarks
   * The matched approval templates.
   */
  matchSchemas?: CreateApprovalProcessRequestMatchSchemas;
  /**
   * @remarks
   * The name of the process. The name must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * Internal network access approval process
   */
  processName?: string;
  /**
   * @remarks
   * The list of approval nodes. You can define up to five approval nodes.
   * 
   * This parameter is required.
   */
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchSchemas: 'MatchSchemas',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchSchemas: CreateApprovalProcessRequestMatchSchemas,
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
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

