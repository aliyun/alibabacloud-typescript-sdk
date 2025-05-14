// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLibraryRequestIndexSettingChunkStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 300
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 20
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 300
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 300
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

