// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resource extends $dara.Model {
  /**
   * @example
   * ALIYUN::FC::FUNCTION
   */
  resouceType?: string;
  /**
   * @example
   * acs:fc:cn-shanghai:****:functions/demo
   */
  resourceArn?: string;
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

