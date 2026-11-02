// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Stores } from "./Stores";


export class DatasourceConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The Prometheus instance ID. This field is used when type is PROMETHEUS.
   * 
   * @example
   * rw-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The original V1 datasource JSON string returned as a fallback when type is UNKNOWN and read path parsing fails. The frontend displays this field as read-only when it is not empty.
   * 
   * @example
   * {"type":"SLS"}
   */
  legacyRaw?: string;
  /**
   * @remarks
   * The legacy type, which is returned when type is UNKNOWN to indicate that this rule cannot be edited by using the new API. Submit a ticket to contact the CloudMonitor team.
   * 
   * @example
   * SLS
   */
  legacyType?: string;
  /**
   * @remarks
   * The namespace. This field is optional when type is VIRTUAL_PROMETHEUS and identifies the namespace to which the virtual Prometheus instance belongs.
   * 
   * @example
   * selectdb
   */
  namespace?: string;
  /**
   * @remarks
   * The cloud service category. This field is optional when type is CLOUD_MONITORING. Outputs unknown when this information is missing from the source.
   * 
   * @example
   * ecs
   */
  productCategory?: string;
  /**
   * @remarks
   * The Simple Log Service project name. This field is required when type is SLS, and all stores share the same project.
   * 
   * @example
   * my-project
   */
  project?: string;
  /**
   * @remarks
   * The region ID. This field is optional for all types and defaults to the rule or gateway region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Simple Log Service store list. This field is used when type is SLS and requires at least one store. Each store includes store and storeType. The project and regionId fields are moved to the top level. The fields with the same names remaining in Stores are deprecated and return 400 in the write path.
   * 
   * @example
   * [{"store":"cms-alert-log","storeType":"log"}]
   */
  stores?: Stores[];
  /**
   * @remarks
   * The tenant ID. This field is optional when type is VIRTUAL_PROMETHEUS and identifies the tenant to which the virtual Prometheus instance belongs.
   * 
   * @example
   * t-xxxxxxx
   */
  tenantId?: string;
  /**
   * @remarks
   * The data source type.
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

