// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRdDefaultSyncListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the folders in the resource directory.
   * 
   * @example
   * fd-BwoXuf****,fd-CFamY7****
   */
  folderIds?: string;
  static names(): { [key: string]: string } {
    return {
      folderIds: 'FolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRdDefaultSyncListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the call is successful.
   */
  data?: ListRdDefaultSyncListResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DDCAE1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListRdDefaultSyncListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

