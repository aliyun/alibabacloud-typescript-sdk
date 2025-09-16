// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneSqlInstanceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1719221186114
   */
  gmtCreate?: string;
  /**
   * @example
   * 1719221186114
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * -cn-pl32rf0****
   */
  instanceId?: number;
  /**
   * @example
   * True
   */
  isDir?: number;
  /**
   * @example
   * general
   */
  name?: string;
  /**
   * @example
   * 1
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

export class CloneSqlInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
  result?: CloneSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CloneSqlInstanceResponseBodyResult,
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

