// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTestCaseRequestUpdateWorkitemPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc.type
   */
  fieldIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0a032xx28107xxxx53e87a9
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdentifier: 'fieldIdentifier',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdentifier: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTestCaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  updateWorkitemPropertyRequest?: UpdateTestCaseRequestUpdateWorkitemPropertyRequest[];
  static names(): { [key: string]: string } {
    return {
      updateWorkitemPropertyRequest: 'updateWorkitemPropertyRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateWorkitemPropertyRequest: { 'type': 'array', 'itemType': UpdateTestCaseRequestUpdateWorkitemPropertyRequest },
    };
  }

  validate() {
    if(Array.isArray(this.updateWorkitemPropertyRequest)) {
      $dara.Model.validateArray(this.updateWorkitemPropertyRequest);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

