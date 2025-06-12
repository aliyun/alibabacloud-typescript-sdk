// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddCasesRequestCaseList } from "./AddCasesRequestCaseList";


export class AddCasesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c58b9719-3bc3-441d-a4d3-fc0309ef7066
   */
  campaignId?: string;
  caseList?: AddCasesRequestCaseList[];
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
      caseList: 'CaseList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      caseList: { 'type': 'array', 'itemType': AddCasesRequestCaseList },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.caseList)) {
      $dara.Model.validateArray(this.caseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

