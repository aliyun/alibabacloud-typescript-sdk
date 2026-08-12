// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRecordAnalysisResultShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the alert event. (Deprecated)
   * 
   * @example
   * 9b57f0fcf98181df8d8487d1cc91cb8d
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The language of the content. Valid values:
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
   * The unique ID of the alert event. (Deprecated)
   * 
   * @example
   * fc312aa0c32ba8a6147db6221fb1c1ee
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The array of tracing requests.
   */
  uniqueTagListShrink?: string;
  /**
   * @remarks
   * The unique identifier of the asset. (Deprecated)
   * 
   * @example
   * ebde6d4e3e4aba728962eec43a69196e9J7tt7H47Pc
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      aliyunLang: 'AliyunLang',
      uniqueInfo: 'UniqueInfo',
      uniqueTagListShrink: 'UniqueTagList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      aliyunLang: 'string',
      uniqueInfo: 'string',
      uniqueTagListShrink: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

