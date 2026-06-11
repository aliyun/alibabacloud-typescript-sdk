// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketDomain } from "./HiMarketDomain";


export class HiMarketHttpRouteMatchHeaders extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the header match is case-sensitive. Defaults to `true`.
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * The name of the HTTP header to match, such as `Content-Type`.
   */
  name?: string;
  /**
   * @remarks
   * The type of header match. Valid values are `Exact` and `RegularExpression`. Defaults to `Exact`.
   */
  type?: string;
  /**
   * @remarks
   * The value to match against the header. The match `type` determines how this value is interpreted.
   */
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
  /**
   * @remarks
   * Specifies whether the model field match is case-sensitive. Defaults to `true`.
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * The name of the model field to match.
   */
  name?: string;
  /**
   * @remarks
   * The type of match, such as `Exact`, `Pattern`, or `Range`.
   */
  type?: string;
  /**
   * @remarks
   * The value or pattern to match against the model field.
   */
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
  /**
   * @remarks
   * Specifies whether the path match is case-sensitive. Defaults to `true`.
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * The type of path match. Valid values are `Exact` and `Prefix`. Defaults to `Exact` if not specified.
   */
  type?: string;
  /**
   * @remarks
   * The path value to match. The specified `type` determines how this value is interpreted.
   */
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
  /**
   * @remarks
   * Specifies whether the query parameter match is case-sensitive. Defaults to `true`.
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * The name of the query parameter to match.
   */
  name?: string;
  /**
   * @remarks
   * The type of query parameter match. Valid values are `Exact` and `RegularExpression`. Defaults to `Exact`.
   */
  type?: string;
  /**
   * @remarks
   * The value to match against the query parameter. The match `type` determines how this value is interpreted.
   */
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
  /**
   * @remarks
   * A list of HTTP header match conditions. The request must match all of these conditions.
   */
  headers?: HiMarketHttpRouteMatchHeaders[];
  /**
   * @remarks
   * A list of HTTP methods to match, such as `GET` or `POST`. If this field is not specified, the route matches requests with any HTTP method.
   */
  methods?: string[];
  /**
   * @remarks
   * A list of conditions for matching against a data model. Use this to validate the request body or other structured data.
   */
  modelMatches?: HiMarketHttpRouteMatchModelMatches[];
  /**
   * @remarks
   * Specifies the conditions for matching the request path.
   */
  path?: HiMarketHttpRouteMatchPath;
  /**
   * @remarks
   * A list of URL query parameter match conditions. The request must match all of these conditions.
   */
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
  /**
   * @remarks
   * Indicates whether this is a system-defined route. Users cannot modify or delete built-in routes. Defaults to `false`.
   */
  builtin?: boolean;
  /**
   * @remarks
   * An optional description for the HTTP route. This field is for informational purposes only.
   */
  description?: string;
  /**
   * @remarks
   * A list of hostnames to which this route applies. The request\\"s `Host` header must match one of the hostnames in this list.
   */
  domains?: HiMarketDomain[];
  /**
   * @remarks
   * Defines the matching criteria for an incoming HTTP request. The request must meet all specified conditions for this route to apply.
   */
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

