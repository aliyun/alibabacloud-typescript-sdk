// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpPoolCreateRequest extends $dara.Model {
  /**
   * @remarks
   * Purchased IP instance IDs, separated by commas; derived from the IP purchase instance IDs returned by the DedicatedIpNonePoolList interface.
   * 
   * @example
   * xxx,xxx
   */
  buyResourceIds?: string;
  /**
   * @remarks
   * IP pool name;
   * Length should be 1-50 characters, allowing English letters, numbers, _, and -. The name cannot be modified after the IP pool is created.
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

