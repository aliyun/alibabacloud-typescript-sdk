// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentPhoneNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Phone number. Specify Number to directly query the corresponding phone number.
   * 
   * @example
   * 139xxxxxxxxx
   */
  number?: string;
  /**
   * @remarks
   * Page number. Default Value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, indicating the number of records displayed per page. Default Value is 50, with a maximum value of 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Status of the target phone number to query.
   * 
   * - 1: "Activation in progress".
   * 
   * - 2: "Normal".
   * 
   * - 3: "Deactivation in progress".
   * 
   * - 4: "Deactivated".
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

