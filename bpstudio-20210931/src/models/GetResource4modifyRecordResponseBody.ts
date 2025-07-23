// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResource4ModifyRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * {\\"InstanceId\\": \\"\\", \\"AttributeName\\": \\"drmCommand\\", \\"Id\\": 16800, \\"Desc\\": \\"test\\"}
   */
  attribute?: string;
  error?: string;
  /**
   * @example
   * 1726645341000
   */
  modifyTime?: string;
  /**
   * @example
   * rm-uf6308dyal1*****
   */
  resourceId?: string;
  /**
   * @example
   * Finish
   */
  status?: string;
  /**
   * @example
   * rds
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      error: 'Error',
      modifyTime: 'ModifyTime',
      resourceId: 'ResourceId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      error: 'string',
      modifyTime: 'string',
      resourceId: 'string',
      status: 'string',
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

export class GetResource4ModifyRecordResponseBody extends $dara.Model {
  /**
   * @example
   * {
   *     "PolicyType": "",
   *     "AuthPrincipalOwnerId": "",
   *     "EncodedDiagnosticMessage": "",
   *     "AuthPrincipalType": "",
   *     "AuthPrincipalDisplayName": "",
   *     "NoPermissionType": "",
   *     "AuthAction": ""
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetResource4ModifyRecordResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetResource4ModifyRecordResponseBodyData },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
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

