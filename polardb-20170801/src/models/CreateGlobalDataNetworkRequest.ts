// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDataNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The description or remarks for the GDN.
   * 
   * @example
   * mygdn
   */
  description?: string;
  /**
   * @remarks
   * Destination path
   * 
   * @example
   * /
   */
  destinationFileSystemPath?: string;
  /**
   * @remarks
   * Target PolarFileSystem (PolarFS) instance
   * 
   * @example
   * pfs-xxx
   */
  destinationId?: string;
  /**
   * @remarks
   * The region of the destination PolarFS instance.
   * 
   * @example
   * cn-beijing
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The type of the destination instance. Valid values:
   * 
   * - **pfs**: PolarFS High-Performance Edition.
   * 
   * - **pcs**: PolarFS Cold Storage Edition.
   * 
   * @example
   * pfs
   */
  destinationType?: string;
  /**
   * @remarks
   * Whether to freeze the source path during transmission. Valid values:
   * 
   * - **true**: Freeze.
   * 
   * - **false**: Do not freeze.
   * 
   * > Currently only supports oss source.
   * 
   * @example
   * true
   */
  freezeSourceDuringSync?: string;
  /**
   * @remarks
   * The source path.
   * 
   * @example
   * /
   */
  sourceFileSystemPath?: string;
  /**
   * @remarks
   * Source PolarFileSystem (PolarFS) instance.
   * 
   * @example
   * pcs-xxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The region of the source PolarFS instance.
   * 
   * @example
   * cn-wulanchabu
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * - **pfs**: PolarFS High-Performance Edition.
   * 
   * - **pcs**: PolarFS Cold Storage Edition.
   * 
   * @example
   * pcs
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

