// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateBlockRequestScopesBlockScopeApp } from "./CreateBlockRequestScopesBlockScopeApp";
import { CreateBlockRequestScopesBlockScopeBgSystem } from "./CreateBlockRequestScopesBlockScopeBgSystem";
import { CreateBlockRequestScopesBlockScopeCluster } from "./CreateBlockRequestScopesBlockScopeCluster";
import { CreateBlockRequestScopesBlockScopeCustomer } from "./CreateBlockRequestScopesBlockScopeCustomer";
import { CreateBlockRequestScopesBlockScopeProduct } from "./CreateBlockRequestScopesBlockScopeProduct";


export class CreateBlockRequestScopesBlockScope extends $dara.Model {
  app?: CreateBlockRequestScopesBlockScopeApp;
  bgSystem?: CreateBlockRequestScopesBlockScopeBgSystem[];
  cluster?: CreateBlockRequestScopesBlockScopeCluster;
  customer?: CreateBlockRequestScopesBlockScopeCustomer[];
  dept?: string[];
  express?: string;
  infrastructure?: string[];
  product?: CreateBlockRequestScopesBlockScopeProduct[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      bgSystem: 'BgSystem',
      cluster: 'Cluster',
      customer: 'Customer',
      dept: 'Dept',
      express: 'Express',
      infrastructure: 'Infrastructure',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: CreateBlockRequestScopesBlockScopeApp,
      bgSystem: { 'type': 'array', 'itemType': CreateBlockRequestScopesBlockScopeBgSystem },
      cluster: CreateBlockRequestScopesBlockScopeCluster,
      customer: { 'type': 'array', 'itemType': CreateBlockRequestScopesBlockScopeCustomer },
      dept: { 'type': 'array', 'itemType': 'string' },
      express: 'string',
      infrastructure: { 'type': 'array', 'itemType': 'string' },
      product: { 'type': 'array', 'itemType': CreateBlockRequestScopesBlockScopeProduct },
    };
  }

  validate() {
    if(this.app && typeof (this.app as any).validate === 'function') {
      (this.app as any).validate();
    }
    if(Array.isArray(this.bgSystem)) {
      $dara.Model.validateArray(this.bgSystem);
    }
    if(this.cluster && typeof (this.cluster as any).validate === 'function') {
      (this.cluster as any).validate();
    }
    if(Array.isArray(this.customer)) {
      $dara.Model.validateArray(this.customer);
    }
    if(Array.isArray(this.dept)) {
      $dara.Model.validateArray(this.dept);
    }
    if(Array.isArray(this.infrastructure)) {
      $dara.Model.validateArray(this.infrastructure);
    }
    if(Array.isArray(this.product)) {
      $dara.Model.validateArray(this.product);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

