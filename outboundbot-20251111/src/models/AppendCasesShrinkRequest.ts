// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppendCasesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The outbound call task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 40ea7fc2-c9d4-47e3-af1e-216bf7f79a44
   */
  campaignId?: string;
  /**
   * @remarks
   * The list of contacts.
   * 
   * This parameter is required.
   */
  casesShrink?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      casesShrink: 'Cases',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      casesShrink: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

