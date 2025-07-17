// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassificationTemplatesResponseBodyTemplateList extends $dara.Model {
  /**
   * @remarks
   * The name of the classification template.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the classification template.
   * 
   * @example
   * 3**
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the classification template. Valid values:
   * 
   * *   **INNER**: built-in template
   * *   **USER_DEFINE**: custom template
   * 
   * @example
   * USER_DEFINE
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      remark: 'Remark',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      remark: 'string',
      templateId: 'number',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassificationTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90260530-565C-42B9-A6E8-893481FE6AB6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of templates.
   */
  templateList?: ListClassificationTemplatesResponseBodyTemplateList[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      templateList: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      templateList: { 'type': 'array', 'itemType': ListClassificationTemplatesResponseBodyTemplateList },
    };
  }

  validate() {
    if(Array.isArray(this.templateList)) {
      $dara.Model.validateArray(this.templateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

