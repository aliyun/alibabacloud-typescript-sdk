// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLinkageAttributesTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @example
   * SyntaxError
   */
  errorMessage?: string;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @example
   * [
   *       {
   *         "label": "ecs.c6.2xlarge (8c 16g)",
   *         "value": "ecs.c6.2xlarge"
   *       },
   *       {
   *         "label": "ecs.c6.3xlarge (12c 24g)",
   *         "value": "ecs.c6.3xlarge"
   *       }
   * ]
   */
  optionalValues?: string;
  /**
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      nextToken: 'NextToken',
      optionalValues: 'OptionalValues',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      nextToken: 'string',
      optionalValues: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkageAttributesTemplateResponseBody extends $dara.Model {
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
  data?: GetLinkageAttributesTemplateResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetLinkageAttributesTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
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

