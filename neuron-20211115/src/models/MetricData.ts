// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricData extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * youngGcCount
   */
  measures?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * appstat.vm
   */
  metric?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1654777095632
   */
  time?: number;
  /**
   * @example
   * rootIp
   */
  type?: string;
  /**
   * @example
   * 192.168.1.1
   */
  typeValue?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      measures: 'measures',
      metric: 'metric',
      time: 'time',
      type: 'type',
      typeValue: 'typeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      measures: 'string',
      metric: 'string',
      time: 'number',
      type: 'string',
      typeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

