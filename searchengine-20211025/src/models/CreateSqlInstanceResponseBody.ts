// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlInstanceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1719220182844
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719220182844
   */
  gmtModified?: string;
  /**
   * @example
   * 22
   */
  id?: number;
  /**
   * @example
   * ha-cn-pl32rf0****
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
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
   * id of request
   * 
   * @example
   * B43CD1BB-ABD7-59C5-B89A-6E5F6FE60A84
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
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

