// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleDataSourceDsList extends $dara.Model {
  /**
   * @remarks
   * The SLS project.
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
   * The name of the LogStore or MetricStore.
   * 
   * @example
   * mySlsLogStore
   */
  store?: string;
  /**
   * @remarks
   * The type of the SLS sub-data source. Valid values:
   * 
   * - SLS_LOG_DS: A LogStore data source.
   * 
   * - SLS_METRIC_DS: A MetricStore data source.
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
   * Applies to the APM_DS data source type.
   * 
   * The type of the application. Valid value:
   * 
   * - apm
   * 
   * @example
   * apm
   */
  appType?: string;
  /**
   * @remarks
   * Applies to the SLS_MULTI_DS data source type.
   * 
   * A list of sub-data sources.
   */
  dsList?: AlertRuleDataSourceDsList[];
  /**
   * @remarks
   * Applies to the PROMETHEUS_DS data source type.
   * 
   * The ID of the Prometheus instance.
   * 
   * @example
   * rw-bbe8961b4a59be0
   */
  instanceId?: string;
  /**
   * @remarks
   * Applies to the ENTERPRISE_DS data source type.
   * 
   * The name of the Hybrid Cloud Monitoring metric repository.
   * 
   * @example
   * aliyun-default
   */
  namespace?: string;
  /**
   * @remarks
   * Applies to the APM_DS and PROMETHEUS_DS data source types.
   * 
   * The ID of the region where the data source is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  tenantId?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * Valid values:
   * 
   * - PROMETHEUS_DS: A Prometheus data source.
   * 
   * - SLS_MULTI_DS: An SLS data source.
   * 
   * - APM_DS: An Application Monitoring data source.
   * 
   * - CMS_BASIC_DS: A basic Cloud Monitor data source.
   * 
   * - ENTERPRISE_DS: A Hybrid Cloud Monitoring data source.
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

