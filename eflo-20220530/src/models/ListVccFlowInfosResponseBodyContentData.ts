// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccFlowInfosResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The direction.
   * 
   * @example
   * OUT
   */
  direction?: string;
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * @example
   * passBytesRate
   */
  metricName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Time
   * 
   * @example
   * 1689749749000
   */
  timestamp?: number;
  /**
   * @remarks
   * Value
   * 
   * @example
   * 123
   */
  value?: number;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * @example
   * vcc-cn-zvp2w******
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      metricName: 'MetricName',
      regionId: 'RegionId',
      timestamp: 'Timestamp',
      value: 'Value',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      metricName: 'string',
      regionId: 'string',
      timestamp: 'number',
      value: 'number',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

