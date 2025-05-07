// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiRoutePredicatesHeaderPredicates } from "./HttpApiRoutePredicatesHeaderPredicates";
import { HttpApiRoutePredicatesPathPredicates } from "./HttpApiRoutePredicatesPathPredicates";
import { HttpApiRoutePredicatesQueryPredicates } from "./HttpApiRoutePredicatesQueryPredicates";


export class HttpApiRoutePredicates extends $dara.Model {
  headerPredicates?: HttpApiRoutePredicatesHeaderPredicates[];
  methodPredicates?: string[];
  pathPredicates?: HttpApiRoutePredicatesPathPredicates;
  queryPredicates?: HttpApiRoutePredicatesQueryPredicates[];
  static names(): { [key: string]: string } {
    return {
      headerPredicates: 'HeaderPredicates',
      methodPredicates: 'MethodPredicates',
      pathPredicates: 'PathPredicates',
      queryPredicates: 'QueryPredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerPredicates: { 'type': 'array', 'itemType': HttpApiRoutePredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: HttpApiRoutePredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': HttpApiRoutePredicatesQueryPredicates },
    };
  }

  validate() {
    if(Array.isArray(this.headerPredicates)) {
      $dara.Model.validateArray(this.headerPredicates);
    }
    if(Array.isArray(this.methodPredicates)) {
      $dara.Model.validateArray(this.methodPredicates);
    }
    if(this.pathPredicates && typeof (this.pathPredicates as any).validate === 'function') {
      (this.pathPredicates as any).validate();
    }
    if(Array.isArray(this.queryPredicates)) {
      $dara.Model.validateArray(this.queryPredicates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

