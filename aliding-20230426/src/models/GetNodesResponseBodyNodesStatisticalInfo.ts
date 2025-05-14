// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodesResponseBodyNodesStatisticalInfo extends $dara.Model {
  /**
   * @example
   * 123
   */
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

