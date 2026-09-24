// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestLargeModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * {\\"code\\":\\"InvalidApiKey\\",\\"message\\":\\"Invalid API-key provided.\\",\\"request_id\\":\\"dd14065e-3dd5-90a1-b8ee-d6c80891defe\\"}
   */
  errorMsg?: string;
  /**
   * @remarks
   * The model version number.
   * 
   * @example
   * 1
   */
  modelVersion?: string;
  /**
   * @remarks
   * The output result.
   * 
   * @example
   * ⌈Hello! I am the AI assistant on the Alibaba Cloud website.\\n\\nYour input seems incomplete. What specific information about Alibaba Cloud would you like to know?\\n\\nFor example:\\n*   What are the core products of Alibaba Cloud (such as ECS, RDS, OSS, etc.)?\\n*   How do I purchase or renew a cloud server?\\n*   What security protection capabilities does Alibaba Cloud offer?\\n*   How do I get technical support or view documentation?\\n\\nFeel free to ask your specific questions, and I will answer them for you!⌋
   */
  output?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      modelVersion: 'ModelVersion',
      output: 'Output',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      modelVersion: 'string',
      output: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestLargeModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication error details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code. A value of OK indicates that the call was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data list.
   */
  data?: TestLargeModelResponseBodyData[];
  /**
   * @remarks
   * The status code description.
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
   * F2051E18-FF3F-5C08-8D24-6F150D2AF757
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * false
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
      code: 'string',
      data: { 'type': 'array', 'itemType': TestLargeModelResponseBodyData },
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

