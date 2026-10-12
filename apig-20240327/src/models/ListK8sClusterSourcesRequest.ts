// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sClusterSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC ID used to query clusters within the specified VPC. If this parameter is not specified, the VPC of the gateway is used.
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

