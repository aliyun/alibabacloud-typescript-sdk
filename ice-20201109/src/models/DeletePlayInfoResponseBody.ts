// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlayInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URLs of the media streams that cannot be deleted. Generally, media streams cannot be deleted if you do not have the required permissions.
   */
  forbiddenList?: string[];
  /**
   * @remarks
   * The URLs of ignored media streams. An error occurred while obtaining such media assets because the IDs or URLs of the media assets do not exist.
   */
  ignoredList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenList: 'ForbiddenList',
      ignoredList: 'IgnoredList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenList: { 'type': 'array', 'itemType': 'string' },
      ignoredList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forbiddenList)) {
      $dara.Model.validateArray(this.forbiddenList);
    }
    if(Array.isArray(this.ignoredList)) {
      $dara.Model.validateArray(this.ignoredList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

