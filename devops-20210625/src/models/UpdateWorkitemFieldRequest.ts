// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkitemFieldRequestUpdateWorkitemPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag
   */
  fieldIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class UpdateWorkitemFieldRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  updateWorkitemPropertyRequest?: UpdateWorkitemFieldRequestUpdateWorkitemPropertyRequest[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9144ef6b72d8exxxxx9e61a4d0
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      updateWorkitemPropertyRequest: 'updateWorkitemPropertyRequest',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateWorkitemPropertyRequest: { 'type': 'array', 'itemType': UpdateWorkitemFieldRequestUpdateWorkitemPropertyRequest },
      workitemIdentifier: 'string',
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

