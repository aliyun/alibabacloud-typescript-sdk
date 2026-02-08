// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialDirectoryTreeRequest extends $dara.Model {
  /**
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  hiddenPublic?: boolean;
  /**
   * @remarks
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

