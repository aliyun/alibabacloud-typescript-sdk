// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Stores } from "./Stores";


export class DatasourceConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The Prometheus instance ID. Used when type is set to PROMETHEUS.
   * 
   * @example
   * rw-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The raw V1 datasource JSON string returned as a read-path fallback when type is set to UNKNOWN and parsing fails. The frontend displays this field as read-only when the value is not empty.
   * 
   * @example
   * {"type":"SLS"}
   */
  legacyRaw?: string;
  /**
   * @remarks
   * Returned when type is set to UNKNOWN. Indicates that the rule cannot be edited through the new API. Submit a ticket to contact the CloudMonitor team.
   * 
   * @example
   * SLS
   */
  legacyType?: string;
  /**
   * @remarks
   * The namespace. Optional when type is set to VIRTUAL_PROMETHEUS. Identifies the namespace to which the virtual Prometheus instance belongs.
   * 
   * @example
   * selectdb
   */
  namespace?: string;
  /**
   * @remarks
   * The Alibaba Cloud service category. Optional when type is set to CLOUD_MONITORING. Returns unknown when the source does not contain this information.
   * 
   * @example
   * ecs
   */
  productCategory?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) project name. Required when type is set to SLS. All stores share the same project.
   * 
   * @example
   * my-project
   */
  project?: string;
  /**
   * @remarks
   * The region ID. Optional for all types. Defaults to the region of the rule or gateway.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of SLS stores. Used when type is set to SLS. At least one store is required. Each store contains store and storeType fields. The project and regionId fields have been moved to the top level. The deprecated fields with the same names that remain in stores return a 400 error if used in write paths.
   */
  stores?: Stores[];
  /**
   * @remarks
   * The tenant ID. Optional when type is set to VIRTUAL_PROMETHEUS. Identifies the tenant to which the virtual Prometheus instance belongs.
   * 
   * @example
   * t-xxxxxxx
   */
  tenantId?: string;
  /**
   * @remarks
   * The datasource type.
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

