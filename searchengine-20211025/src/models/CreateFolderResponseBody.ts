// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFolderResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * 25030
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-pl32rf0****
   */
  instanceId?: number;
  /**
   * @remarks
   * Indicates whether the entry is a folder. Valid values:
   * - true: The entry is a folder.
   * - false: The entry is not a folder.
   * 
   * @example
   * True
   */
  isDir?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The parent level ID.
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
   * table, instance, template, function
   * 
   * @example
   * instance
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

export class CreateFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CreateFolderResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateFolderResponseBodyResult,
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

