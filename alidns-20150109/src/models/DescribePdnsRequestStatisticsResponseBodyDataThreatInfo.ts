// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsRequestStatisticsResponseBodyDataThreatInfo extends $dara.Model {
  /**
   * @remarks
   * The current version does not support this parameter.
   * 
   * @example
   * -
   */
  threatLevel?: string;
  /**
   * @remarks
   * The current version does not support this parameter.
   * 
   * @example
   * -
   */
  threatType?: string;
  static names(): { [key: string]: string } {
    return {
      threatLevel: 'ThreatLevel',
      threatType: 'ThreatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threatLevel: 'string',
      threatType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

