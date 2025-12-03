// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckComponentsVersionResponseBodyComponentsComponent extends $dara.Model {
  /**
   * @example
   * HBASE
   */
  component?: string;
  /**
   * @example
   * true
   */
  isLatestVersion?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
      isLatestVersion: 'IsLatestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: 'string',
      isLatestVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponseBodyComponents extends $dara.Model {
  component?: CheckComponentsVersionResponseBodyComponentsComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': CheckComponentsVersionResponseBodyComponentsComponent },
    };
  }

  validate() {
    if(Array.isArray(this.component)) {
      $dara.Model.validateArray(this.component);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComponentsVersionResponseBody extends $dara.Model {
  components?: CheckComponentsVersionResponseBodyComponents;
  /**
   * @example
   * E3537EB4-1100-41CA-A147-C74CCC8BB12C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: CheckComponentsVersionResponseBodyComponents,
      requestId: 'string',
    };
  }

  validate() {
    if(this.components && typeof (this.components as any).validate === 'function') {
      (this.components as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

