// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCensRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * @example
   * ce134b0727aa2492db69f6c3880e1****
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

