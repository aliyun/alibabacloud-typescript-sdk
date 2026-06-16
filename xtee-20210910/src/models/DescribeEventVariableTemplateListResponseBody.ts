// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableTemplateListResponseBodyResultObjectVariables extends $dara.Model {
  /**
   * @remarks
   * The variable code.
   * 
   * @example
   * age
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The variable input type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 454
   */
  id?: number;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * The variable type.
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
   * The template code.
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 注册模版
   */
  templateName?: string;
  /**
   * @remarks
   * The list of variables.
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
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The response object.
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

