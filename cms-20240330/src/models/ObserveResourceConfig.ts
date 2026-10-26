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
   * The relation type. TAG is supported only for alert rules where datasourceConfig.type is APM and queryConfig.type is APM_MULTI_QUERY. UMODEL_ENTITY does not support write operations and is used only to read existing data.
   * 
   * @example
   * ALL
   */
  relationType?: string;
  /**
   * @remarks
   * The resource list. This field can be left empty when relationType is set to ALL, which indicates all resources. When relationType is set to TAG, this field is a list of tags in the key=value format, such as ["env=prod", "app=foo"]. Only the APM data source and APM_MULTI_QUERY are supported.
   * 
   * @example
   * ["i-bp1a2b3c4d5e6f7g8h9i","i-bp9h8g7f6e5d4c3b2a1"]
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

