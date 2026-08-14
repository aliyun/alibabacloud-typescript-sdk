// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Stores } from "./Stores";


export class DatasourceConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The Prometheus instance ID (required when type=PROMETHEUS; ignored for other types).
   */
  instanceId?: string;
  /**
   * @remarks
   * The original V1 datasource JSON string returned as a fallback when type=UNKNOWN and the read path fails to parse the datasource. If the frontend detects that this field is not empty, display it as read-only.
   */
  legacyRaw?: string;
  /**
   * @remarks
   * Returned when type=UNKNOWN, indicating that this rule cannot be edited through the new API. Submit a ticket to contact the CloudMonitor team.
   */
  legacyType?: string;
  /**
   * @remarks
   * The Alibaba Cloud service category (optional when type=CLOUD_MONITORING). If the source does not contain this information, the value unknown is returned.
   */
  productCategory?: string;
  /**
   * @remarks
   * The Simple Log Service project name (required when type=SLS; all stores share the same project).
   */
  project?: string;
  /**
   * @remarks
   * The region ID (optional for PROMETHEUS / UMODEL / APM / SLS types; defaults to the same region as the rule or gateway. CLOUD_MONITORING does not use this field; use AlertRuleV2.regionId instead).
   */
  regionId?: string;
  /**
   * @remarks
   * The list of Simple Log Service stores (used when type=SLS; at least one store is required). Each store contains store and storeType fields. The project and regionId fields have been moved to the top level. The deprecated fields with the same names that remain in stores cause a 400 error if used in write paths.
   */
  stores?: Stores[];
  /**
   * @remarks
   * The datasource type. Valid values: PROMETHEUS (instanceId is required; regionId is optional). UMODEL (regionId is optional; other settings are carried in queryConfig/conditionConfig). APM (regionId is optional). CLOUD_MONITORING (regionId and productCategory are optional). UNKNOWN (read-only fallback; do not use in write paths). Do not use non-enumerated values (such as CMS_BASIC_DS or SLS_DS). The backend returns an Invalidtype 400 error.
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      legacyRaw: 'legacyRaw',
      legacyType: 'legacyType',
      productCategory: 'productCategory',
      project: 'project',
      regionId: 'regionId',
      stores: 'stores',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      legacyRaw: 'string',
      legacyType: 'string',
      productCategory: 'string',
      project: 'string',
      regionId: 'string',
      stores: { 'type': 'array', 'itemType': Stores },
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

