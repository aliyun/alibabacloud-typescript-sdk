// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFotaTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image update task. You can call the [DescribeFotaTasks](https://help.aliyun.com/document_detail/437001.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * aot-c4khwrp9ocml4****
   */
  taskUid?: string;
  /**
   * @remarks
   * Specifies whether to automatically push the image update task.
   * 
   * Valid values:
   * 
   * *   Running: automatically pushes the image update task.
   * *   Pending: does not automatically push the image update task.
   * 
   * @example
   * Pending
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskUid: 'TaskUid',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskUid: 'string',
      userStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

