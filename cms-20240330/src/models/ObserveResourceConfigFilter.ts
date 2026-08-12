// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAlertRulesEntityDomainFilter } from "./QueryAlertRulesEntityDomainFilter";
import { QueryAlertRulesEntityTypeFilter } from "./QueryAlertRulesEntityTypeFilter";
import { QueryAlertRulesNamespaceFilter } from "./QueryAlertRulesNamespaceFilter";
import { QueryAlertRulesProductCategoryFilter } from "./QueryAlertRulesProductCategoryFilter";
import { QueryAlertRulesRelationTypeFilter } from "./QueryAlertRulesRelationTypeFilter";
import { QueryAlertRulesResourcesFilter } from "./QueryAlertRulesResourcesFilter";


export class ObserveResourceConfigFilter extends $dara.Model {
  /**
   * @remarks
   * The UModel resource domain filter (exact match).
   */
  entityDomain?: QueryAlertRulesEntityDomainFilter;
  /**
   * @remarks
   * The UModel entity type filter (set inclusion/exclusion).
   */
  entityType?: QueryAlertRulesEntityTypeFilter;
  /**
   * @remarks
   * The CloudMonitor namespace filter (exact match).
   */
  namespace?: QueryAlertRulesNamespaceFilter;
  /**
   * @remarks
   * The CloudMonitor product category filter (exact match).
   */
  productCategory?: QueryAlertRulesProductCategoryFilter;
  /**
   * @remarks
   * The relationship type filter (set inclusion/exclusion): ALL/UMODEL_ENTITY/CLOUD_INSTANCE/GROUP_V1/GROUP_V2/TAG.
   */
  relationType?: QueryAlertRulesRelationTypeFilter;
  /**
   * @remarks
   * The resources filter (contains uses OR matching; notContains excludes all).
   */
  resources?: QueryAlertRulesResourcesFilter;
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
      entityDomain: QueryAlertRulesEntityDomainFilter,
      entityType: QueryAlertRulesEntityTypeFilter,
      namespace: QueryAlertRulesNamespaceFilter,
      productCategory: QueryAlertRulesProductCategoryFilter,
      relationType: QueryAlertRulesRelationTypeFilter,
      resources: QueryAlertRulesResourcesFilter,
    };
  }

  validate() {
    if(this.entityDomain && typeof (this.entityDomain as any).validate === 'function') {
      (this.entityDomain as any).validate();
    }
    if(this.entityType && typeof (this.entityType as any).validate === 'function') {
      (this.entityType as any).validate();
    }
    if(this.namespace && typeof (this.namespace as any).validate === 'function') {
      (this.namespace as any).validate();
    }
    if(this.productCategory && typeof (this.productCategory as any).validate === 'function') {
      (this.productCategory as any).validate();
    }
    if(this.relationType && typeof (this.relationType as any).validate === 'function') {
      (this.relationType as any).validate();
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

