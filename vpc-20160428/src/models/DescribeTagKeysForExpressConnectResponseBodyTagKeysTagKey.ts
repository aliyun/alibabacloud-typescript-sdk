// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeysForExpressConnectResponseBodyTagKeysTagKey extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The type of the resource. The value is set to **PHYSICALCONNECTION**, which indicates an Express Connect circuit.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

