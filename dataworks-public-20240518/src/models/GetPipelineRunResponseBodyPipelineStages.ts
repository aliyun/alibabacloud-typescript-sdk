// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunResponseBodyPipelineStages extends $dara.Model {
  /**
   * @remarks
   * The code of the stage.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * The description of the stage.
   * 
   * @example
   * Phase description
   */
  description?: string;
  /**
   * @remarks
   * The details of the stage.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The error message returned for the stage.
   * 
   * @example
   * Exception information XXX
   */
  message?: string;
  /**
   * @remarks
   * The name of the stage.
   * 
   * @example
   * Publish package build
   */
  name?: string;
  /**
   * @remarks
   * The status of the stage.
   * 
   * Valid values:
   * 
   * *   Init
   * *   Running
   * *   Success
   * *   Fail
   * *   Termination
   * *   Cancel
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The step number of the stage.
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * The type of the stage.
   * 
   * Valid values:
   * 
   * *   Deploy
   * *   Check
   * *   Offline
   * *   Build
   * *   Delete
   * 
   * @example
   * Check
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      detail: 'Detail',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      step: 'Step',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      status: 'string',
      step: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

