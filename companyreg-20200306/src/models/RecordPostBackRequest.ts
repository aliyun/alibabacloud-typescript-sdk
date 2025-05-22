// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecordPostBackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P111111111111
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.zhangsan
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactor?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp_produce
   */
  entityKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      contactor: 'contactor',
      content: 'content',
      entityKey: 'entityKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      contactor: 'string',
      content: 'string',
      entityKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

