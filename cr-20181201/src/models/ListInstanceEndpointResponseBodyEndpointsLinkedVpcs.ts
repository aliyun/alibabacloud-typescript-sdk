// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceEndpointResponseBodyEndpointsLinkedVpcs extends $dara.Model {
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * null
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

