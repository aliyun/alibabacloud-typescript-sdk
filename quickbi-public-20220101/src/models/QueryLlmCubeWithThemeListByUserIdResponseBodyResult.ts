// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLlmCubeWithThemeListByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Dataset map.
   * 
   * - key - Dataset ID
   * - value - Dataset name
   */
  cubeIds?: { [key: string]: string };
  /**
   * @remarks
   * Analysis theme map.
   * - key - Analysis theme ID 
   * - value - Analysis theme name
   */
  themeIds?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      cubeIds: 'CubeIds',
      themeIds: 'ThemeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      themeIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.cubeIds) {
      $dara.Model.validateMap(this.cubeIds);
    }
    if(this.themeIds) {
      $dara.Model.validateMap(this.themeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

