// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAlertRulesEntityDomainFilter } from "./QueryAlertRulesEntityDomainFilter";
import { QueryAlertRulesEntityTypeFilter } from "./QueryAlertRulesEntityTypeFilter";
import { QueryAlertRulesNamespaceFilter } from "./QueryAlertRulesNamespaceFilter";
import { QueryAlertRulesProductCategoryFilter } from "./QueryAlertRulesProductCategoryFilter";
import { QueryAlertRulesRelationTypeFilter } from "./QueryAlertRulesRelationTypeFilter";
import { QueryAlertRulesResourcesFilter } from "./QueryAlertRulesResourcesFilter";


export class ObserveResourceConfigFilter extends $dara.Model {
  entityDomain?: QueryAlertRulesEntityDomainFilter;
  entityType?: QueryAlertRulesEntityTypeFilter;
  namespace?: QueryAlertRulesNamespaceFilter;
  productCategory?: QueryAlertRulesProductCategoryFilter;
  relationType?: QueryAlertRulesRelationTypeFilter;
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

