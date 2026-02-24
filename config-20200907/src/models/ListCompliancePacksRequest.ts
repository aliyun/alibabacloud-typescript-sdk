// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompliancePacksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * You can attach up to 20 tag keys to a resource.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * You can attach up to 20 tag values to a resource.
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

export class ListCompliancePacksRequest extends $dara.Model {
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
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level of the compliance pack. Valid values:
   * 
   * - 1: high risk.
   * 
   * - 2: medium risk.
   * 
   * - 3: low risk.
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
   * You can attach up to 20 tags to a resource.
   */
  tag?: ListCompliancePacksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      riskLevel: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListCompliancePacksRequestTag },
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

