// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsVariableListRequest extends $dara.Model {
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
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_afghcf6411
   */
  eventCodes?: string;
  /**
   * @remarks
   * The filter object.
   * 
   * @example
   * {\\"type\\":\\"EXPRESSION\\",\\"name\\":\\"ex_NgR6nDVD821c\\"}
   */
  filterDTO?: string;
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
   * The applicable scenario code.
   * 
   * This parameter is required.
   * 
   * @example
   * VELOCITY
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      eventCodes: 'eventCodes',
      filterDTO: 'filterDTO',
      regId: 'regId',
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      eventCodes: 'string',
      filterDTO: 'string',
      regId: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

