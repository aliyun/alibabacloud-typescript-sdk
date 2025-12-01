// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCustomEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Service UID.
   * 
   * @example
   * 1601097845544644
   */
  customerId?: string;
  /**
   * @remarks
   * Customer name.
   * 
   * @example
   * Tianjin Ruipengsheng Technology Development Co., Ltd
   */
  customerName?: string;
  /**
   * @remarks
   * Alert ID.
   * 
   * @example
   * c0dc71d1-8a1d-4043-9767-f6c420e34901-81bd
   */
  eventId?: string;
  /**
   * @remarks
   * Alert type.
   * 
   * @example
   * SUSP_CUSTOM_WAF
   */
  eventType?: string;
  /**
   * @remarks
   * Work order ID.
   * 
   * @example
   * 1914348
   */
  id?: number;
  /**
   * @remarks
   * Owner ID.
   * 
   * @example
   * 352675
   */
  ownerId?: string;
  /**
   * @remarks
   * Owner name.
   * 
   * @example
   * Le Ya
   */
  ownerName?: string;
  /**
   * @remarks
   * Work order name.
   * 
   * @example
   * 22端口禁止任意IP访问
   */
  workTaskName?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      customerName: 'CustomerName',
      eventId: 'EventId',
      eventType: 'EventType',
      id: 'Id',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      workTaskName: 'WorkTaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      customerName: 'string',
      eventId: 'string',
      eventType: 'string',
      id: 'number',
      ownerId: 'string',
      ownerName: 'string',
      workTaskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Interface return data.
   */
  data?: SendCustomEventResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message. When the request is successful, it returns a success message; when the request fails, it returns the reason for the failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 606EB377-155D-5AEB-AC4F-F013444A4C45
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * 
   * - true: Call succeeded.
   * 
   * - false: Call failed.
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
      data: SendCustomEventResponseBodyData,
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

