// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGuestClusterPodsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kubernetes cluster that is added to the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c49ad2169d5a04f2d89dfc4b6bcu****
   */
  guestClusterID?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c78d60f98fa43403ab6e0701b2678****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      guestClusterID: 'GuestClusterID',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guestClusterID: 'string',
      namespace: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

