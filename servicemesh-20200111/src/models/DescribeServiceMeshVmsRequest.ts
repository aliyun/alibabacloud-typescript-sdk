// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshVMsRequest extends $dara.Model {
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccb37ff104caf419fbf48fb38e6f****
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

