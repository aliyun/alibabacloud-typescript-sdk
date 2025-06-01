// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisposalContent extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  alertContent?: string;
  alertContentEn?: string;
  /**
   * **if can be null:**
   * true
   */
  alertTitle?: string;
  alertTitleEn?: string;
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
  static names(): { [key: string]: string } {
    return {
      alertContent: 'AlertContent',
      alertContentEn: 'AlertContentEn',
      alertTitle: 'AlertTitle',
      alertTitleEn: 'AlertTitleEn',
      noticeContent: 'NoticeContent',
      noticeContentEn: 'NoticeContentEn',
      notifyActions: 'NotifyActions',
      prohibitActions: 'ProhibitActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContent: 'string',
      alertContentEn: 'string',
      alertTitle: 'string',
      alertTitleEn: 'string',
      noticeContent: 'string',
      noticeContentEn: 'string',
      notifyActions: { 'type': 'array', 'itemType': 'string' },
      prohibitActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyActions)) {
      $dara.Model.validateArray(this.notifyActions);
    }
    if(Array.isArray(this.prohibitActions)) {
      $dara.Model.validateArray(this.prohibitActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

