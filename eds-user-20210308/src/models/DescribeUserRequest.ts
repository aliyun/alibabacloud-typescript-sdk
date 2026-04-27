// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @example
   * alex
   */
  endUserId?: string;
  requireExtraAttributes?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      endUserId: 'EndUserId',
      requireExtraAttributes: 'RequireExtraAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      endUserId: 'string',
      requireExtraAttributes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.requireExtraAttributes)) {
      $dara.Model.validateArray(this.requireExtraAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

