// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomScenePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  objects?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  policyId?: number;
  siteIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      siteIds: 'SiteIds',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: 'string',
      policyId: 'number',
      siteIds: 'string',
      startTime: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

