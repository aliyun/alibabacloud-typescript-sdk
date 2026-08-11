// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1719220182844
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1719220182844
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 22
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
   * Indicates whether the item is a directory. Valid values:
   * - true: The item is a directory.
   * - false: The item is not a directory.
   * 
   * @example
   * true
   */
  isDir?: number;
  /**
   * @remarks
   * The SQL instance name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The parent task ID.
   * 
   * @example
   * -1
   */
  parent?: number;
  /**
   * @remarks
   * The ID of the template to which the instance belongs.
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

export class CreateSqlInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B43CD1BB-ABD7-59C5-B89A-6E5F6FE60A84
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CreateSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateSqlInstanceResponseBodyResult,
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

