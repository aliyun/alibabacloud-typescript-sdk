// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeDownloadRequest extends $dara.Model {
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values: zh: Chinese. en: English. Default value: en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Job IDs.
   * 
   * @example
   * 1,2
   */
  subTaskIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      subTaskIds: 'SubTaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      subTaskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

