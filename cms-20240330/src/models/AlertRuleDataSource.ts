// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleDataSourceDsList extends $dara.Model {
  /**
   * @remarks
   * SLS project
   * 
   * @example
   * mySlsProject
   */
  project?: string;
  /**
   * @remarks
   * The region where the SLS project is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * LogStore/MetricStore name.
   * 
   * @example
   * mySlsLogStore
   */
  store?: string;
  /**
   * @remarks
   * Type of SLS data sub-source:
   * 
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
   * Application type: 
   * 
   * - apm.
   * 
   * @example
   * apm
   */
  appType?: string;
  /**
   * @remarks
   * Applicable data source type: SLS_MULTI_DS.
   * List of sub-data sources.
   */
  dsList?: AlertRuleDataSourceDsList[];
  /**
   * @remarks
   * Applicable data source type: PROMETHEUS_DS.
   * Prometheus instance ID.
   * 
   * @example
   * rw-bbe8961b4a59be0
   */
  instanceId?: string;
  /**
   * @remarks
   * Applicable data source type: ENTERPRISE_DS.
   * Name of the enterprise cloud monitoring metric repository.
   * 
   * @example
   * aliyun-default
   */
  namespace?: string;
  /**
   * @remarks
   * Applicable data source types: APM_DS, PROMETHEUS_DS.
   * The regionId to which the data source belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  tenantId?: string;
  /**
   * @remarks
   * Data source type.
   * Valid values:
   * - PROMETHEUS_DS: Prometheus data source.
   * - SLS_MULTI_DS: SLS data source.
   * - APM_DS: Application monitoring data source.
   * - CMS_BASIC_DS: Basic cloud monitoring data source.
   * - ENTERPRISE_DS: Enterprise cloud monitoring data source.
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

