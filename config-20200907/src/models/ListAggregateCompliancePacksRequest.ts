// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateCompliancePacksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListAggregateCompliancePacksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Minimum value: 1. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level of the compliance pack. Valid values:
   * 
   * - 1: high
   * 
   * - 2: medium
   * 
   * - 3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The status of the compliance pack. Valid values:
   * 
   * - ACTIVE: The compliance pack is active.
   * 
   * - CREATING: The compliance pack is being created.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   */
  tag?: ListAggregateCompliancePacksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      riskLevel: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListAggregateCompliancePacksRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

