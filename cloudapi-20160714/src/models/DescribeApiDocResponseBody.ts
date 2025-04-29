// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiDocResponseBodyErrorCodeSamples } from "./DescribeApiDocResponseBodyErrorCodeSamples";
import { DescribeApiDocResponseBodyRequestConfig } from "./DescribeApiDocResponseBodyRequestConfig";
import { DescribeApiDocResponseBodyRequestParameters } from "./DescribeApiDocResponseBodyRequestParameters";


export class DescribeApiDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * b24be7e59a104e52bffbf432cc9272af
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API
   * 
   * @example
   * ObtainKeywordQRCodeAddress
   */
  apiName?: string;
  /**
   * @remarks
   * The security authentication method. Valid values: APP, ANONYMOUS, and APPOPENID, indicating respectively Alibaba Cloud application authentication, anonymous authentication, and third-party OpenID Connect account authentication.
   * 
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * The publishing time.
   * 
   * @example
   * 2022-07-13T16:00:33Z
   */
  deployedTime?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * Lynk\\&Co Digital Mall OMS-UAT
   */
  description?: string;
  /**
   * @remarks
   * *   Specifies whether to set **DisableInternet** to **true** to limit API calls to within the VPC.
   * *   If you set **DisableInternet** to **false**, the limit is lifted. The default value is false when you create an API.
   * 
   * @example
   * true
   */
  disableInternet?: boolean;
  /**
   * @remarks
   * The sample error codes returned by the backend service.
   */
  errorCodeSamples?: DescribeApiDocResponseBodyErrorCodeSamples;
  /**
   * @remarks
   * The sample error response from the backend service.
   * 
   * @example
   * {"errorCode":"fail","errorMessage":"param invalid"}
   */
  failResultSample?: string;
  /**
   * @remarks
   * *   Specifies whether to set **ForceNonceCheck** to **true** to force the check of X-Ca-Nonce during the request. This is the unique identifier of the request and is generally identified by UUID. After receiving this parameter, API Gateway verifies the validity of this parameter. The same value can be used only once within 15 minutes. This helps prevent replay attacks.
   * *   If you set **ForceNonceCheck** to **false**, the check is not performed. The default value is false when you create an API.
   * 
   * @example
   * true
   */
  forceNonceCheck?: boolean;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * f51d08c5b7c84342905544ebaec26d35
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * Member Age Transaction Service
   */
  groupName?: string;
  /**
   * @remarks
   * The region ID of the API group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The returned API frontend definition. It is an array consisting of RequestConfig data.
   */
  requestConfig?: DescribeApiDocResponseBodyRequestConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F253FB5F-9AE1-5DDA-99B5-46BE00A3719E
   */
  requestId?: string;
  /**
   * @remarks
   * The returned frontend input parameters in the API. It is an array consisting of RequestParameter data.
   */
  requestParameters?: DescribeApiDocResponseBodyRequestParameters;
  /**
   * @remarks
   * The sample response.
   * 
   * @example
   * {\\n  \\"status\\": 0,\\n  \\"data\\": {\\n    \\"count\\": 1,\\n    \\"list\\": [\\n      \\"352\\"\\n    ]\\n  },\\n  \\"message\\": \\"success\\"\\n}
   */
  resultSample?: string;
  /**
   * @remarks
   * The return value type.
   * 
   * @example
   * JSON
   */
  resultType?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * Indicates whether the API is public. Valid values: PUBLIC and PRIVATE.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authType: 'AuthType',
      deployedTime: 'DeployedTime',
      description: 'Description',
      disableInternet: 'DisableInternet',
      errorCodeSamples: 'ErrorCodeSamples',
      failResultSample: 'FailResultSample',
      forceNonceCheck: 'ForceNonceCheck',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      requestConfig: 'RequestConfig',
      requestId: 'RequestId',
      requestParameters: 'RequestParameters',
      resultSample: 'ResultSample',
      resultType: 'ResultType',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authType: 'string',
      deployedTime: 'string',
      description: 'string',
      disableInternet: 'boolean',
      errorCodeSamples: DescribeApiDocResponseBodyErrorCodeSamples,
      failResultSample: 'string',
      forceNonceCheck: 'boolean',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      requestConfig: DescribeApiDocResponseBodyRequestConfig,
      requestId: 'string',
      requestParameters: DescribeApiDocResponseBodyRequestParameters,
      resultSample: 'string',
      resultType: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  validate() {
    if(this.errorCodeSamples && typeof (this.errorCodeSamples as any).validate === 'function') {
      (this.errorCodeSamples as any).validate();
    }
    if(this.requestConfig && typeof (this.requestConfig as any).validate === 'function') {
      (this.requestConfig as any).validate();
    }
    if(this.requestParameters && typeof (this.requestParameters as any).validate === 'function') {
      (this.requestParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

