// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRuntimeModelTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The model group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-xxxxxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The list of Agent runtime IDs.
   * 
   * This parameter is required.
   */
  runtimeIds?: string[];
  /**
   * @remarks
   * The Agent runtime type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudDesktop
   */
  runtimeType?: string;
  static names(): { [key: string]: string } {
    return {
      modelTemplateId: 'ModelTemplateId',
      runtimeIds: 'RuntimeIds',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTemplateId: 'string',
      runtimeIds: { 'type': 'array', 'itemType': 'string' },
      runtimeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.runtimeIds)) {
      $dara.Model.validateArray(this.runtimeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

