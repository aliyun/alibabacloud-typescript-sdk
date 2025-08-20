// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisposalContent extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  alertContent?: string;
  alertContentEn?: string;
  alertIntervalSeconds?: number;
  /**
   * **if can be null:**
   * true
   */
  alertTitle?: string;
  alertTitleEn?: string;
  nacDemotionPolicyIds?: string[];
  noticeContent?: string;
  noticeContentEn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  notifyActions?: string[];
  prohibitActions?: string[];
  prohibitSoftwareIds?: string[];
  static names(): { [key: string]: string } {
    return {
      alertContent: 'AlertContent',
      alertContentEn: 'AlertContentEn',
      alertIntervalSeconds: 'AlertIntervalSeconds',
      alertTitle: 'AlertTitle',
      alertTitleEn: 'AlertTitleEn',
      nacDemotionPolicyIds: 'NacDemotionPolicyIds',
      noticeContent: 'NoticeContent',
      noticeContentEn: 'NoticeContentEn',
      notifyActions: 'NotifyActions',
      prohibitActions: 'ProhibitActions',
      prohibitSoftwareIds: 'ProhibitSoftwareIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContent: 'string',
      alertContentEn: 'string',
      alertIntervalSeconds: 'number',
      alertTitle: 'string',
      alertTitleEn: 'string',
      nacDemotionPolicyIds: { 'type': 'array', 'itemType': 'string' },
      noticeContent: 'string',
      noticeContentEn: 'string',
      notifyActions: { 'type': 'array', 'itemType': 'string' },
      prohibitActions: { 'type': 'array', 'itemType': 'string' },
      prohibitSoftwareIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nacDemotionPolicyIds)) {
      $dara.Model.validateArray(this.nacDemotionPolicyIds);
    }
    if(Array.isArray(this.notifyActions)) {
      $dara.Model.validateArray(this.notifyActions);
    }
    if(Array.isArray(this.prohibitActions)) {
      $dara.Model.validateArray(this.prohibitActions);
    }
    if(Array.isArray(this.prohibitSoftwareIds)) {
      $dara.Model.validateArray(this.prohibitSoftwareIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

