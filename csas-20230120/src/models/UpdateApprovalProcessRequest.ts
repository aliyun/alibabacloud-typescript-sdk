// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalProcessRequestMatchSchemas extends $dara.Model {
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  appUninstallSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  deviceRegistrationSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  dlpSendSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  domainBlacklistSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  domainWhitelistSchemaId?: string;
  endpointHardeningSchemaId?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  peripheralBlockSchemaId?: string;
  /**
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
  description?: string;
  matchSchemas?: UpdateApprovalProcessRequestMatchSchemas;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-f16bf74b2b29****
   */
  processId?: string;
  processName?: string;
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchSchemas: 'MatchSchemas',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchSchemas: UpdateApprovalProcessRequestMatchSchemas,
      processId: 'string',
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

