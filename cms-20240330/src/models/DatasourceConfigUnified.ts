// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Stores } from "./Stores";


export class DatasourceConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The Prometheus instance ID, which is used when the type is PROMETHEUS.
   * 
   * @example
   * rw-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The original V1 datasource JSON string returned as a fallback when the type is UNKNOWN and the read path parsing fails. If this field is not empty, the frontend displays it in read-only mode.
   * 
   * @example
   * {"type":"SLS"}
   */
  legacyRaw?: string;
  /**
   * @remarks
   * The legacy type returned when the type is UNKNOWN. This indicates that the rule cannot be edited by using the new API. Submit a ticket to contact the CloudMonitor team.
   * 
   * @example
   * SLS
   */
  legacyType?: string;
  /**
   * @remarks
   * The namespace of the virtual Prometheus instance. This parameter is optional when the type is VIRTUAL_PROMETHEUS.
   * 
   * @example
   * selectdb
   */
  namespace?: string;
  /**
   * @remarks
   * The category of the Alibaba Cloud service. This parameter is optional when the type is CLOUD_MONITORING. If this information is missing from the source, the value is unknown.
   * 
   * @example
   * ecs
   */
  productCategory?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project. This parameter is required when the type is SLS. All stores share the same project.
   * 
   * @example
   * my-project
   */
  project?: string;
  /**
   * @remarks
   * The region ID. This parameter is optional for all types and defaults to the region of the rule or gateway.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of Simple Log Service stores. This parameter is used when the type is SLS and must contain at least one store. Each store includes the store and storeType fields. The project and regionId fields are moved to the top level. The fields with the same names remaining in the stores are deprecated and return a 400 error if used in the write path.
   * 
   * @example
   * [{"store":"cms-alert-log","storeType":"log"}]
   */
  stores?: Stores[];
  /**
   * @remarks
   * The ID of the tenant to which the virtual Prometheus instance belongs. This parameter is optional when the type is VIRTUAL_PROMETHEUS.
   * 
   * @example
   * t-xxxxxxx
   */
  tenantId?: string;
  /**
   * @remarks
   * The data source type. Valid values and corresponding fields: PROMETHEUS (instanceId is required; regionId is optional), VIRTUAL_PROMETHEUS (instanceId is required; regionId, namespace, and tenantId are optional), UMODEL (regionId is optional; other fields are carried in queryConfig or conditionConfig), APM (regionId is optional), XTRACE (regionId is optional), EBPF (regionId is optional), RUM (regionId is optional), CLOUD_MONITORING (regionId and productCategory are optional), SLS (project and stores are required), and UNKNOWN (read-only fallback; do not use in the write path). Non-enum values such as CMS_BASIC_DS or SLS_DS are not allowed and return an Invalidtype 400 error.
   * 
   * This parameter is required.
   * 
   * @example
   * PROMETHEUS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      legacyRaw: 'legacyRaw',
      legacyType: 'legacyType',
      namespace: 'namespace',
      productCategory: 'productCategory',
      project: 'project',
      regionId: 'regionId',
      stores: 'stores',
      tenantId: 'tenantId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      legacyRaw: 'string',
      legacyType: 'string',
      namespace: 'string',
      productCategory: 'string',
      project: 'string',
      regionId: 'string',
      stores: { 'type': 'array', 'itemType': Stores },
      tenantId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stores)) {
      $dara.Model.validateArray(this.stores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

