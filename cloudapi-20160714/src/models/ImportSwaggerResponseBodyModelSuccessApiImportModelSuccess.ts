// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportSwaggerResponseBodyModelSuccessApiImportModelSuccess extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * b2d552ed90ca435b86f7bf8d45414793
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * NewInstance
   */
  modelName?: string;
  /**
   * @remarks
   * The model operation
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
   * d4bcfaec1946e1870d
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

