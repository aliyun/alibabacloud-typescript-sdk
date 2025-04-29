// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportSwaggerResponseBodyModelFailedApiImportModelFailed extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error msg
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 36d4bcfaec1946e1870d90b2d7519710
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * Region
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

