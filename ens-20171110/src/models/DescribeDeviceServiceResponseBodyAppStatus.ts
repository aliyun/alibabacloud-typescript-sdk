// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceServiceResponseBodyAppStatus extends $dara.Model {
  /**
   * @remarks
   * The status of the application. The value is of the enumeration type. Valid values:
   * 
   * Three intermediate states:
   * 
   * *   CREATING
   * *   UPDATING
   * *   DELETING
   * 
   * Four final states:
   * 
   * *   CREATE_FAILED
   * *   UPDATE_FAILED
   * *   DELETE_FAILED
   * *   RUNNING
   * 
   * @example
   * CREATING
   */
  phase?: string;
  /**
   * @remarks
   * The description of the application status.
   * 
   * @example
   * Creating in progress
   */
  statusDescrip?: string;
  /**
   * @remarks
   * The time when the status was last updated.
   * 
   * @example
   * 2021-01-26T05:04Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

