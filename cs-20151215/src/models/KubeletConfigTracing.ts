// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KubeletConfigTracing extends $dara.Model {
  /**
   * @example
   * localhost:4317
   */
  endpoint?: string;
  samplingRatePerMillion?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      samplingRatePerMillion: 'samplingRatePerMillion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      samplingRatePerMillion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

