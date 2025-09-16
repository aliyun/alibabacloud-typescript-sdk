// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSqlInstanceNameResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1719220182844
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @example
   * 22
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * general
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

export class UpdateSqlInstanceNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
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

