// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppVulScanCycleRequest extends $dara.Model {
  /**
   * @remarks
   * The scan cycle for application vulnerabilities.
   * 
   * *   1week
   * *   2weeks
   * *   3days
   * 
   * @example
   * 1week
   */
  cycle?: string;
  static names(): { [key: string]: string } {
    return {
      cycle: 'Cycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

