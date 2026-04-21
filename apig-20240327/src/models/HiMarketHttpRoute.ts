// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketDomain } from "./HiMarketDomain";


export class HiMarketHttpRouteMatchHeaders extends $dara.Model {
  caseSensitive?: boolean;
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketHttpRouteMatchModelMatches extends $dara.Model {
  caseSensitive?: boolean;
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketHttpRouteMatchPath extends $dara.Model {
  caseSensitive?: boolean;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketHttpRouteMatchQueryParams extends $dara.Model {
  caseSensitive?: boolean;
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketHttpRouteMatch extends $dara.Model {
  headers?: HiMarketHttpRouteMatchHeaders[];
  methods?: string[];
  modelMatches?: HiMarketHttpRouteMatchModelMatches[];
  path?: HiMarketHttpRouteMatchPath;
  queryParams?: HiMarketHttpRouteMatchQueryParams[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      methods: 'methods',
      modelMatches: 'modelMatches',
      path: 'path',
      queryParams: 'queryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': HiMarketHttpRouteMatchHeaders },
      methods: { 'type': 'array', 'itemType': 'string' },
      modelMatches: { 'type': 'array', 'itemType': HiMarketHttpRouteMatchModelMatches },
      path: HiMarketHttpRouteMatchPath,
      queryParams: { 'type': 'array', 'itemType': HiMarketHttpRouteMatchQueryParams },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    if(Array.isArray(this.modelMatches)) {
      $dara.Model.validateArray(this.modelMatches);
    }
    if(this.path && typeof (this.path as any).validate === 'function') {
      (this.path as any).validate();
    }
    if(Array.isArray(this.queryParams)) {
      $dara.Model.validateArray(this.queryParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketHttpRoute extends $dara.Model {
  builtin?: boolean;
  description?: string;
  domains?: HiMarketDomain[];
  match?: HiMarketHttpRouteMatch;
  static names(): { [key: string]: string } {
    return {
      builtin: 'builtin',
      description: 'description',
      domains: 'domains',
      match: 'match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtin: 'boolean',
      description: 'string',
      domains: { 'type': 'array', 'itemType': HiMarketDomain },
      match: HiMarketHttpRouteMatch,
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

