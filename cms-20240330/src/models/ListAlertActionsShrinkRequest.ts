// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the action integration.
   */
  alertActionIdsShrink?: string;
  /**
   * @remarks
   * Name of the action integration.
   * 
   * @example
   * testName
   */
  alertActionName?: string;
  /**
   * @remarks
   * Page number. Default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. Default is 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Type of the action integration.
   * 
   * @example
   * FC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIdsShrink: 'alertActionIds',
      alertActionName: 'alertActionName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIdsShrink: 'string',
      alertActionName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

