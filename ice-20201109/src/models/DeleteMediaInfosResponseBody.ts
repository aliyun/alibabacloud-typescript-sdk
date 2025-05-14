// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediaInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs or URLs of media assets that cannot be deleted. Generally, media assets cannot be deleted if you do not have the required permissions.
   */
  forbiddenList?: string[];
  /**
   * @remarks
   * The IDs or URLs of ignored media assets. An error occurred while obtaining such media assets.
   */
  ignoredList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0622C702-41BE-467E-AF2E-883D4517962E
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

