// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveSnapshotJobRequestStreamInput extends $dara.Model {
  /**
   * @remarks
   * The type of the input stream. The value can only be rtmp.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  type?: string;
  /**
   * @remarks
   * The URL of the input stream.
   * 
   * *   It cannot exceed 255 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://www.aliyun.com/stream
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

