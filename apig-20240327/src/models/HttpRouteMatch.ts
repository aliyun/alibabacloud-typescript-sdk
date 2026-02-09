// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpRouteMatchHeaders extends $dara.Model {
  /**
   * @remarks
   * The header name.
   * 
   * @example
   * dev
   */
  name?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * *   Exact: exact match
   * *   Prefix: prefix match
   * *   Regex: regular expression
   * 
   * @example
   * Exact
   */
  type?: string;
  /**
   * @remarks
   * The header value.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class HttpRouteMatchPath extends $dara.Model {
  /**
   * @remarks
   * The path matching type. Valid values:
   * 
   * *   Exact: exact match
   * *   Prefix: prefix match
   * *   Regex: regular expression
   * 
   * @example
   * Prefix
   */
  type?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /user
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class HttpRouteMatchQueryParams extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The match type. Valid values:
   * 
   * *   Exact: exact match
   * *   Prefix: prefix match
   * *   Regex: regular expression
   * 
   * @example
   * Exact
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 17
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class HttpRouteMatch extends $dara.Model {
  /**
   * @remarks
   * The rules for matching based on HTTP request headers.
   */
  headers?: HttpRouteMatchHeaders[];
  /**
   * @remarks
   * Specifies whether the path is case-insensitive.
   * 
   * @example
   * true
   */
  ignoreUriCase?: boolean;
  /**
   * @remarks
   * The HTTP methods.
   */
  methods?: string[];
  /**
   * @remarks
   * The path rule.
   */
  path?: HttpRouteMatchPath;
  /**
   * @remarks
   * The rules for matching based on query parameters.
   */
  queryParams?: HttpRouteMatchQueryParams[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      ignoreUriCase: 'ignoreUriCase',
      methods: 'methods',
      path: 'path',
      queryParams: 'queryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': HttpRouteMatchHeaders },
      ignoreUriCase: 'boolean',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: HttpRouteMatchPath,
      queryParams: { 'type': 'array', 'itemType': HttpRouteMatchQueryParams },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
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

