// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimulationPreditInfoRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * de_azywkh7523
   */
  eventCode?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The policy list.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"100244\\",\\"100245\\"]
   */
  rulesStr?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventCode: 'eventCode',
      regId: 'regId',
      rulesStr: 'rulesStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventCode: 'string',
      regId: 'string',
      rulesStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

