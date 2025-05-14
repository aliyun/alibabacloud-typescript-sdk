// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources extends $dara.Model {
  /**
   * @example
   * /
   */
  sourceFileSystemPath?: string;
  /**
   * @example
   * oss-xxx
   */
  sourceId?: string;
  /**
   * @example
   * cn-wulanchabu
   */
  sourceRegion?: string;
  /**
   * @example
   * oss
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceFileSystemPath: 'SourceFileSystemPath',
      sourceId: 'SourceId',
      sourceRegion: 'SourceRegion',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceFileSystemPath: 'string',
      sourceId: 'string',
      sourceRegion: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

