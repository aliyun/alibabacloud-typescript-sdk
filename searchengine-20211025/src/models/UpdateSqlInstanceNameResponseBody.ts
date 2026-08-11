// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSqlInstanceNameResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1719220182844
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the instance was last modified.
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
   * 22
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
   * Indicates whether the item is a folder. A value of 1 indicates a folder. A value of 0 indicates that the item is not a folder.
   * 
   * @example
   * true
   */
  isDir?: number;
  /**
   * @remarks
   * The name of the SQL instance.
   * 
   * @example
   * general
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
   * The template ID.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the item. Valid values: table, instance, template, and function.
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

export class UpdateSqlInstanceNameResponseBody extends $dara.Model {
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
   * The result of the request.
   */
  result?: UpdateSqlInstanceNameResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateSqlInstanceNameResponseBodyResult,
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

