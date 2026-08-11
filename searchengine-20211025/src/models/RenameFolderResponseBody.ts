// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenameFolderResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the folder was last modified.
   * 
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * Indicates whether the item is a folder. Valid values: \\`true\\` and \\`false\\`.
   * 
   * @example
   * True
   */
  isDir?: number;
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
   * The ID of the parent folder.
   * 
   * @example
   * -1
   */
  parent?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the item. Valid values: \\`table\\`, \\`instance\\`, \\`template\\`, and \\`function\\`.
   * 
   * @example
   * template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
   */
  result?: RenameFolderResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RenameFolderResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

