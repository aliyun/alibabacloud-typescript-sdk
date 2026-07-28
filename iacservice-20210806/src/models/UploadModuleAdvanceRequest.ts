// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UploadModuleAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The template content.
   */
  code?: { [key: string]: string };
  /**
   * @remarks
   * The module ID. This parameter is valid and required when resourceType is set to Module.
   * 
   * @example
   * mod-kw1018ogp2m3qp22b3k31d
   */
  moduleId?: string;
  /**
   * @remarks
   * The name of the module. This parameter is valid and required when resourceType is set to RegistryModule.
   * 
   * @example
   * RegistryModule-test0ef88
   */
  moduleName?: string;
  /**
   * @remarks
   * The workspace name. This parameter is valid and required when resourceType is set to RegistryModule.
   * 
   * @example
   * test_namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The local zip file to upload. The file size cannot exceed 10 MB.
   * 
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

