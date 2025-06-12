// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppendCasesRequestBody } from "./AppendCasesRequestBody";


export class AppendCasesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 78cf6864-9a22-4ea8-a59d-5adc2d747b0e
   */
  campaignId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  body?: AppendCasesRequestBody[];
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      body: { 'type': 'array', 'itemType': AppendCasesRequestBody },
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

