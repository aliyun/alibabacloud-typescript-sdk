// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaCertRequest extends $dara.Model {
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c7894c929677643a5bfe1a732d778a****
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

