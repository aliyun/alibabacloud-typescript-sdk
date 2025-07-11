// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 34933
   */
  id?: number;
  /**
   * @remarks
   * The details of the policy. The value is a string that consists of multiple parameters in the JSON format.
   * 
   * @example
   * {
   *     "ext": "Date",
   *     "regex": "-",
   *     "code": "2009",
   *     "level": "S1",
   *     "origin": "default",
   *     "name": "2009"
   * }
   */
  rule?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **risk**: risk detection
   * *   **event**: security event
   * *   **sensitive_word**: sensitive data
   * *   **auth_flag**: authentication credential
   * *   **api_tag**: business purpose
   * *   **desensitization**: data masking
   * *   **whitelist**: whitelist
   * *   **recognition**: API recognition
   * *   **offline_api**: lifecycle management
   * 
   * @example
   * risk
   */
  type?: string;
  /**
   * @remarks
   * The time when the policy was updated. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1721095301
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      rule: 'Rule',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      rule: 'string',
      status: 'number',
      type: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policies.
   */
  data?: DescribeApisecRulesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecRulesResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

