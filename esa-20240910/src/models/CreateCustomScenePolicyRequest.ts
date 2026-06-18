// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomScenePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy end time.
   * 
   * The time must be in UTC and in ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-07T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the sites to associate with the policy. Separate multiple site IDs with commas.
   * 
   * > This parameter is deprecated. Use `SiteIds` instead. If `SiteIds` is specified, the value of this parameter is ignored. To prevent ambiguity, specify a value for either `SiteIds` or `Objects`.
   * 
   * @example
   * 7096621098****,7096621099****
   */
  objects?: string;
  /**
   * @remarks
   * The IDs of the sites to associate with the policy. Separate multiple site IDs with commas.
   * 
   * @example
   * 7096621098****,7096621099****
   */
  siteIds?: string;
  /**
   * @remarks
   * The policy start time.
   * 
   * The time must be in UTC and in ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-07T17:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The template name. Valid value:
   * 
   * - **promotion**: a policy for major events.
   * 
   * This parameter is required.
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
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

