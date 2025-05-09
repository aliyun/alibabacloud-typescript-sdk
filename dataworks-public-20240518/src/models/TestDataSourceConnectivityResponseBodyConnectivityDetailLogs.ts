// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestDataSourceConnectivityResponseBodyConnectivityDetailLogs extends $dara.Model {
  /**
   * @remarks
   * The code of the test item.
   * 
   * @example
   * validate_input_parameters
   */
  code?: string;
  /**
   * @remarks
   * The end time of a step.
   * 
   * @example
   * 1730217604002
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the step.
   */
  message?: string;
  /**
   * @remarks
   * The start time of a step.
   * 
   * @example
   * 1730217600001
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      message: 'Message',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'number',
      message: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

