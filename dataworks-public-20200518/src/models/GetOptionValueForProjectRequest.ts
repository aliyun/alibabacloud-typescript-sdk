// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOptionValueForProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The unique code of the extension.
   * 
   * @example
   * ce4*********086da5
   */
  extensionCode?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 234
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      extensionCode: 'ExtensionCode',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensionCode: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

