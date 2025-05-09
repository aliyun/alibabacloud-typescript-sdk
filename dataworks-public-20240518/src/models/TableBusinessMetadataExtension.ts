// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableBusinessMetadataExtension extends $dara.Model {
  /**
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @example
   * 0
   */
  favorCount?: number;
  /**
   * @example
   * 234
   */
  projectId?: number;
  /**
   * @example
   * 0
   */
  readCount?: number;
  /**
   * @example
   * 0
   */
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      favorCount: 'FavorCount',
      projectId: 'ProjectId',
      readCount: 'ReadCount',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      favorCount: 'number',
      projectId: 'number',
      readCount: 'number',
      viewCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

