// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutRecordStorageLifeCycleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * stream-xxx
   */
  streamIds?: string[];
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
      streamIds: 'StreamIds',
      tag: 'Tag',
      unixTimestamp: 'UnixTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamIds: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
      unixTimestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.streamIds)) {
      $dara.Model.validateArray(this.streamIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

