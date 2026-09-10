// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveResourceConfig extends $dara.Model {
  /**
   * @remarks
   * The UModel entity domain.
   * 
   * @example
   * cloud_monitor
   */
  entityDomain?: string;
  /**
   * @remarks
   * The UModel entity type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  entityType?: string;
  /**
   * @remarks
   * The CloudMonitor namespace.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The CloudMonitor product category.
   * 
   * @example
   * ecs
   */
  productCategory?: string;
  /**
   * @remarks
   * The relation type. TAG is supported only for alert rules where datasourceConfig.type is set to APM and queryConfig.type is set to APM_MULTI_QUERY. UMODEL_ENTITY does not support writes and is used only for reading existing data.
   * 
   * @example
   * ALL
   */
  relationType?: string;
  /**
   * @remarks
   * The list of resources. If relationType is set to ALL, this parameter can be left empty, which indicates all resources. If relationType is set to TAG, this parameter is a list of labels in key=value format (such as ["env=prod", "app=foo"]). This is supported only for APM data sources with APM_MULTI_QUERY.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      entityDomain: 'entityDomain',
      entityType: 'entityType',
      namespace: 'namespace',
      productCategory: 'productCategory',
      relationType: 'relationType',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDomain: 'string',
      entityType: 'string',
      namespace: 'string',
      productCategory: 'string',
      relationType: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

