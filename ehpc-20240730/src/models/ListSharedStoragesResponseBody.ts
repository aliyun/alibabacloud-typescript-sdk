// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSharedStoragesResponseBodySharedStorages } from "./ListSharedStoragesResponseBodySharedStorages";


export class ListSharedStoragesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C084****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the attached shared storage.
   */
  sharedStorages?: ListSharedStoragesResponseBodySharedStorages[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sharedStorages: 'SharedStorages',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': ListSharedStoragesResponseBodySharedStorages },
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sharedStorages)) {
      $dara.Model.validateArray(this.sharedStorages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

