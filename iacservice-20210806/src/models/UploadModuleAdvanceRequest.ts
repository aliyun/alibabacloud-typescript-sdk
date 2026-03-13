// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UploadModuleAdvanceRequest extends $dara.Model {
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
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleId: 'moduleId',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      urlObject: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      moduleId: 'string',
      moduleName: 'string',
      namespaceName: 'string',
      urlObject: 'Readable',
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

