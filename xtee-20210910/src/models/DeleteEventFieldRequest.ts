// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventFieldRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_awukck7117
   */
  eventCode?: string;
  /**
   * @remarks
   * Field name
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventCode: 'eventCode',
      fieldName: 'fieldName',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventCode: 'string',
      fieldName: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

