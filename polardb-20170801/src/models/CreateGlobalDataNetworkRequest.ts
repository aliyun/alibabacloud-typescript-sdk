// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDataNetworkRequest extends $dara.Model {
  /**
   * @example
   * mygdn
   */
  description?: string;
  /**
   * @example
   * /
   */
  destinationFileSystemPath?: string;
  /**
   * @example
   * pfs-xxx
   */
  destinationId?: string;
  /**
   * @example
   * cn-beijing
   */
  destinationRegion?: string;
  /**
   * @example
   * pfs
   */
  destinationType?: string;
  /**
   * @example
   * true
   */
  freezeSourceDuringSync?: string;
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
      description: 'Description',
      destinationFileSystemPath: 'DestinationFileSystemPath',
      destinationId: 'DestinationId',
      destinationRegion: 'DestinationRegion',
      destinationType: 'DestinationType',
      freezeSourceDuringSync: 'FreezeSourceDuringSync',
      sourceFileSystemPath: 'SourceFileSystemPath',
      sourceId: 'SourceId',
      sourceRegion: 'SourceRegion',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationFileSystemPath: 'string',
      destinationId: 'string',
      destinationRegion: 'string',
      destinationType: 'string',
      freezeSourceDuringSync: 'string',
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

