// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  actualTime?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1646323200000
   */
  gmtEnd?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1667205617061
   */
  gmtStart?: string;
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
   * deafe5f33xxxxx6a259d8dafd
   */
  type?: string;
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
      actualTime: 'actualTime',
      description: 'description',
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      recordUserIdentifier: 'recordUserIdentifier',
      type: 'type',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'string',
      description: 'string',
      gmtEnd: 'string',
      gmtStart: 'string',
      recordUserIdentifier: 'string',
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

