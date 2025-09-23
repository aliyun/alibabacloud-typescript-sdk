// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  eip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3289457398
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3289457324
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      endTime: 'EndTime',
      interval: 'Interval',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      endTime: 'number',
      interval: 'number',
      resourceGroupId: 'string',
      sourceIp: 'string',
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

