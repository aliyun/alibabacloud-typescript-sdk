// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClipsBuildInResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of resources.
   */
  resourceList?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * 0 - 音色
   * 1- 背景音
   */
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceList: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClipsBuildInResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetClipsBuildInResourceResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true means the request was successful. A value of false means the request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetClipsBuildInResourceResponseBodyData,
      httpStatusCode: 'number',
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

