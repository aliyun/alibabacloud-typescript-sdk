// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableZonesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time, in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The update time, in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-qingdao-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * ha-cn-t9b30w902vm_qrs
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      updateTime: 'updateTime',
      zoneId: 'zoneId',
      zoneName: 'zoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListAvailableZonesResponseBodyData[];
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * InstanceId
   */
  dynamicMessage?: string;
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
   * The error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAvailableZonesResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
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

