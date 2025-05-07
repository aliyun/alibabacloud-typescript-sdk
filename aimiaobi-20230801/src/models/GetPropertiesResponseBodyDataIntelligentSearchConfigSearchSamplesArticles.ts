// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles extends $dara.Model {
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * false
   */
  stared?: boolean;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * http://xxx.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      stared: 'Stared',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      stared: 'boolean',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

