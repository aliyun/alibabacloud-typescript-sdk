// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowNodePrototypeV2ResponseBodyDataModel extends $dara.Model {
  /**
   * @remarks
   * The code of the component prototype.
   * 
   * @example
   * SendWhatsAppMessageNode
   */
  code?: string;
  /**
   * @remarks
   * The code of the component group.
   * 
   * @example
   * Core
   */
  groupCode?: string;
  /**
   * @remarks
   * The public extension information. This is a JSON string that contains extension information for the frontend to display the flow component. The fields are described as follows:
   * 
   * - en: The English information about the flow component.
   * 
   * - zh: The Chinese information about the flow component.
   * 
   * - name: The name of the flow component.
   * 
   * - remark: The remarks on the flow component.
   * 
   * - order: The display order of the flow component.
   * 
   * - style: The style of the flow component.
   * 
   * - svg: The URL of the flow component icon.
   * 
   * - icon: This field is deprecated.
   * 
   * - bgcolor: The background color of the icon.
   * 
   * @example
   * {\\"i18n\\": {\\"en\\": {\\"name\\": \\"Send a WhatsApp Message\\", \\"remark\\": \\"Send a message with the ability for the user to reply utilizing WhatsApp specific features.\\"}, \\"zh\\": {\\"name\\": \\"Send WhatsApp messages\\", \\"remark\\": \\"Send a message that allows users to reply using specific features of WhatsApp\\"}}, \\"order\\": \\"9000\\", \\"style\\": {\\"svg\\": \\"https://img.alicdn.com/***********************************\\", \\"icon\\": \\"https://img.alicdn.com/***********************************\\", \\"bgcolor\\": \\"blue\\"}}
   */
  publicExtend?: string;
  /**
   * @remarks
   * The status of the component prototype. The default value is NORMAL.
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
   * A list of the returned data.
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
   * Details about the access denial.
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
   * The ID of the request.
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: The call was successful.
   * 
   * - false: The call failed.
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

