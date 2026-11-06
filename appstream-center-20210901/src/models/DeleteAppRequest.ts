// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to be deleted. **This parameter is required**, and the application must belong to the current account. You must dissociate the image references from the target application or version before deletion.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application version to be deleted. If specified, only the adapter corresponding to this application version is deleted. If omitted, the entire application and its adapters are deleted. If the application has no other adapters after the version is deleted, the application record is also deleted.
   * 
   * @example
   * apv-bp1example****
   */
  appVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

