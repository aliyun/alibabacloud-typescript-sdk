// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeColdStorageSizeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HBase instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp169l540vc6c****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cold storage capacity after the change. Unit: GB. Valid values: **800** to **1000000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 900
   */
  coldStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coldStorageSize: 'ColdStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coldStorageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

