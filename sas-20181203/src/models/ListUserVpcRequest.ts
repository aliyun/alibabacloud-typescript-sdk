// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVpcRequest extends $dara.Model {
  /**
   * @remarks
   * Region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  k8sRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sRegionId: 'K8sRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

