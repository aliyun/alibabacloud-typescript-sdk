// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsResponseBodyComponentListComponent extends $dara.Model {
  componentId?: string;
  componentKey?: string;
  desc?: string;
  expired?: boolean;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentKey: 'ComponentKey',
      desc: 'Desc',
      expired: 'Expired',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentKey: 'string',
      desc: 'string',
      expired: 'boolean',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponentList extends $dara.Model {
  component?: ListComponentsResponseBodyComponentListComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponentListComponent },
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

export class ListComponentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  componentList?: ListComponentsResponseBodyComponentList;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      componentList: 'ComponentList',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      componentList: ListComponentsResponseBodyComponentList,
      message: 'string',
    };
  }

  validate() {
    if(this.componentList && typeof (this.componentList as any).validate === 'function') {
      (this.componentList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

