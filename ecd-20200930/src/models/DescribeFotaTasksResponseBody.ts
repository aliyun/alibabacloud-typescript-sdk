// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFotaTasksResponseBodyFotaTasks extends $dara.Model {
  /**
   * @remarks
   * The image version. You can call [DescribeImages](https://help.aliyun.com/document_detail/188895.html) to obtain this parameter.
   * 
   * @example
   * 0.0.1-D-20220513.143129
   */
  appVersion?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * To be hidden.
   */
  fotaProject?: string;
  /**
   * @remarks
   * The number of custom images that can be upgraded to this version.
   * 
   * @example
   * 1
   */
  pendingCustomImageCount?: number;
  /**
   * @remarks
   * The number of cloud desktops that can be upgraded to this version.
   * 
   * @example
   * 1
   */
  pendingDesktopCount?: number;
  /**
   * @remarks
   * The publish time of the upgrade version.
   * 
   * @example
   * 2022-05-31T04:28:48Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The upgrade version description.
   * 
   * @example
   * test
   */
  releaseNote?: string;
  /**
   * @remarks
   * The size of the upgrade package. Unit: KB.
   * 
   * @example
   * 568533470
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the image upgrade task is automatically pushed.
   * 
   * @example
   * valid
   */
  status?: string;
  /**
   * @remarks
   * The ID of the image upgrade task.
   * 
   * @example
   * aot-c4khwrp9ocml4****
   */
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      fotaProject: 'FotaProject',
      pendingCustomImageCount: 'PendingCustomImageCount',
      pendingDesktopCount: 'PendingDesktopCount',
      publishTime: 'PublishTime',
      releaseNote: 'ReleaseNote',
      size: 'Size',
      status: 'Status',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      fotaProject: 'string',
      pendingCustomImageCount: 'number',
      pendingDesktopCount: 'number',
      publishTime: 'string',
      releaseNote: 'string',
      size: 'number',
      status: 'string',
      taskUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation result. A value of `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The image upgrade task information.
   */
  fotaTasks?: DescribeFotaTasksResponseBodyFotaTasks[];
  /**
   * @remarks
   * The error message. This parameter is not returned if Code is `success`.
   * 
   * @example
   * The parameter is not specified.
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that no more results exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fotaTasks: 'FotaTasks',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fotaTasks: { 'type': 'array', 'itemType': DescribeFotaTasksResponseBodyFotaTasks },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fotaTasks)) {
      $dara.Model.validateArray(this.fotaTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

