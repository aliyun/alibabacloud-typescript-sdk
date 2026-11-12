// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertTypeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The threat type.
   * 
   * @example
   * WEBSHELL
   */
  alertType?: string;
  /**
   * @remarks
   * The threat type category identifier.
   * 
   * @example
   * identity_access
   */
  alertTypeCategory?: string;
  /**
   * @remarks
   * The name of the threat type category in the requested language. This parameter is empty if the translation is missing.
   * 
   * @example
   * Identity and access
   */
  alertTypeCategoryMds?: string;
  /**
   * @remarks
   * The display order of the threat type category.
   * 
   * @example
   * 10
   */
  alertTypeCategoryOrder?: number;
  /**
   * @remarks
   * The Medusa code of the threat type.
   * 
   * @example
   * siem_rule_type_process_abnormal_command
   */
  alertTypeMds?: string;
  /**
   * @remarks
   * The English name of the threat type. This parameter is empty if the translation is missing.
   * 
   * @example
   * Unusual Logon
   */
  alertTypeNameEn?: string;
  /**
   * @remarks
   * The Chinese name of the threat type. This parameter is empty if the translation is missing.
   * 
   * @example
   * Unusual logon
   */
  alertTypeNameZh?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      alertTypeCategory: 'AlertTypeCategory',
      alertTypeCategoryMds: 'AlertTypeCategoryMds',
      alertTypeCategoryOrder: 'AlertTypeCategoryOrder',
      alertTypeMds: 'AlertTypeMds',
      alertTypeNameEn: 'AlertTypeNameEn',
      alertTypeNameZh: 'AlertTypeNameZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      alertTypeCategory: 'string',
      alertTypeCategoryMds: 'string',
      alertTypeCategoryOrder: 'number',
      alertTypeMds: 'string',
      alertTypeNameEn: 'string',
      alertTypeNameZh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertTypeResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertTypeResponseBodyData },
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

