// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOASResponseBodySuccessModelsSuccessModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * feaccf67040643bcbdedb253e59eb527
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
  /**
   * @remarks
   * The operation of the model. Valid values: CREATE and MODIFY.
   * 
   * @example
   * CREATE
   */
  modelOperation?: string;
  /**
   * @remarks
   * The UID of the model.
   * 
   * @example
   * 1r4efwee19614cc68c6b0b484bc9c5dbs
   */
  modelUid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelName: 'ModelName',
      modelOperation: 'ModelOperation',
      modelUid: 'ModelUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelName: 'string',
      modelOperation: 'string',
      modelUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

