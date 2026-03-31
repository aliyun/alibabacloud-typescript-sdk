// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSummaryComparedShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20250601
   */
  beginDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20250604
   */
  endDate?: string;
  projectsShrink?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 483212237127906
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'beginDate',
      endDate: 'endDate',
      projectsShrink: 'projects',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      projectsShrink: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

