// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourceInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:fc:cn-shanghai:xxx:functions/f1
   */
  resourceArn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'resourceArn',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

