// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceControlEventShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The alert event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 09C-2PpwIzkpx2zG2fuFrAH55CpJaTK
   */
  eventId?: string;
  /**
   * @remarks
   * The list of specified event IDs.
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

