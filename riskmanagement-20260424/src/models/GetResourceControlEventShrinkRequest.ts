// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceControlEventShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language environment.
   * 
   * - Chinese (default): **zh**
   * - English: **en**
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * This parameter is required.
   * 
   * @example
   * 09C-2PpwIzkpx2zG2fuFrAH55CpJaTK
   */
  eventId?: string;
  /**
   * @remarks
   * The list of event IDs.
   */
  eventIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      eventId: 'EventId',
      eventIdListShrink: 'EventIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      eventId: 'string',
      eventIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

