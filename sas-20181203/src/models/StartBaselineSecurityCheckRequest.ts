// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartBaselineSecurityCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items.
   * 
   * > To perform a check task on cloud service configurations, you must specify the ID of the check item. You can call the [DescribeRiskItemType](~~DescribeRiskItemType~~) operation to query the IDs of check items.
   */
  itemIds?: number[];
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 106.11.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the check task. Valid values:
   * 
   * *   **check**
   * *   **verify**
   * 
   * This parameter is required.
   * 
   * @example
   * verify
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemIds: 'ItemIds',
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemIds: { 'type': 'array', 'itemType': 'number' },
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemIds)) {
      $dara.Model.validateArray(this.itemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

