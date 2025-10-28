// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsResponseBodyComponentListComponent extends $dara.Model {
  /**
   * @remarks
   * The ID of the component.
   * 
   * @example
   * 1
   */
  componentId?: string;
  /**
   * @remarks
   * The key of the component.
   * 
   * @example
   * JDK 7
   */
  componentKey?: string;
  /**
   * @remarks
   * The description of the component.
   * 
   * @example
   * JDK 7
   */
  desc?: string;
  /**
   * @remarks
   * Indicates whether the component has expired. Valid values:
   * 
   * *   false: The component has not expired.
   * *   true: The component has expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The type of the component. Valid values:
   * 
   * *   JDK
   * *   TOMCAT
   * *   TENGINE
   * 
   * @example
   * JDK
   */
  type?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * oraclejdk7
   */
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
  /**
   * @remarks
   * The components.
   */
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

