// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemEstimateRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1316458xxxxx41068
   */
  recordUserIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21
   */
  spentTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9144ef6b72d8exxxxx9e61a4d0
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1e9903d8b3f1xxxxxf9286ef5
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      recordUserIdentifier: 'recordUserIdentifier',
      spentTime: 'spentTime',
      type: 'type',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      recordUserIdentifier: 'string',
      spentTime: 'string',
      type: 'string',
      workitemIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

