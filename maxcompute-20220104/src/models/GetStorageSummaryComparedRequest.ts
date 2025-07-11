// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSummaryComparedRequest extends $dara.Model {
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
  projects?: string[];
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
      projects: 'projects',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      projects: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

