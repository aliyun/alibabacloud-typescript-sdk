// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEssOptJobShrinkRequest extends $dara.Model {
  businessKey?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  elecPriceShrink?: string;
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  genPriceShrink?: string;
  locationShrink?: string;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-02-12
   */
  runDate?: string;
  systemDataShrink?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * LOAD_ESS_SOLAR
   */
  topoType?: string;
  static names(): { [key: string]: string } {
    return {
      businessKey: 'BusinessKey',
      duration: 'Duration',
      elecPriceShrink: 'ElecPrice',
      freq: 'Freq',
      genPriceShrink: 'GenPrice',
      locationShrink: 'Location',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemDataShrink: 'SystemData',
      timeZone: 'TimeZone',
      topoType: 'TopoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessKey: 'string',
      duration: 'number',
      elecPriceShrink: 'string',
      freq: 'string',
      genPriceShrink: 'string',
      locationShrink: 'string',
      modelVersion: 'string',
      runDate: 'string',
      systemDataShrink: 'string',
      timeZone: 'string',
      topoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

