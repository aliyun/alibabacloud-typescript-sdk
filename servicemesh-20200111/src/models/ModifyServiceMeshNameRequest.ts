// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyServiceMeshNameRequest extends $dara.Model {
  /**
   * @remarks
   * The new name of the ASM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mesh
   */
  name?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cdd30a90a7cea480ebcc7ff****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

