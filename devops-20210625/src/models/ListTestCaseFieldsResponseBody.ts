// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTestCaseFieldsResponseBodyFieldsOptions extends $dara.Model {
  /**
   * @example
   * 重复的缺陷
   */
  displayValue?: string;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  fieldIdentifier?: string;
  /**
   * @example
   * 重复的缺陷
   */
  identifier?: string;
  /**
   * @example
   * 1
   */
  level?: number;
  /**
   * @example
   * null
   */
  position?: number;
  /**
   * @example
   * 重复的缺陷
   */
  value?: string;
  /**
   * @example
   * null
   */
  valueEn?: string;
  static names(): { [key: string]: string } {
    return {
      displayValue: 'displayValue',
      fieldIdentifier: 'fieldIdentifier',
      identifier: 'identifier',
      level: 'level',
      position: 'position',
      value: 'value',
      valueEn: 'valueEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayValue: 'string',
      fieldIdentifier: 'string',
      identifier: 'string',
      level: 'number',
      position: 'number',
      value: 'string',
      valueEn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTestCaseFieldsResponseBodyFields extends $dara.Model {
  /**
   * @example
   * 例：date
   */
  className?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  creator?: string;
  /**
   * @example
   * 123
   */
  defaultValue?: string;
  /**
   * @example
   * 字段的具体信息
   */
  description?: string;
  /**
   * @example
   * list
   */
  format?: string;
  /**
   * @example
   * 1623916393000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1623916393000
   */
  gmtModified?: number;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
  /**
   * @example
   * false
   */
  isRequired?: boolean;
  /**
   * @example
   * false
   */
  isShowWhenCreate?: boolean;
  /**
   * @example
   * false
   */
  isSystemRequired?: boolean;
  /**
   * @example
   * null
   */
  linkWithService?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  modifier?: string;
  /**
   * @example
   * 负责人
   */
  name?: string;
  options?: ListTestCaseFieldsResponseBodyFieldsOptions[];
  /**
   * @example
   * 例：Workitem
   */
  resourceType?: string;
  /**
   * @example
   * NativeField
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      creator: 'creator',
      defaultValue: 'defaultValue',
      description: 'description',
      format: 'format',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      isRequired: 'isRequired',
      isShowWhenCreate: 'isShowWhenCreate',
      isSystemRequired: 'isSystemRequired',
      linkWithService: 'linkWithService',
      modifier: 'modifier',
      name: 'name',
      options: 'options',
      resourceType: 'resourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      creator: 'string',
      defaultValue: 'string',
      description: 'string',
      format: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      identifier: 'string',
      isRequired: 'boolean',
      isShowWhenCreate: 'boolean',
      isSystemRequired: 'boolean',
      linkWithService: 'string',
      modifier: 'string',
      name: 'string',
      options: { 'type': 'array', 'itemType': ListTestCaseFieldsResponseBodyFieldsOptions },
      resourceType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTestCaseFieldsResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  fields?: ListTestCaseFieldsResponseBodyFields[];
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      fields: 'fields',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      fields: { 'type': 'array', 'itemType': ListTestCaseFieldsResponseBodyFields },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

