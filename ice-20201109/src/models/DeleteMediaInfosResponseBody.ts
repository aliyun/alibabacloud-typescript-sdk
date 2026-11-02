// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediaInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of media asset IDs or URLs (exactly as entered) that cannot be deleted. This is generally caused by a lack of permissions.
   */
  forbiddenList?: string[];
  /**
   * @remarks
   * The list of IDs or input URLs (exactly as entered) that encountered errors.
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

