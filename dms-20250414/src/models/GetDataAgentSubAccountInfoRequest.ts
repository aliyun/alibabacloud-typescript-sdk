// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentSubAccountInfoRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @example
   * 20282*****7591
   */
  subAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      dmsUnit: 'DmsUnit',
      subAccountId: 'SubAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dmsUnit: 'string',
      subAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

