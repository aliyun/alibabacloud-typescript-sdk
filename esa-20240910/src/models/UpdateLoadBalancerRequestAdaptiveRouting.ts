// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerRequestAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Whether to fallback across pools.
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
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

