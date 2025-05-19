// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEventTargetsRequestContactParameters } from "./PutEventTargetsRequestContactParameters";
import { PutEventTargetsRequestFcParameters } from "./PutEventTargetsRequestFcParameters";
import { PutEventTargetsRequestMnsParameters } from "./PutEventTargetsRequestMnsParameters";
import { PutEventTargetsRequestSlsParameters } from "./PutEventTargetsRequestSlsParameters";
import { PutEventTargetsRequestWebhookParameters } from "./PutEventTargetsRequestWebhookParameters";


export class PutEventTargetsRequest extends $dara.Model {
  contactParameters?: PutEventTargetsRequestContactParameters[];
  fcParameters?: PutEventTargetsRequestFcParameters[];
  mnsParameters?: PutEventTargetsRequestMnsParameters[];
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleName?: string;
  slsParameters?: PutEventTargetsRequestSlsParameters[];
  webhookParameters?: PutEventTargetsRequestWebhookParameters[];
  static names(): { [key: string]: string } {
    return {
      contactParameters: 'ContactParameters',
      fcParameters: 'FcParameters',
      mnsParameters: 'MnsParameters',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      slsParameters: 'SlsParameters',
      webhookParameters: 'WebhookParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameters: { 'type': 'array', 'itemType': PutEventTargetsRequestContactParameters },
      fcParameters: { 'type': 'array', 'itemType': PutEventTargetsRequestFcParameters },
      mnsParameters: { 'type': 'array', 'itemType': PutEventTargetsRequestMnsParameters },
      regionId: 'string',
      ruleName: 'string',
      slsParameters: { 'type': 'array', 'itemType': PutEventTargetsRequestSlsParameters },
      webhookParameters: { 'type': 'array', 'itemType': PutEventTargetsRequestWebhookParameters },
    };
  }

  validate() {
    if(Array.isArray(this.contactParameters)) {
      $dara.Model.validateArray(this.contactParameters);
    }
    if(Array.isArray(this.fcParameters)) {
      $dara.Model.validateArray(this.fcParameters);
    }
    if(Array.isArray(this.mnsParameters)) {
      $dara.Model.validateArray(this.mnsParameters);
    }
    if(Array.isArray(this.slsParameters)) {
      $dara.Model.validateArray(this.slsParameters);
    }
    if(Array.isArray(this.webhookParameters)) {
      $dara.Model.validateArray(this.webhookParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

