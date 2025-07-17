// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationResponseBodyPageInfoIntegrationsIntegrationDetail extends $dara.Model {
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
   * LABEL.alertname::LABEL.severity
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
   * > Only the Log Service alert integration supports the parameter.
   * 
   * @example
   * $.status
   */
  initiativeRecoverField?: string;
  /**
   * @remarks
   * The value of the field for clearing alert events. The system queries alert events based on the field of alert clearing events and clears the alert events.
   * 
   * > Only the Log Service alert integration supports the parameter.
   * 
   * @example
   * ok
   */
  initiativeRecoverValue?: string;
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
   * The total number of alert events and the number of abnormal alert events in the last hour.
   */
  stat?: number[];
  static names(): { [key: string]: string } {
    return {
      autoRecover: 'AutoRecover',
      description: 'Description',
      duplicateKey: 'DuplicateKey',
      extendedFieldRedefineRules: 'ExtendedFieldRedefineRules',
      fieldRedefineRules: 'FieldRedefineRules',
      initiativeRecoverField: 'InitiativeRecoverField',
      initiativeRecoverValue: 'InitiativeRecoverValue',
      recoverTime: 'RecoverTime',
      stat: 'Stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecover: 'boolean',
      description: 'string',
      duplicateKey: 'string',
      extendedFieldRedefineRules: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      fieldRedefineRules: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      initiativeRecoverField: 'string',
      initiativeRecoverValue: 'string',
      recoverTime: 'number',
      stat: { 'type': 'array', 'itemType': 'number' },
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

export class ListIntegrationResponseBodyPageInfoIntegrations extends $dara.Model {
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
   * The time when the alert integration was created.
   * 
   * @example
   * 2022-06-18
   */
  createTime?: string;
  /**
   * @remarks
   * The information about the alert events.
   */
  integrationDetail?: ListIntegrationResponseBodyPageInfoIntegrationsIntegrationDetail;
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
   * The type of the alert integration. Valid values:
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
   * The authentication token of the alert integration.
   * 
   * @example
   * ymQBN******
   */
  shortToken?: string;
  /**
   * @remarks
   * Indicates whether the alert integration was enabled. Valid values:
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
      createTime: 'CreateTime',
      integrationDetail: 'IntegrationDetail',
      integrationId: 'IntegrationId',
      integrationName: 'IntegrationName',
      integrationProductType: 'IntegrationProductType',
      liveness: 'Liveness',
      shortToken: 'ShortToken',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiEndpoint: 'string',
      createTime: 'string',
      integrationDetail: ListIntegrationResponseBodyPageInfoIntegrationsIntegrationDetail,
      integrationId: 'number',
      integrationName: 'string',
      integrationProductType: 'string',
      liveness: 'string',
      shortToken: 'string',
      state: 'boolean',
    };
  }

  validate() {
    if(this.integrationDetail && typeof (this.integrationDetail as any).validate === 'function') {
      (this.integrationDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The information about each alert integration.
   */
  integrations?: ListIntegrationResponseBodyPageInfoIntegrations[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of alert integrations returned per page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The total number of alert integrations.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      integrations: 'Integrations',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integrations: { 'type': 'array', 'itemType': ListIntegrationResponseBodyPageInfoIntegrations },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.integrations)) {
      $dara.Model.validateArray(this.integrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListIntegrationResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34ED024E-9E31-434A-9E4E-D9D15C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListIntegrationResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

