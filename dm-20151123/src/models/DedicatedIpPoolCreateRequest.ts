// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpPoolCreateRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the purchased IP instances. Separate multiple IDs with commas (,). You can obtain the instance IDs from the response of the DedicatedIpNonePoolList operation.
   * 
   * @example
   * xxx,xxx
   */
  buyResourceIds?: string;
  /**
   * @remarks
   * The name of the IP pool. The name must be 1 to 50 characters in length. It can contain letters, digits, underscores (_), and hyphens (-). The name cannot be changed after the IP pool is created.
   * 
   * @example
   * xxx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      buyResourceIds: 'BuyResourceIds',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResourceIds: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

