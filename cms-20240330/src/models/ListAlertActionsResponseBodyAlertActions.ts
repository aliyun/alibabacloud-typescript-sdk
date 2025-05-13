// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlertActionsResponseBodyAlertActionsEssParam } from "./ListAlertActionsResponseBodyAlertActionsEssParam";
import { ListAlertActionsResponseBodyAlertActionsFcParam } from "./ListAlertActionsResponseBodyAlertActionsFcParam";
import { ListAlertActionsResponseBodyAlertActionsMnsParam } from "./ListAlertActionsResponseBodyAlertActionsMnsParam";
import { ListAlertActionsResponseBodyAlertActionsPagerDutyParam } from "./ListAlertActionsResponseBodyAlertActionsPagerDutyParam";
import { ListAlertActionsResponseBodyAlertActionsSlsParam } from "./ListAlertActionsResponseBodyAlertActionsSlsParam";
import { ListAlertActionsResponseBodyAlertActionsWebhookParam } from "./ListAlertActionsResponseBodyAlertActionsWebhookParam";


export class ListAlertActionsResponseBodyAlertActions extends $dara.Model {
  alertActionId?: string;
  alertActionName?: string;
  essParam?: ListAlertActionsResponseBodyAlertActionsEssParam;
  fcParam?: ListAlertActionsResponseBodyAlertActionsFcParam;
  mnsParam?: ListAlertActionsResponseBodyAlertActionsMnsParam;
  pagerDutyParam?: ListAlertActionsResponseBodyAlertActionsPagerDutyParam;
  slsParam?: ListAlertActionsResponseBodyAlertActionsSlsParam;
  type?: string;
  webhookParam?: ListAlertActionsResponseBodyAlertActionsWebhookParam;
  static names(): { [key: string]: string } {
    return {
      alertActionId: 'alertActionId',
      alertActionName: 'alertActionName',
      essParam: 'essParam',
      fcParam: 'fcParam',
      mnsParam: 'mnsParam',
      pagerDutyParam: 'pagerDutyParam',
      slsParam: 'slsParam',
      type: 'type',
      webhookParam: 'webhookParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionId: 'string',
      alertActionName: 'string',
      essParam: ListAlertActionsResponseBodyAlertActionsEssParam,
      fcParam: ListAlertActionsResponseBodyAlertActionsFcParam,
      mnsParam: ListAlertActionsResponseBodyAlertActionsMnsParam,
      pagerDutyParam: ListAlertActionsResponseBodyAlertActionsPagerDutyParam,
      slsParam: ListAlertActionsResponseBodyAlertActionsSlsParam,
      type: 'string',
      webhookParam: ListAlertActionsResponseBodyAlertActionsWebhookParam,
    };
  }

  validate() {
    if(this.essParam && typeof (this.essParam as any).validate === 'function') {
      (this.essParam as any).validate();
    }
    if(this.fcParam && typeof (this.fcParam as any).validate === 'function') {
      (this.fcParam as any).validate();
    }
    if(this.mnsParam && typeof (this.mnsParam as any).validate === 'function') {
      (this.mnsParam as any).validate();
    }
    if(this.pagerDutyParam && typeof (this.pagerDutyParam as any).validate === 'function') {
      (this.pagerDutyParam as any).validate();
    }
    if(this.slsParam && typeof (this.slsParam as any).validate === 'function') {
      (this.slsParam as any).validate();
    }
    if(this.webhookParam && typeof (this.webhookParam as any).validate === 'function') {
      (this.webhookParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

