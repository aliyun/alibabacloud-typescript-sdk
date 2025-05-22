// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMeasureReadyFlagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.bookkeeping
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d
   */
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634784240000
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  readyFlag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634969692175
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      dataType: 'DataType',
      endTime: 'EndTime',
      readyFlag: 'ReadyFlag',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      dataType: 'string',
      endTime: 'string',
      readyFlag: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

