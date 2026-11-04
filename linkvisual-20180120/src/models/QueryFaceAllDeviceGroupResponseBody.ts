// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceAllDeviceGroupResponseBodyDataDeviceGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the device group.
   * 
   * @example
   * wy250q0m
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The name of the device group.
   * 
   * @example
   * TestDeviceGroupName
   */
  deviceGroupName?: string;
  /**
   * @remarks
   * The time when the device group was modified.
   * 
   * @example
   * 2020-05-12 17:19:29
   */
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      deviceGroupName: 'DeviceGroupName',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      deviceGroupName: 'string',
      modifiedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of device groups.
   */
  deviceGroupList?: QueryFaceAllDeviceGroupResponseBodyDataDeviceGroupList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of device groups.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      deviceGroupList: 'DeviceGroupList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupList: { 'type': 'array', 'itemType': QueryFaceAllDeviceGroupResponseBodyDataDeviceGroupList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceGroupList)) {
      $dara.Model.validateArray(this.deviceGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the API operation.
   */
  data?: QueryFaceAllDeviceGroupResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceAllDeviceGroupResponseBodyData,
      errorMessage: 'string',
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

