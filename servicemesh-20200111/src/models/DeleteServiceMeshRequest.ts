// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceMeshRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the ASM instance. Valid values:
   * 
   * *   `true`: forcibly deletes the ASM instance.
   * *   `false`: does not forcibly delete the ASM instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * A JSON string that can be parsed into a string array. You can use this JSON string to specify the IDs of the resource instances that need to be retained when the ASM instance is deleted.
   * 
   * @example
   * [" lb-bp1fxvl3q8akbj6m*****", "lb-bp1hoxkolggdw0y3*****"]
   */
  retainResources?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      retainResources: 'RetainResources',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      retainResources: 'string',
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

