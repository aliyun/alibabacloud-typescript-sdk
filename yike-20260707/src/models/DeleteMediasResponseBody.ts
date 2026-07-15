// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediasResponseBody extends $dara.Model {
  forbiddenList?: string[];
  ignoredList?: string[];
  /**
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

