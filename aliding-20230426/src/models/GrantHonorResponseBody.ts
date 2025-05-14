// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantHonorResponseBody extends $dara.Model {
  failedUserIds?: string[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 45b4d029-ab94-4672-aa0f-bd79590374cb
   */
  requestId?: string;
  successUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUserIds: 'failedUserIds',
      requestId: 'requestId',
      successUserIds: 'successUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUserIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUserIds)) {
      $dara.Model.validateArray(this.failedUserIds);
    }
    if(Array.isArray(this.successUserIds)) {
      $dara.Model.validateArray(this.successUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

