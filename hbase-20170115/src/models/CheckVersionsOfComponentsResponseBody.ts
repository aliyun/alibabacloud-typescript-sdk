// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckVersionsOfComponentsResponseBodyComponentsComponents extends $dara.Model {
  component?: string;
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

export class CheckVersionsOfComponentsResponseBodyComponents extends $dara.Model {
  components?: CheckVersionsOfComponentsResponseBodyComponentsComponents[];
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': CheckVersionsOfComponentsResponseBodyComponentsComponents },
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVersionsOfComponentsResponseBody extends $dara.Model {
  components?: CheckVersionsOfComponentsResponseBodyComponents;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: CheckVersionsOfComponentsResponseBodyComponents,
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

