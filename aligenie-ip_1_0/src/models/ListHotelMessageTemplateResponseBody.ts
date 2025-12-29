// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelMessageTemplateResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 不通过
   */
  auditMark?: string;
  /**
   * @example
   * COMMIT
   */
  auditStatus?: string;
  /**
   * @example
   * 这是${hotel}的一个测试模板
   */
  templateDetail?: string;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * 测试模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      auditMark: 'AuditMark',
      auditStatus: 'AuditStatus',
      templateDetail: 'TemplateDetail',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditMark: 'string',
      auditStatus: 'string',
      templateDetail: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelMessageTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  result?: ListHotelMessageTemplateResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelMessageTemplateResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

