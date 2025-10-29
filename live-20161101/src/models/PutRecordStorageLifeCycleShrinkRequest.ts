// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutRecordStorageLifeCycleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * stream-xxx
   */
  streamIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1095days
   */
  tag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1758621407
   */
  unixTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      streamIdsShrink: 'StreamIds',
      tag: 'Tag',
      unixTimestamp: 'UnixTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamIdsShrink: 'string',
      tag: 'string',
      unixTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

