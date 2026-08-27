// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowNodePrototypeV2ResponseBodyDataModel extends $dara.Model {
  /**
   * @remarks
   * The component prototype code.
   * 
   * @example
   * SendWhatsAppMessageNode
   */
  code?: string;
  /**
   * @remarks
   * The component group code.
   * 
   * @example
   * Core
   */
  groupCode?: string;
  /**
   * @remarks
   * The public extension information. This is used by the frontend to display extended information of flow components. The value is a JSON string. The first parameter in the string represents the flow component title. The following section describes the other fields:
   * 
   * - en: the English information of the flow component.
   * 
   * - zh: the Chinese information of the flow component.
   * 
   * - name: the name of the flow component.
   * 
   * - remark: the remarks of the flow component.
   * 
   * - order: the display order of the flow component.
   * 
   * - style: the style of the flow component.
   * 
   * - svg: the icon URL of the flow component.
   * 
   * - icon: a deprecated field.
   * 
   * - bgcolor: the background color of the icon.
   * 
   * @example
   * {\\"i18n\\": {\\"en\\": {\\"name\\": \\"Send a WhatsApp Message\\", \\"remark\\": \\"Send a message with the ability for the user to reply utilizing WhatsApp specific features.\\"}, \\"zh\\": {\\"name\\": \\"Send WhatsApp messages\\", \\"remark\\": \\"Send a message that allows users to reply using specific features of WhatsApp\\"}}, \\"order\\": \\"9000\\", \\"style\\": {\\"svg\\": \\"https://img.alicdn.com/***********************************\\", \\"icon\\": \\"https://img.alicdn.com/***********************************\\", \\"bgcolor\\": \\"blue\\"}}
   */
  publicExtend?: string;
  /**
   * @remarks
   * The component prototype status. Default value: NORMAL.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupCode: 'GroupCode',
      publicExtend: 'PublicExtend',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupCode: 'string',
      publicExtend: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodePrototypeV2ResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of request result data.
   */
  model?: ListFlowNodePrototypeV2ResponseBodyDataModel[];
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: { 'type': 'array', 'itemType': ListFlowNodePrototypeV2ResponseBodyDataModel },
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

export class ListFlowNodePrototypeV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListFlowNodePrototypeV2ResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      data: ListFlowNodePrototypeV2ResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

