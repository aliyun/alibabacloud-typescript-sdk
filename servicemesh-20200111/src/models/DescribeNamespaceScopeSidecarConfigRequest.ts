// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceScopeSidecarConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c7120e75a202d4fd8acb028a86b6a****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

