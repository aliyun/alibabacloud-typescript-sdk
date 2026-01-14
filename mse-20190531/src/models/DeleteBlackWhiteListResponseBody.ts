// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBlackWhiteListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  content?: string;
  /**
   * @example
   * 430
   */
  gatewayId?: number;
  /**
   * @example
   * gw-9cdcf8e4f58144059e73ff4c5ef9****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 2022-08-10 20:22:34
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-08-10 20:22:34
   */
  gmtModified?: string;
  /**
   * @example
   * 120
   */
  id?: number;
  /**
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @example
   * 1
   */
  resourceId?: number;
  /**
   * @example
   * GATEWAY
   */
  resourceType?: string;
  /**
   * @example
   * 1
   */
  status?: boolean;
  /**
   * @example
   * IP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isWhite: 'IsWhite',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isWhite: 'boolean',
      resourceId: 'number',
      resourceType: 'string',
      status: 'boolean',
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

export class DeleteBlackWhiteListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: DeleteBlackWhiteListResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
   */
  requestId?: string;
  /**
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
      code: 'number',
      data: DeleteBlackWhiteListResponseBodyData,
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

