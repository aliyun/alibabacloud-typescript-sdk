// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceControlEventRequest extends $dara.Model {
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
  eventIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      eventId: 'EventId',
      eventIdList: 'EventIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      eventId: 'string',
      eventIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eventIdList)) {
      $dara.Model.validateArray(this.eventIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

