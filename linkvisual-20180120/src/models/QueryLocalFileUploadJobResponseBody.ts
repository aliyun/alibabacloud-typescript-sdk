// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLocalFileUploadJobResponseBodyDataResultListFileList extends $dara.Model {
  /**
   * @remarks
   * The end time of the video recording file.
   * 
   * @example
   * 1634746054
   */
  fileEndTime?: number;
  /**
   * @remarks
   * The name of the video recording file.
   * 
   * @example
   * video1
   */
  fileName?: string;
  /**
   * @remarks
   * The start time of the video recording file.
   * 
   * @example
   * 1634747054
   */
  fileStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      fileEndTime: 'FileEndTime',
      fileName: 'FileName',
      fileStartTime: 'FileStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileEndTime: 'number',
      fileName: 'string',
      fileStartTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobResponseBodyDataResultList extends $dara.Model {
  /**
   * @remarks
   * The status code of the video recording upload task. Valid values:
   * 
   * - 200: Normal.
   * - 9201: The device is offline. Bring the device online and try again.
   * - 9409: No cloud storage quota is available. Check the cloud storage quota and try again.
   * - 9417: A device, network, or other exception occurred. Try again, or check the device and network status.
   * - 9435: The video recording file does not exist. Make sure that the video recording file is stored locally on the video device and try again.
   * 
   * @example
   * 9201
   */
  code?: number;
  /**
   * @remarks
   * The DeviceName of the video device.
   * 
   * @example
   * gb_hik_IPC
   */
  deviceName?: string;
  /**
   * @remarks
   * The list of video recording files.
   */
  fileList?: QueryLocalFileUploadJobResponseBodyDataResultListFileList[];
  /**
   * @remarks
   * The ID of the video device. The ID is issued by IoT Platform and uniquely identifies the device.
   * 
   * @example
   * IQ9mO4tvMnAj****QUdcg2n400
   */
  iotId?: string;
  /**
   * @remarks
   * The ProductKey of the product to which the video device belongs.
   * 
   * @example
   * g2****Q6ggK
   */
  productKey?: string;
  /**
   * @remarks
   * The end time of the video recording upload task.
   * 
   * @example
   * 1634746054
   */
  slotEndTime?: number;
  /**
   * @remarks
   * The start time of the video recording upload task.
   * 
   * @example
   * 1634745754
   */
  slotStartTime?: number;
  /**
   * @remarks
   * The execution status of the video recording upload task within the time period specified by **SlotStartTime** and **SlotEndTime**. Valid values:
   * - 0: The task is being initialized.
   * - 1: The task is running.
   * - 2: The task is completed.
   * - 3: An exception occurred during task execution.
   * - 4: The task is manually terminated.
   * 
   * @example
   * 3
   */
  slotStatus?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deviceName: 'DeviceName',
      fileList: 'FileList',
      iotId: 'IotId',
      productKey: 'ProductKey',
      slotEndTime: 'SlotEndTime',
      slotStartTime: 'SlotStartTime',
      slotStatus: 'SlotStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      deviceName: 'string',
      fileList: { 'type': 'array', 'itemType': QueryLocalFileUploadJobResponseBodyDataResultListFileList },
      iotId: 'string',
      productKey: 'string',
      slotEndTime: 'number',
      slotStartTime: 'number',
      slotStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task list.
   */
  resultList?: QueryLocalFileUploadJobResponseBodyDataResultList[];
  /**
   * @remarks
   * The status of the video recording upload task. Valid values:
   * 
   * - 0: The task is being initialized.
   * - 1: The task is running.
   * - 2: The task is completed.
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      resultList: 'ResultList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultList: { 'type': 'array', 'itemType': QueryLocalFileUploadJobResponseBodyDataResultList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code:
   * 
   * - **200**: The call is successful.
   * - Other values: An error occurred. For more information about error codes, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: QueryLocalFileUploadJobResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * tenant auth error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 449ECE75-A36A-4ACE-B253-147C78C440C5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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
      data: QueryLocalFileUploadJobResponseBodyData,
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

