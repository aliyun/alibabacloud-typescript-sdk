// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadModuleRequest extends $dara.Model {
  code?: { [key: string]: string };
  /**
   * @example
   * mod-kw1018ogp2m3qp22b3k31d
   */
  moduleId?: string;
  /**
   * @example
   * RegistryModule-test0ef88
   */
  moduleName?: string;
  /**
   * @example
   * test_namespace
   */
  namespaceName?: string;
  /**
   * @example
   * url
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleId: 'moduleId',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      moduleId: 'string',
      moduleName: 'string',
      namespaceName: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.code) {
      $dara.Model.validateMap(this.code);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

