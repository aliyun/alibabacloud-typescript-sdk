// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code that you want to query.
   * 
   * @example
   * 12P**
   */
  enterpriseCode?: string;
  /**
   * @remarks
   * Specifies whether to query only default enterprise codes. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for returning the next page when the data is returned in more than one page.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseCode: 'EnterpriseCode',
      isDefault: 'IsDefault',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseCode: 'string',
      isDefault: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

