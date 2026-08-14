// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachSceneDefenseObjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  objectType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objects?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      objectType: 'ObjectType',
      objects: 'Objects',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectType: 'string',
      objects: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

