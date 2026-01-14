// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateListResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 意向标签
   */
  intentTags?: { [key: string]: any }[];
  /**
   * @remarks
   * 个性标签
   */
  personalityTags?: string[];
  /**
   * @remarks
   * 话术所需参数
   * 
   * @example
   * 示例值示例值
   */
  properties?: string;
  /**
   * @remarks
   * AI话术ID
   * 
   * @example
   * 59
   */
  templateId?: number;
  /**
   * @remarks
   * 话术模板名称
   * 
   * @example
   * 示例值示例值
   */
  templateName?: string;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 55
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      intentTags: 'IntentTags',
      personalityTags: 'PersonalityTags',
      properties: 'Properties',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentTags: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      personalityTags: { 'type': 'array', 'itemType': 'string' },
      properties: 'string',
      templateId: 'number',
      templateName: 'string',
      templateType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.intentTags)) {
      $dara.Model.validateArray(this.intentTags);
    }
    if(Array.isArray(this.personalityTags)) {
      $dara.Model.validateArray(this.personalityTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: TemplateListResponseBodyModel[];
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * false
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
      model: { 'type': 'array', 'itemType': TemplateListResponseBodyModel },
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

