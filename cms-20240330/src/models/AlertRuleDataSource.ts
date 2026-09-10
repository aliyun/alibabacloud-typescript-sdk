// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleDataSourceDsList extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) project. Specifies the project where the logs or metrics reside.
   * 
   * @example
   * mySlsProject
   */
  project?: string;
  /**
   * @remarks
   * The region where the SLS project resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the LogStore or MetricStore.
   * 
   * @example
   * mySlsLogStore
   */
  store?: string;
  /**
   * @remarks
   * The type of the SLS sub-data source. Valid values:
   * - SLS_LOG_DS: LogStore data source.
   * - SLS_METRIC_DS: MetricStore data source.
   * 
   * @example
   * SLS_LOG_DS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      regionId: 'regionId',
      store: 'store',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      regionId: 'string',
      store: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleDataSource extends $dara.Model {
  /**
   * @remarks
   * Applicable data source type: APM_DS.
   * 
   * The application type. Valid values:
   * - apm
   * 
   * @example
   * apm
   */
  appType?: string;
  /**
   * @remarks
   * Applicable data source type: SLS_MULTI_DS.
   * 
   * The list of sub-data sources.
   */
  dsList?: AlertRuleDataSourceDsList[];
  /**
   * @remarks
   * Applicable data source type: PROMETHEUS_DS.
   * 
   * The Prometheus instance ID.
   * 
   * @example
   * rw-bbe8961b4a59be0
   */
  instanceId?: string;
  /**
   * @remarks
   * Applicable data source type: ENTERPRISE_DS.
   * 
   * The name of the Hybrid Cloud Monitoring metric repository.
   * 
   * @example
   * aliyun-default
   */
  namespace?: string;
  /**
   * @remarks
   * Applicable data source types: APM_DS and PROMETHEUS_DS.
   * 
   * The region ID of the data source.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Applicable data source type: ENTERPRISE_DS.
   * 
   * The tenant ID of the Hybrid Cloud Monitoring data source. Identifies the tenant in the Hybrid Cloud Monitoring environment.
   * 
   * @example
   * 1234567890
   */
  tenantId?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * Valid values:
   * - PROMETHEUS_DS: Prometheus data source.
   * - SLS_MULTI_DS: SLS data source.
   * - APM_DS: Application monitoring data source.
   * - CMS_BASIC_DS: CloudMonitor Basic data source.
   * - ENTERPRISE_DS: Hybrid Cloud Monitoring data source.
   * 
   * This parameter is required.
   * 
   * @example
   * PROMETHEUS_DS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      dsList: 'dsList',
      instanceId: 'instanceId',
      namespace: 'namespace',
      regionId: 'regionId',
      tenantId: 'tenantId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      dsList: { 'type': 'array', 'itemType': AlertRuleDataSourceDsList },
      instanceId: 'string',
      namespace: 'string',
      regionId: 'string',
      tenantId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dsList)) {
      $dara.Model.validateArray(this.dsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

