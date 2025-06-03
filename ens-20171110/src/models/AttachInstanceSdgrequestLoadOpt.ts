// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstanceSDGRequestLoadOpt extends $dara.Model {
  blockRwSplit?: boolean;
  blockRwSplitSize?: number;
  cache?: boolean;
  cacheSize?: number;
  static names(): { [key: string]: string } {
    return {
      blockRwSplit: 'BlockRwSplit',
      blockRwSplitSize: 'BlockRwSplitSize',
      cache: 'Cache',
      cacheSize: 'CacheSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRwSplit: 'boolean',
      blockRwSplitSize: 'number',
      cache: 'boolean',
      cacheSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

