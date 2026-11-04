// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceDeviceGroupsByDeviceResponseBodyDataDeviceGroupList extends $dara.Model {
  /**
   * @remarks
   * The device group ID.
   * 
   * @example
   * TestDeviceGroupId
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The device group name.
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
   * 2020-05-12 17:12:37
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

export class QueryFaceDeviceGroupsByDeviceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of device groups.
   */
  deviceGroupList?: QueryFaceDeviceGroupsByDeviceResponseBodyDataDeviceGroupList[];
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
   * 5
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
      deviceGroupList: { 'type': 'array', 'itemType': QueryFaceDeviceGroupsByDeviceResponseBodyDataDeviceGroupList },
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

export class QueryFaceDeviceGroupsByDeviceResponseBody extends $dara.Model {
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
   * The response data.
   */
  data?: QueryFaceDeviceGroupsByDeviceResponseBodyData;
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
   * Indicates whether the call was successful.
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
      data: QueryFaceDeviceGroupsByDeviceResponseBodyData,
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

