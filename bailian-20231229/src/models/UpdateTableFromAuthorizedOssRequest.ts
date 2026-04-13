// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableFromAuthorizedOssRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yinghuo-ai
   */
  ossBucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a0deedbce4a8162b8d66c63ace28330c
   */
  ossKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OVERWRITE
   */
  updateMode?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucket: 'OssBucket',
      ossKey: 'OssKey',
      ossRegionId: 'OssRegionId',
      updateMode: 'UpdateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucket: 'string',
      ossKey: 'string',
      ossRegionId: 'string',
      updateMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

