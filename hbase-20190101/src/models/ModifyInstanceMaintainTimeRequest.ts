// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceMaintainTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance for which you want to modify the O&M window. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1b**6jco89****
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the instance O&M window. Specify the time in the HH:mmZ format in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 06:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the instance O&M window. Specify the time in the HH:mmZ format in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 02:00Z
   */
  maintainStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

