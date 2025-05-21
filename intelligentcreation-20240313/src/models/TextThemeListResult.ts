// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TextTheme } from "./TextTheme";


export class TextThemeListResult extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  textThemeList?: TextTheme[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      textThemeList: 'textThemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      textThemeList: { 'type': 'array', 'itemType': TextTheme },
    };
  }

  validate() {
    if(Array.isArray(this.textThemeList)) {
      $dara.Model.validateArray(this.textThemeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

