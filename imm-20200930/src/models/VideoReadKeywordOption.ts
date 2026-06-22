// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoReadKeywordOption extends $dara.Model {
  /**
   * @remarks
   * Specifies the maximum number of keywords to return. The service may return fewer keywords than this limit. If omitted, the service returns all extracted keywords.
   */
  count?: number;
  /**
   * @remarks
   * Specifies whether to extract keywords from the video. Set to `true` to enable keyword extraction. The default is `false`.
   */
  extract?: boolean;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      extract: 'Extract',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      extract: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

