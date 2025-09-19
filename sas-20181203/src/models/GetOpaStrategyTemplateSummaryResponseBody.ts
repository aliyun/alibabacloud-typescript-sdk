// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpaStrategyTemplateSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of times that the template is used.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Custom defense configuration
   */
  description?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Blank template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      description: 'Description',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      description: 'string',
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

export class GetOpaStrategyTemplateSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The usage statistics about the templates provided for rules of the at-risk image blocking type.
   */
  data?: GetOpaStrategyTemplateSummaryResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54572138-3390-5774-B71D-799DC8C2161B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOpaStrategyTemplateSummaryResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

