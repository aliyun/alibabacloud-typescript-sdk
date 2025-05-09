// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetsResponseBodyPagingInfoDataAssetsDataAssetTagMappings extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the lineage-based automatic backtrack feature is enabled for the mapping.
   * 
   * @example
   * false
   */
  autoTraceEnabled?: boolean;
  /**
   * @remarks
   * The creator of the mapping between the data asset and the tag.
   * 
   * @example
   * 12345
   */
  creator?: string;
  /**
   * @remarks
   * The data asset ID.
   * 
   * @example
   * 7259557313
   */
  dataAssetId?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The way in which the mapping between the data asset and the tag is created. Valid values:
   * 
   * *   System
   * *   UserDefined
   * 
   * @example
   * UserDefined
   */
  tagSource?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      autoTraceEnabled: 'AutoTraceEnabled',
      creator: 'Creator',
      dataAssetId: 'DataAssetId',
      key: 'Key',
      tagSource: 'TagSource',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoTraceEnabled: 'boolean',
      creator: 'string',
      dataAssetId: 'string',
      key: 'string',
      tagSource: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

