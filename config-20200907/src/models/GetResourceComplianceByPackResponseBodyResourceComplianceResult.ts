// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceComplianceByPackResponseBodyResourceComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-541e626622af0087****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The number of non-compliant resources.
   * 
   * @example
   * 7
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

