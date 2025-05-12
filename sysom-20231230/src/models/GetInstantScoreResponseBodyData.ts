// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstantScoreResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  error?: number;
  /**
   * @example
   * 100
   */
  latency?: number;
  /**
   * @example
   * 100
   */
  load?: number;
  /**
   * @example
   * 100
   */
  saturation?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      latency: 'latency',
      load: 'load',
      saturation: 'saturation',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      latency: 'number',
      load: 'number',
      saturation: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

