// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialDirectoryTreeRequest extends $dara.Model {
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @remarks
   * Specifies whether to hide shared folders.
   */
  hiddenPublic?: boolean;
  /**
   * @remarks
   * Specifies whether to request the first-level root folder.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  root?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      hiddenPublic: 'HiddenPublic',
      root: 'Root',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      hiddenPublic: 'boolean',
      root: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

