// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceMeshResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

