// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptProfileTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 创建时间，毫秒级时间戳
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * 作为调研专员，对服务总体满意度、服务亮点、改进建议、服务效率、员工态度、再次选择意愿进行依次询问，并采集信息。
   */
  description?: string;
  /**
   * @remarks
   * 标签定义
   * 
   * @example
   * [{\\"name\\":\\"总体满意度\\",\\"description\\":\\"收集对服务的整体满意度的评价信息\\",\\"candidateValues\\":[\\"非常满意\\",\\"满意\\",\\"一般\\",\\"不满意\\",\\"非常不满意\\"]},{\\"name\\":\\"服务亮点\\",\\"description\\":\\"客户对于服务亮点或者满意的地方的描述\\",\\"candidateValues\\":[]},{\\"name\\":\\"改进建议\\",\\"description\\":\\"客户对于改进意见的描述\\",\\"candidateValues\\":[]},{\\"name\\":\\"服务效率\\",\\"description\\":\\"客户对于服务响应速度和服务完成的时效性的反馈\\",\\"candidateValues\\":[]},{\\"name\\":\\"员工态度\\",\\"description\\":\\"客户对于对于服务人员的专业度和态度的评价\\",\\"candidateValues\\":[]},{\\"name\\":\\"再次选择意愿\\",\\"description\\":\\"客户是否愿意再次选择\\",\\"candidateValues\\":[\\"是\\",\\"否\\"]}]
   */
  labels?: string;
  /**
   * @remarks
   * 名称
   * 
   * @example
   * 服务满意度调研
   */
  name?: string;
  /**
   * @remarks
   * schema定义
   * 
   * @example
   * {\\"name\\":\\"李明\\",\\"gender\\":\\"男\\"}
   */
  schema?: string;
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b59
   */
  templateId?: string;
  /**
   * @remarks
   * 更新时间，毫秒级时间戳
   * 
   * @example
   * 1735660800000
   */
  updatedTime?: number;
  /**
   * @remarks
   * 变量定义
   * 
   * @example
   * [{\\"name\\":\\"name\\",\\"description\\":\\"客户姓名\\"},{\\"name\\":\\"gender\\",\\"description\\":\\"客户性别\\"}]
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      labels: 'Labels',
      name: 'Name',
      schema: 'Schema',
      templateId: 'TemplateId',
      updatedTime: 'UpdatedTime',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      description: 'string',
      labels: 'string',
      name: 'string',
      schema: 'string',
      templateId: 'string',
      updatedTime: 'number',
      variables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptProfileTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * 返回码
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据
   */
  data?: GetScriptProfileTemplateResponseBodyData;
  /**
   * @remarks
   * HTTP状态码
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * Instance does not exist. Instance=392db13c-8901-4a25-b566-91d0d8114cec
   */
  message?: string;
  /**
   * @remarks
   * 错误信息中的变量值列表
   */
  params?: string[];
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * 是否调用成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetScriptProfileTemplateResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

