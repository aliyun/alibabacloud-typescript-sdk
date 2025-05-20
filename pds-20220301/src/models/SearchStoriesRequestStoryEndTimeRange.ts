// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchStoriesRequestStoryEndTimeRange extends $dara.Model {
  /**
   * @example
   * 2022-12-31T00:00:00+08:00
   */
  end?: string;
  /**
   * @example
   * 2016-12-31T00:00:00+08:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

