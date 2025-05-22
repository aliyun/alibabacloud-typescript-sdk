// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 868B8926-2E7A-5BE7-9897-E811E994****
   */
  requestId?: string;
  /**
   * @example
   * rg-ckf3cx7isinhk***
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

