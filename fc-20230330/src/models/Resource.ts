// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resource extends $dara.Model {
  /**
   * @remarks
   * The name of the resource type. For a function in Function Compute 3.0, use ALIYUN::FC::FUNCTION. For a service in an earlier version of Function Compute, use ALIYUN::FC::SERVICE.
   * 
   * @example
   * ALIYUN::FC::FUNCTION
   */
  resouceType?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource descriptor.
   * 
   * @example
   * acs:fc:cn-shanghai:****:functions/demo
   */
  resourceArn?: string;
  /**
   * @remarks
   * The tag dictionary.
   */
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      resouceType: 'resouceType',
      resourceArn: 'resourceArn',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resouceType: 'string',
      resourceArn: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

