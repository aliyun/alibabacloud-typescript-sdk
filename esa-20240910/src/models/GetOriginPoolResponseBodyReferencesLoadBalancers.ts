// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginPoolResponseBodyReferencesLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * ID of the load balancer.
   * 
   * @example
   * 99874066052****
   */
  id?: number;
  /**
   * @remarks
   * Name of the load balancer.
   * 
   * @example
   * lb1.example.com
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

