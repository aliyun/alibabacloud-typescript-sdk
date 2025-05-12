// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceMirrorRequest extends $dara.Model {
  /**
   * @remarks
   * The percentage of traffic that you want to mirror. Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The service instances.
   */
  target?: string[];
  static names(): { [key: string]: string } {
    return {
      ratio: 'Ratio',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'number',
      target: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

