// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmartqPermissionByCubeIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Dataset ID.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * Dataset name.
   * 
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @remarks
   * Whether the current user has permission for the smart question. Note: \\"HasPerssion\\" seems to be a typo, it should probably be \\"HasPermission\\".
   */
  hasPerssion?: boolean;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      hasPerssion: 'HasPerssion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      cubeName: 'string',
      hasPerssion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

