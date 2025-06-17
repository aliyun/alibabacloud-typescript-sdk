// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskByParamResponseBodyDataTask extends $dara.Model {
  /**
   * @remarks
   * Address type, sending address: 1; random address: 0;
   * 
   * @example
   * 0
   */
  addressType?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2022-04-18T10:36Z
   */
  createTime?: string;
  ipPoolId?: string;
  ipPoolName?: string;
  /**
   * @remarks
   * Receiver\\"s name.
   * 
   * @example
   * TKP000442-333
   */
  receiversName?: string;
  /**
   * @remarks
   * Request count.
   * 
   * @example
   * 1
   */
  requestCount?: string;
  /**
   * @remarks
   * Tag.
   * 
   * @example
   * 202201
   */
  tagName?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 1054296
   */
  taskId?: string;
  /**
   * @remarks
   * Task status, sent successfully: 1.
   * 
   * @example
   * 1
   */
  taskStatus?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * Short Simple
   */
  templateName?: string;
  /**
   * @remarks
   * Creation time in UTC format.
   * 
   * @example
   * 1569734892
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      createTime: 'CreateTime',
      ipPoolId: 'IpPoolId',
      ipPoolName: 'IpPoolName',
      receiversName: 'ReceiversName',
      requestCount: 'RequestCount',
      tagName: 'TagName',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      templateName: 'TemplateName',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      createTime: 'string',
      ipPoolId: 'string',
      ipPoolName: 'string',
      receiversName: 'string',
      requestCount: 'string',
      tagName: 'string',
      taskId: 'string',
      taskStatus: 'string',
      templateName: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

