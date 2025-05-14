// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChannelAlertsResponseBodyProgramAlerts } from "./ListChannelAlertsResponseBodyProgramAlerts";


export class ListChannelAlertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
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
   * The alerts.
   */
  programAlerts?: ListChannelAlertsResponseBodyProgramAlerts[];
  /**
   * @remarks
   * **Request ID**
   * 
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of alerts returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      programAlerts: 'ProgramAlerts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      programAlerts: { 'type': 'array', 'itemType': ListChannelAlertsResponseBodyProgramAlerts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.programAlerts)) {
      $dara.Model.validateArray(this.programAlerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

