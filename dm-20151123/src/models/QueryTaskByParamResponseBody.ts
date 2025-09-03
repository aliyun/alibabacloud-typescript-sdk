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
  configSetId?: string;
  configSetName?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2022-04-18T10:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * dedicated IP pool ID.
   * 
   * @example
   * xxx
   */
  ipPoolId?: string;
  /**
   * @remarks
   * dedicated IP pool name.
   * 
   * @example
   * test
   */
  ipPoolName?: string;
  /**
   * @remarks
   * Receiver\\"s name
   * 
   * @example
   * TKP000442-333
   */
  receiversName?: string;
  /**
   * @remarks
   * Request count
   * 
   * @example
   * 1
   */
  requestCount?: string;
  /**
   * @remarks
   * Tag
   * 
   * @example
   * 202201
   */
  tagName?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 1054296
   */
  taskId?: string;
  /**
   * @remarks
   * Task status, sent successfully: 1
   * 
   * @example
   * 1
   */
  taskStatus?: string;
  /**
   * @remarks
   * Template name
   * 
   * @example
   * Short Simple
   */
  templateName?: string;
  /**
   * @remarks
   * Creation time in UTC format
   * 
   * @example
   * 1569734892
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      configSetId: 'ConfigSetId',
      configSetName: 'ConfigSetName',
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
      configSetId: 'string',
      configSetName: 'string',
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

export class QueryTaskByParamResponseBodyData extends $dara.Model {
  task?: QueryTaskByParamResponseBodyDataTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': QueryTaskByParamResponseBodyDataTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskByParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * Returned results
   */
  data?: QueryTaskByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryTaskByParamResponseBodyData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

