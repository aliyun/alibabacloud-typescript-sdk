// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSkillGroupAndAgentStatusSummaryResponseBodyData } from "./GetSkillGroupAndAgentStatusSummaryResponseBodyData";


export class GetSkillGroupAndAgentStatusSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupAndAgentStatusSummaryResponseBodyData;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSkillGroupAndAgentStatusSummaryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

