// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCursorTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor for which you want to obtain the timestamp. Call the [GetCursor](https://help.aliyun.com/document_detail/2771314.html) operation to obtain a cursor.
   * 
   * > If the value of the cursor is less than the begin cursor or greater than the end cursor, InvalidCursor is returned. If the shard contains no data, the current time is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * MTU0NzQ3MDY4MjM3NjUxMzQ0Ng==
   */
  cursor?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

