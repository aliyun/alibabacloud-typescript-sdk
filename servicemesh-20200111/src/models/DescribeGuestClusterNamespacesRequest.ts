// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGuestClusterNamespacesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kubernetes cluster that is added to the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c584d805c7bd442b8bac421f9849f****
   */
  guestClusterID?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ce134b0727aa2492db69f6c3880e****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * Specifies whether to return the labels of the namespaces.
   * 
   * @example
   * true
   */
  showNsLabels?: boolean;
  static names(): { [key: string]: string } {
    return {
      guestClusterID: 'GuestClusterID',
      serviceMeshId: 'ServiceMeshId',
      showNsLabels: 'ShowNsLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guestClusterID: 'string',
      serviceMeshId: 'string',
      showNsLabels: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

