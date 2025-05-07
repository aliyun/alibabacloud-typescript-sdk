// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIngressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the routing rule to be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 87
   */
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

