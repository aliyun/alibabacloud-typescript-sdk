// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of target instance. You can call [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) to obtain target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1uoihlf82e8****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

