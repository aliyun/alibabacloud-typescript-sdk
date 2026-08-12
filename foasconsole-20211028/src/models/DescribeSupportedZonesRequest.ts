// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupportedZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The processor architecture.
   * 
   * @example
   * X86
   */
  architectureType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

