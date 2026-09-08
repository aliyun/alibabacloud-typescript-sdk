// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppendCasesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The predictive campaign ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 78cf6864-9a22-4ea8-a59d-5adc2d747b0e
   */
  campaignId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of cases to be added.
   */
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      bodyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

