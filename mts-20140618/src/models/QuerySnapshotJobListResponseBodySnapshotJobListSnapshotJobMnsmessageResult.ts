// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The number of snapshots that were taken.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The OSS bucket that stores the input file.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the region in which the input OSS bucket is located.
   * 
   * @example
   * 799454621135656C7F815F198A76****
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

