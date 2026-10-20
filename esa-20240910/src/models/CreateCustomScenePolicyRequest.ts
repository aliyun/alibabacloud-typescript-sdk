// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomScenePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
   * The IDs of the websites to be associated. Separate multiple IDs with commas (,).
   * 
   * > **[Deprecated]** This parameter is deprecated. Use the SiteIds parameter instead. If the SiteIds parameter is specified, the value of the SiteIds parameter takes precedence and the value of the Objects parameter does not take effect. To avoid ambiguity in update operations, you must specify at least one of the SiteIds and Objects parameters.
   * 
   * @example
   * 7096621098****,7096621099****
   */
  objects?: string;
  /**
   * @remarks
   * The IDs of the websites to be associated. Separate multiple IDs with commas (,).
   * 
   * @example
   * 7096621098****,7096621099****
   */
  siteIds?: string;
  /**
   * @remarks
   * The start time of the policy.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-07T17:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the template. Valid values:
   * - **promotion**: Important Activity.
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

