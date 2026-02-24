// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompliancePacksShrinkRequest extends $dara.Model {
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
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      status: 'Status',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      riskLevel: 'number',
      status: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

