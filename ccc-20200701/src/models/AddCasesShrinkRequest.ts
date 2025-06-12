// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c58b9719-3bc3-441d-a4d3-fc0309ef7066
   */
  campaignId?: string;
  caseListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      caseListShrink: 'CaseList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      caseListShrink: 'string',
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

