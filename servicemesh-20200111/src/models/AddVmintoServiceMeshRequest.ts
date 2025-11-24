// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVMIntoServiceMeshRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2ze90ts4e7dj3650****
   */
  ecsId?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccb37ff104caf419fbf48fb38e6f3****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsId: 'EcsId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsId: 'string',
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

