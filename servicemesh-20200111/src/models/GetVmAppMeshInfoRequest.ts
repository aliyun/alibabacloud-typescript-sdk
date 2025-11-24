// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVmAppMeshInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ce51a7de4a5144db88a864****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

