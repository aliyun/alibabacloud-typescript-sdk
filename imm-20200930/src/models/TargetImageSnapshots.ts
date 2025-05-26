// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetImageSnapshots extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  format?: string;
  height?: number;
  interval?: number;
  mode?: string;
  number?: number;
  scaleType?: string;
  startTime?: number;
  threshold?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  URI?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      height: 'Height',
      interval: 'Interval',
      mode: 'Mode',
      number: 'Number',
      scaleType: 'ScaleType',
      startTime: 'StartTime',
      threshold: 'Threshold',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      height: 'number',
      interval: 'number',
      mode: 'string',
      number: 'number',
      scaleType: 'string',
      startTime: 'number',
      threshold: 'number',
      URI: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

