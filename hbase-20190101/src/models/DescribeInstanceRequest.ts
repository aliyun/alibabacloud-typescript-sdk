// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
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

