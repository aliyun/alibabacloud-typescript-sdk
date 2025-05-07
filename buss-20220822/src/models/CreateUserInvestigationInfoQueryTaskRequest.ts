// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserInvestigationInfoQueryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  employeeId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ossFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'dataType',
      employeeId: 'employeeId',
      endTime: 'endTime',
      ossFileName: 'ossFileName',
      startTime: 'startTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      employeeId: 'string',
      endTime: 'number',
      ossFileName: 'string',
      startTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

