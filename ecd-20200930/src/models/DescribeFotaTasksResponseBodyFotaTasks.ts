// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFotaTasksResponseBodyFotaTasks extends $dara.Model {
  /**
   * @remarks
   * The image version. You can call the [DescribeImages](https://help.aliyun.com/document_detail/188895.html) operation to obtain the value of this parameter.
   * 
   * @example
   * 0.0.1-D-20220513.143129
   */
  appVersion?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * To be hidden.
   */
  fotaProject?: string;
  /**
   * @remarks
   * The number of custom images that can be updated to this version.
   * 
   * @example
   * 1
   */
  pendingCustomImageCount?: number;
  /**
   * @remarks
   * The number of cloud computers whose images can be updated to this version.
   * 
   * @example
   * 1
   */
  pendingDesktopCount?: number;
  /**
   * @remarks
   * The time when the image version available for update was published.
   * 
   * @example
   * 2022-05-31T04:28:48Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The description of the image version available for update.
   * 
   * @example
   * test
   */
  releaseNote?: string;
  /**
   * @remarks
   * The size of the update package. Unit: KB.
   * 
   * @example
   * 568533470
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the image update task is automatically pushed.
   * 
   * Valid values:
   * 
   * *   Running: automatically pushes the image update task.
   * *   Pending: does not automatically push the image update task.
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

