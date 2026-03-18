// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSummaryComparedRequest extends $dara.Model {
  /**
   * @remarks
   * The start date.
   * 
   * This parameter is required.
   * 
   * @example
   * 20250601
   */
  beginDate?: string;
  /**
   * @remarks
   * The end date.
   * 
   * This parameter is required.
   * 
   * @example
   * 20250604
   */
  endDate?: string;
  /**
   * @remarks
   * The list of projects.
   */
  projects?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID. You can log on to the MaxCompute console and choose **Tenant Property** in the navigation pane on the left to view the tenant ID.
   * 
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

