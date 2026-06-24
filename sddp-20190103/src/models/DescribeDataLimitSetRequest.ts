// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh_cn**: Chinese (Simplified). This is the default value.
   * 
   * - **en_us**: English (US).
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the parent asset.
   * 
   * The [DescribeDataLimitDetail](~~DescribeDataLimitDetail~~) or [DescribeDataLimits](~~DescribeDataLimits~~) operation returns this ID in the **ParentId** parameter.
   * 
   * @example
   * db
   */
  parentId?: string;
  /**
   * @remarks
   * The region type.
   * 
   * - **native_audit**: A region that supports traffic collection.
   * 
   * @example
   * native_audit
   */
  regionType?: string;
  /**
   * @remarks
   * The type of data asset. Valid values:
   * 
   * - **1**: MaxCompute.
   * 
   * - **2**: OSS.
   * 
   * - **3**: ADS.
   * 
   * - **4**: OTS.
   * 
   * - **5**: RDS.
   * 
   * - **6**: SELF_DB.
   * 
   * > If you set this parameter to a value other than 2, the returned OssBucketList object is empty.
   * 
   * @example
   * 2
   */
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      parentId: 'ParentId',
      regionType: 'RegionType',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      parentId: 'string',
      regionType: 'string',
      resourceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

