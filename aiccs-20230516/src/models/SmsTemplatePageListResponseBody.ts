// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmsTemplatePageListResponseBodyModelList extends $dara.Model {
  /**
   * @remarks
   * 短信内容
   * 
   * @example
   * 示例值示例值示例值
   */
  content?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2021-09-26 11:34:59
   */
  createTime?: string;
  /**
   * @remarks
   * 模板所需参数
   * 
   * @example
   * 示例值示例值
   */
  properties?: string;
  /**
   * @remarks
   * 智能短链ID
   * 
   * @example
   * 46
   */
  shortUrlTaskId?: number;
  /**
   * @remarks
   * 短信签名
   * 
   * @example
   * a234n
   */
  sign?: string;
  /**
   * @remarks
   * 短信类型
   * 
   * @example
   * 示例值示例值
   */
  smsType?: string;
  /**
   * @remarks
   * 模板状态
   * 
   * @example
   * 18
   */
  status?: number;
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * 67
   */
  templateId?: number;
  /**
   * @remarks
   * 模板名称
   * 
   * @example
   * 示例值示例值示例值
   */
  templateName?: string;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 56
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      properties: 'Properties',
      shortUrlTaskId: 'ShortUrlTaskId',
      sign: 'Sign',
      smsType: 'SmsType',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      properties: 'string',
      shortUrlTaskId: 'number',
      sign: 'string',
      smsType: 'string',
      status: 'number',
      templateId: 'number',
      templateName: 'string',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplatePageListResponseBodyModel extends $dara.Model {
  list?: SmsTemplatePageListResponseBodyModelList[];
  /**
   * @example
   * 53
   */
  pageNo?: number;
  /**
   * @example
   * 42
   */
  pageSize?: number;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @example
   * 31
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': SmsTemplatePageListResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplatePageListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: SmsTemplatePageListResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      model: SmsTemplatePageListResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

