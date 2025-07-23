// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBodyDataVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * instance_name
   */
  attribute?: string;
  /**
   * @remarks
   * The type of the variable.
   * 
   * @example
   * String
   */
  dataType?: string;
  /**
   * @remarks
   * The default value of the variable.
   * 
   * @example
   * cadt-app-01
   */
  defaultValue?: string;
  options?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * ${name}
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      dataType: 'DataType',
      defaultValue: 'DefaultValue',
      options: 'Options',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      dataType: 'string',
      defaultValue: 'string',
      options: 'string',
      variable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2020-09-22 17:08:31
   */
  createTime?: string;
  /**
   * @remarks
   * Template Description
   * 
   * @example
   * remark
   */
  description?: string;
  documentUrl?: string;
  /**
   * @remarks
   * The path to the template schema image file
   * 
   * @example
   * bp-studio-template/sr-U37UD2YQCRJ75X5V.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The name of the template
   * 
   * @example
   * cadt-template
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * XFKR6WYRVS24S07R
   */
  templateId?: string;
  /**
   * @remarks
   * The details of the template variables.
   */
  variables?: GetTemplateResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      documentUrl: 'DocumentUrl',
      imageURL: 'ImageURL',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      documentUrl: 'string',
      imageURL: 'string',
      name: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      variables: { 'type': 'array', 'itemType': GetTemplateResponseBodyDataVariables },
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

export class GetTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the template.
   */
  data?: GetTemplateResponseBodyData;
  /**
   * @remarks
   * The interface returns information
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
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

