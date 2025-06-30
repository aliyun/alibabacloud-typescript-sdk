// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncEcsHostTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * pvtz-test-id-2989149d628c5****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

