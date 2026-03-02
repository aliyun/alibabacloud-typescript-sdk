// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGovernanceItemReportRequest extends $dara.Model {
  /**
   * @remarks
   * The check item. For more information, see [Identity and access governance check items](https://help.aliyun.com/zh/ram/user-guide/overview-of-cloud-governance-for-ram?spm=a2c4g.11174283.0.0.88b3de53tfL5XG#section-q06-p9p-8vl).
   * 
   * @example
   * SSOLoginEnabled
   */
  governanceItemType?: string;
  /**
   * @remarks
   * If the response is truncated, use the `Marker` to retrieve the subsequent content.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries to return. If the response is truncated because the number of entries exceeds the value of `MaxItems`, the value of the `IsTruncated` parameter is true.
   * 
   * Valid values: 1 to 1000. Default value: 1000.
   * 
   * @example
   * 1000
   */
  maxItems?: string;
  static names(): { [key: string]: string } {
    return {
      governanceItemType: 'GovernanceItemType',
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governanceItemType: 'string',
      marker: 'string',
      maxItems: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

