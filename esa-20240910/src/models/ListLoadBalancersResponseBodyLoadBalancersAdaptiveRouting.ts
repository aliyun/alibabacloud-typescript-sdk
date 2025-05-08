// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersResponseBodyLoadBalancersAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Whether to fail over across pools.
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  failoverAcrossPools?: boolean;
  static names(): { [key: string]: string } {
    return {
      failoverAcrossPools: 'FailoverAcrossPools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverAcrossPools: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

