// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubFolder } from "./SubFolder";


export class Folder extends $dara.Model {
  createdAt?: number;
  /**
   * @example
   * 00000000-0000-0000-0000-0000012312****
   */
  folderId?: string;
  modifiedAt?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-0000012390****
   */
  parentId?: string;
  subFolder?: SubFolder[];
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      folderId: 'folderId',
      modifiedAt: 'modifiedAt',
      name: 'name',
      namespace: 'namespace',
      parentId: 'parentId',
      subFolder: 'subFolder',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      folderId: 'string',
      modifiedAt: 'number',
      name: 'string',
      namespace: 'string',
      parentId: 'string',
      subFolder: { 'type': 'array', 'itemType': SubFolder },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subFolder)) {
      $dara.Model.validateArray(this.subFolder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

