// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubFolder } from "./SubFolder";


export class Folder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 1723537978
   */
  createdAt?: number;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * 00000000-0000-0000-0000-0000012312****
   */
  folderId?: string;
  /**
   * @remarks
   * The time when the folder was modified.
   * 
   * @example
   * 1723537978
   */
  modifiedAt?: number;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * 00000000-0000-0000-0000-0000012390****
   */
  parentId?: string;
  /**
   * @remarks
   * The list of subfolders.
   */
  subFolder?: SubFolder[];
  /**
   * @remarks
   * The workspace ID.
   * 
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

