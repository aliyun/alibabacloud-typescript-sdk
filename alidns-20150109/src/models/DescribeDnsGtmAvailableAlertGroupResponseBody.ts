// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAvailableAlertGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available alert contact groups.
   * 
   * @example
   * [\\"测试报警组\\",\\"研发报警组\\"]
   */
  availableAlertGroup?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAlertGroup: 'AvailableAlertGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAlertGroup: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

