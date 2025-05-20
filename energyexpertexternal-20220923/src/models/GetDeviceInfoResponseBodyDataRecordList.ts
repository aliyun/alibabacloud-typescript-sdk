// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceInfoResponseBodyDataRecordList extends $dara.Model {
  /**
   * @remarks
   * The device identifier.
   * 
   * @example
   * Ia
   */
  identifier?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * Phase A current
   */
  paramName?: string;
  /**
   * @remarks
   * The date on which the statistics were collected.
   * 
   * @example
   * 2022-07-26 00:00:00
   */
  statisticsDate?: string;
  /**
   * @remarks
   * The type of the measuring point.
   * 
   * @example
   * DOUBLE
   */
  type?: string;
  /**
   * @remarks
   * The unit of the parameter value.
   * 
   * @example
   * A
   */
  unit?: string;
  /**
   * @remarks
   * The value of the measuring point.
   * 
   * @example
   * 20.00
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
      paramName: 'paramName',
      statisticsDate: 'statisticsDate',
      type: 'type',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      paramName: 'string',
      statisticsDate: 'string',
      type: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

