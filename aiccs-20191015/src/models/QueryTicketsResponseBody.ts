// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTicketsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * { "totalResults":1 "previousPage":1 "data":[ 0:{ "serviceType":1 "lastUrgeTime":0 "queueId":0 "sopCateId":252011 "totalUrgeMemo":"" "taskGmtModified":0 "departmentId":10 "groupId":0 "channelType":1 "questionInfo":"" "templateId":0 "deadLine":0 "srType":30701 "caseId":2000000001165962}
   */
  data?: string;
  /**
   * @example
   * OK
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
  success?: boolean;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

