// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotSourcesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 热榜源描述
   */
  description?: string;
  /**
   * @example
   * true
   */
  show?: boolean;
  /**
   * @example
   * 86
   */
  sort?: number;
  /**
   * @example
   * 热榜源标识
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      show: 'Show',
      sort: 'Sort',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      show: 'boolean',
      sort: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

