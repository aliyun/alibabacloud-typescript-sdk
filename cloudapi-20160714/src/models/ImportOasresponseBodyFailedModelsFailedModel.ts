// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOASResponseBodyFailedModelsFailedModel extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid Model Definition.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 2c1bc62e19614cc68c6b0b484bc9c5db
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * test
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      groupId: 'string',
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

