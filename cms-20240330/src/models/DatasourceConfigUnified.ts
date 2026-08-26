// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Stores } from "./Stores";


export class DatasourceConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The Prometheus instance ID. Required when type is PROMETHEUS or VIRTUAL_PROMETHEUS. Ignored for other types.
   * 
   * @example
   * prom-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The raw V1 datasource JSON string returned as a fallback when type is UNKNOWN and read-path parsing fails. When the frontend detects that this field is not empty, display it as read-only.
   */
  legacyRaw?: string;
  /**
   * @remarks
   * Returned when type is UNKNOWN. Indicates that this rule cannot be edited through the new API. Submit a ticket to contact the CloudMonitor team.
   */
  legacyType?: string;
  /**
   * @remarks
   * The namespace. Optional when type is VIRTUAL_PROMETHEUS. Identifies the namespace to which the virtual Prometheus instance belongs.
   * 
   * @example
   * selectdb
   */
  namespace?: string;
  /**
   * @remarks
   * The Alibaba Cloud service category. Optional when type is CLOUD_MONITORING. Returns unknown when the source lacks this information.
   */
  productCategory?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) project name. Required when type is SLS. All stores share the same project.
   */
  project?: string;
  /**
   * @remarks
   * The region ID. Optional for PROMETHEUS, VIRTUAL_PROMETHEUS, UMODEL, APM, XTRACE, EBPF, RUM, and SLS types. Defaults to the region of the rule or gateway. Not used for CLOUD_MONITORING. Use AlertRuleV2.regionId instead for CLOUD_MONITORING.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of SLS stores. Used when type is SLS. At least one store is required. Each store contains store and storeType fields. The project and regionId fields have been moved to the top level. The deprecated fields with the same names that remain in stores return a 400 error if used in write paths.
   */
  stores?: Stores[];
  /**
   * @remarks
   * The tenant ID. Optional when type is VIRTUAL_PROMETHEUS. Identifies the tenant to which the virtual Prometheus instance belongs.
   * 
   * @example
   * t-xxxxxxx
   */
  tenantId?: string;
  /**
   * @remarks
   * The data source type. Valid values and associated fields: PROMETHEUS (instanceId required; regionId optional). VIRTUAL_PROMETHEUS (instanceId required; regionId, namespace, and tenantId optional). UMODEL (regionId optional; other fields are carried in queryConfig/conditionConfig). APM (regionId optional). XTRACE (regionId optional). EBPF (regionId optional). RUM (regionId optional). CLOUD_MONITORING (regionId and productCategory optional). SLS (project and stores required). UNKNOWN (read-only fallback; do not use in write paths). Non-enumerated values (such as CMS_BASIC_DS/SLS_DS) are prohibited and the backend returns an Invalidtype 400 error.
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

