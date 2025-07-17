// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntegrationResponseBodyIntegration extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the alert integration.
   * 
   * @example
   * https://alerts.aliyuncs.com/api/v1/integrations/custom/ymQBN******
   */
  apiEndpoint?: string;
  /**
   * @remarks
   * Indicates whether alert events are automatically cleared. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  autoRecover?: boolean;
  /**
   * @remarks
   * The description of the alert integration.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The fields whose values are deduplicated.
   * 
   * @example
   * LABEL.dimensions::LABEL.ruleId
   */
  duplicateKey?: string;
  /**
   * @remarks
   * The extended mapped fields of the alert source.
   */
  extendedFieldRedefineRules?: { [key: string]: any }[];
  /**
   * @remarks
   * The predefined mapped fields of the alert source.
   */
  fieldRedefineRules?: { [key: string]: any }[];
  /**
   * @remarks
   * The field for clearing alert events. The system queries alert events based on the field of alert clearing events and clears the alert events.
   * 
   * > Only Log Service supports this parameter.
   * 
   * @example
   * $.status
   */
  initiativeRecoverField?: string;
  /**
   * @remarks
   * The value of the field for clearing alert events. The system queries alert events based on the field of alert clearing events and clears the alert events.
   * 
   * > Only Log Service supports this parameter.
   * 
   * @example
   * ok
   */
  initiativeRecoverValue?: string;
  /**
   * @remarks
   * The ID of the alert integration.
   * 
   * @example
   * 1234
   */
  integrationId?: number;
  /**
   * @remarks
   * The name of the alert integration.
   * 
   * @example
   * CloudMonitor integration
   */
  integrationName?: string;
  /**
   * @remarks
   * The service of the alert integration. Valid values:
   * 
   * *   CLOUD_MONITOR: CloudMonitor
   * *   LOG_SERVICE: Log Service
   * 
   * @example
   * CLOUD_MONITOR
   */
  integrationProductType?: string;
  /**
   * @remarks
   * The activity of the alert integration
   * 
   * @example
   * ready
   */
  liveness?: string;
  /**
   * @remarks
   * The time when alert events are automatically cleared. Unit: seconds. Default value: 300.
   * 
   * @example
   * 300
   */
  recoverTime?: number;
  /**
   * @remarks
   * The authentication token of the alert integration.
   * 
   * @example
   * ymQBN******
   */
  shortToken?: string;
  /**
   * @remarks
   * The total number of alert events and the number of abnormal alert events in the last hour.
   */
  stat?: number[];
  /**
   * @remarks
   * Indicates whether the alert integration is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  state?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiEndpoint: 'ApiEndpoint',
      autoRecover: 'AutoRecover',
      description: 'Description',
      duplicateKey: 'DuplicateKey',
      extendedFieldRedefineRules: 'ExtendedFieldRedefineRules',
      fieldRedefineRules: 'FieldRedefineRules',
      initiativeRecoverField: 'InitiativeRecoverField',
      initiativeRecoverValue: 'InitiativeRecoverValue',
      integrationId: 'IntegrationId',
      integrationName: 'IntegrationName',
      integrationProductType: 'IntegrationProductType',
      liveness: 'Liveness',
      recoverTime: 'RecoverTime',
      shortToken: 'ShortToken',
      stat: 'Stat',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiEndpoint: 'string',
      autoRecover: 'boolean',
      description: 'string',
      duplicateKey: 'string',
      extendedFieldRedefineRules: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      fieldRedefineRules: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      initiativeRecoverField: 'string',
      initiativeRecoverValue: 'string',
      integrationId: 'number',
      integrationName: 'string',
      integrationProductType: 'string',
      liveness: 'string',
      recoverTime: 'number',
      shortToken: 'string',
      stat: { 'type': 'array', 'itemType': 'number' },
      state: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.extendedFieldRedefineRules)) {
      $dara.Model.validateArray(this.extendedFieldRedefineRules);
    }
    if(Array.isArray(this.fieldRedefineRules)) {
      $dara.Model.validateArray(this.fieldRedefineRules);
    }
    if(Array.isArray(this.stat)) {
      $dara.Model.validateArray(this.stat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntegrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Information about the alert integration.
   */
  integration?: UpdateIntegrationResponseBodyIntegration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34ED024E-9E31-434A-9E4E-D9D15C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      integration: 'Integration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integration: UpdateIntegrationResponseBodyIntegration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.integration && typeof (this.integration as any).validate === 'function') {
      (this.integration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

