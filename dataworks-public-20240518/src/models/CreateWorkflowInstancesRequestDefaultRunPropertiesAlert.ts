// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestDefaultRunPropertiesAlert extends $dara.Model {
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * *   Sms
   * *   Mail
   * *   SmsMail
   * 
   * @example
   * Sms
   */
  noticeType?: string;
  /**
   * @remarks
   * The alerting policy. Valid values:
   * 
   * *   SUCCESS: An alert is reported when data backfill succeeds.
   * *   FAILURE: An alert is reported when data backfill fails.
   * *   SuccessFailure: An alert is reported regardless of whether data backfill succeeds or fails.
   * 
   * @example
   * Succes
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      noticeType: 'NoticeType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

