// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HyperNodeSchedulingConfig extends $dara.Model {
  /**
   * @remarks
   * The minimum number of available instances required when the role participates in HyperNode scheduling. The value must be greater than 0.
   * 
   * @example
   * 1
   */
  minAvailable?: number;
  /**
   * @remarks
   * The quality policy. Currently, only AlwaysRequire is supported.
   * 
   * @example
   * AlwaysRequire
   */
  qualityPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      minAvailable: 'MinAvailable',
      qualityPolicy: 'QualityPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minAvailable: 'number',
      qualityPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

