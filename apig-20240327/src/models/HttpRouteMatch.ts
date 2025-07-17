// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpRouteMatchHeaders extends $dara.Model {
  /**
   * @example
   * dev
   */
  name?: string;
  /**
   * @example
   * Exact
   */
  type?: string;
  /**
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
   * @example
   * Prefix
   */
  type?: string;
  /**
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
   * @example
   * age
   */
  name?: string;
  /**
   * @example
   * Exact
   */
  type?: string;
  /**
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
  headers?: HttpRouteMatchHeaders[];
  /**
   * @example
   * true
   */
  ignoreUriCase?: boolean;
  methods?: string[];
  path?: HttpRouteMatchPath;
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

