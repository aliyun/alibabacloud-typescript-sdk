// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sClusterSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC ID. Specify this parameter to query clusters within the VPC. By default, the VPC of the gateway is used.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
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

