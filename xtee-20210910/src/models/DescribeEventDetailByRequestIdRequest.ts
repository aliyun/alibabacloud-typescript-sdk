// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventDetailByRequestIdRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_azywkh7523
   */
  eventCode?: string;
  /**
   * @remarks
   * The event execution time.
   * 
   * @example
   * 1752571330000
   */
  eventTime?: number;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * BD6B08EC-1B44-5378-8838-C76A36415C55
   */
  sRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventCode: 'eventCode',
      eventTime: 'eventTime',
      regId: 'regId',
      sRequestId: 'sRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventCode: 'string',
      eventTime: 'number',
      regId: 'string',
      sRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

