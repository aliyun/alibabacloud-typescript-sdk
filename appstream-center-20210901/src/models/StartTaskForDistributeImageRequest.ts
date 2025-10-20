// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTaskForDistributeImageRequest extends $dara.Model {
  destinationRegionList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * imgc-07jyldnd9i*****
   */
  imageId?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * RETRY
   */
  retryType?: string;
  /**
   * @example
   * cn-shanghai
   */
  sourceRegion?: string;
  /**
   * @example
   * iv-07jyldnd9i****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionList: 'DestinationRegionList',
      imageId: 'ImageId',
      productType: 'ProductType',
      retryType: 'RetryType',
      sourceRegion: 'SourceRegion',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionList: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      productType: 'string',
      retryType: 'string',
      sourceRegion: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationRegionList)) {
      $dara.Model.validateArray(this.destinationRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

