// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeviceServiceResponseBodyAppMetaData } from "./DescribeDeviceServiceResponseBodyAppMetaData";
import { DescribeDeviceServiceResponseBodyAppStatus } from "./DescribeDeviceServiceResponseBodyAppStatus";
import { DescribeDeviceServiceResponseBodyResourceDetailInfos } from "./DescribeDeviceServiceResponseBodyResourceDetailInfos";
import { DescribeDeviceServiceResponseBodyResourceInfos } from "./DescribeDeviceServiceResponseBodyResourceInfos";


export class DescribeDeviceServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic properties of the application.
   */
  appMetaData?: DescribeDeviceServiceResponseBodyAppMetaData;
  /**
   * @remarks
   * The status information of the application.
   */
  appStatus?: DescribeDeviceServiceResponseBodyAppStatus;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3A535110-3EE3-5EC5-B1ED-10B7067A1FC8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the devices.
   */
  resourceDetailInfos?: DescribeDeviceServiceResponseBodyResourceDetailInfos[];
  /**
   * @remarks
   * The information about the instances.
   */
  resourceInfos?: DescribeDeviceServiceResponseBodyResourceInfos[];
  static names(): { [key: string]: string } {
    return {
      appMetaData: 'AppMetaData',
      appStatus: 'AppStatus',
      requestId: 'RequestId',
      resourceDetailInfos: 'ResourceDetailInfos',
      resourceInfos: 'ResourceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appMetaData: DescribeDeviceServiceResponseBodyAppMetaData,
      appStatus: DescribeDeviceServiceResponseBodyAppStatus,
      requestId: 'string',
      resourceDetailInfos: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceDetailInfos },
      resourceInfos: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfos },
    };
  }

  validate() {
    if(this.appMetaData && typeof (this.appMetaData as any).validate === 'function') {
      (this.appMetaData as any).validate();
    }
    if(this.appStatus && typeof (this.appStatus as any).validate === 'function') {
      (this.appStatus as any).validate();
    }
    if(Array.isArray(this.resourceDetailInfos)) {
      $dara.Model.validateArray(this.resourceDetailInfos);
    }
    if(Array.isArray(this.resourceInfos)) {
      $dara.Model.validateArray(this.resourceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

