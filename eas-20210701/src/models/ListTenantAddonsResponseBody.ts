// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The plugin attributes.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * prometheus_discovery
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plugin information.
   */
  addons?: ListTenantAddonsResponseBodyAddons[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListTenantAddonsResponseBodyAddons },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

