// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTaskForDistributeImageRequest extends $dara.Model {
  /**
   * @remarks
   * The list of destination regions to which the image is copied.
   */
  destinationRegionList?: string[];
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-07jyldnd9i*****
   */
  imageId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * RETRY
   */
  retryType?: string;
  /**
   * @remarks
   * The source region from which the image is copied. If you do not specify this parameter, a region is randomly selected.
   * 
   * @example
   * cn-shanghai
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The image version ID. If you do not specify this parameter, the latest image version is used by default.
   * 
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

