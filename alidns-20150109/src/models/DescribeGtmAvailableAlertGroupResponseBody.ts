// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAvailableAlertGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available alert contact groups.
   * 
   * @example
   * [\\"研发组\\",\\"GTM测试组\\"]
   */
  availableAlertGroup?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
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

