// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules } from "./ListDialarmRulesResponseBodyPagingInfoDijobAlarmRules";


export class ListDIAlarmRulesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The alert rules.
   */
  DIJobAlarmRules?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules[];
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 90
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobAlarmRules: 'DIJobAlarmRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobAlarmRules: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DIJobAlarmRules)) {
      $dara.Model.validateArray(this.DIJobAlarmRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

