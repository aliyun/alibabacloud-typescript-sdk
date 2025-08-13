// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableTemplateListResponseBodyResultObjectVariables extends $dara.Model {
  /**
   * @remarks
   * Variable code
   * 
   * @example
   * age
   */
  code?: string;
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Variable input type
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 454
   */
  id?: number;
  /**
   * @remarks
   * Variable name
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * Variable type.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      fieldType: 'fieldType',
      id: 'id',
      name: 'name',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      fieldType: 'string',
      id: 'number',
      name: 'string',
      title: 'string',
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

export class DescribeEventVariableTemplateListResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Template code.
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * 注册模版
   */
  templateName?: string;
  /**
   * @remarks
   * Variable list.
   */
  variables?: DescribeEventVariableTemplateListResponseBodyResultObjectVariables[];
  static names(): { [key: string]: string } {
    return {
      templateCode: 'templateCode',
      templateName: 'templateName',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
      templateName: 'string',
      variables: { 'type': 'array', 'itemType': DescribeEventVariableTemplateListResponseBodyResultObjectVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeEventVariableTemplateListResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeEventVariableTemplateListResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

