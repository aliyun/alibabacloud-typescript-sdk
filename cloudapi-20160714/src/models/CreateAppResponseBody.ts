// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the application.
   * 
   * @example
   * 20112314518278
   */
  appId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BA20890E-75C7-41BC-9C8B-73276B58F550
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the tag exists. If the value is **true**, the tag exists. If the value is **false**, the tag does not exist.
   * 
   * @example
   * false
   */
  tagStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
      tagStatus: 'TagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      requestId: 'string',
      tagStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

