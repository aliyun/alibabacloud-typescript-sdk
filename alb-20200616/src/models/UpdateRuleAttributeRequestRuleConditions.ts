// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRuleAttributeRequestRuleConditionsCookieConfig } from "./UpdateRuleAttributeRequestRuleConditionsCookieConfig";
import { UpdateRuleAttributeRequestRuleConditionsHeaderConfig } from "./UpdateRuleAttributeRequestRuleConditionsHeaderConfig";
import { UpdateRuleAttributeRequestRuleConditionsHostConfig } from "./UpdateRuleAttributeRequestRuleConditionsHostConfig";
import { UpdateRuleAttributeRequestRuleConditionsMethodConfig } from "./UpdateRuleAttributeRequestRuleConditionsMethodConfig";
import { UpdateRuleAttributeRequestRuleConditionsPathConfig } from "./UpdateRuleAttributeRequestRuleConditionsPathConfig";
import { UpdateRuleAttributeRequestRuleConditionsQueryStringConfig } from "./UpdateRuleAttributeRequestRuleConditionsQueryStringConfig";
import { UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig } from "./UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig";
import { UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig } from "./UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig";
import { UpdateRuleAttributeRequestRuleConditionsSourceIpConfig } from "./UpdateRuleAttributeRequestRuleConditionsSourceIpConfig";


export class UpdateRuleAttributeRequestRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs of the cookie.
   */
  cookieConfig?: UpdateRuleAttributeRequestRuleConditionsCookieConfig;
  /**
   * @remarks
   * The configuration of the header.
   */
  headerConfig?: UpdateRuleAttributeRequestRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The configuration of the hosts.
   */
  hostConfig?: UpdateRuleAttributeRequestRuleConditionsHostConfig;
  /**
   * @remarks
   * The configuration of the request method.
   */
  methodConfig?: UpdateRuleAttributeRequestRuleConditionsMethodConfig;
  /**
   * @remarks
   * The configuration of the forwarding URL.
   */
  pathConfig?: UpdateRuleAttributeRequestRuleConditionsPathConfig;
  /**
   * @remarks
   * The configuration of the query strings.
   */
  queryStringConfig?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The configuration of headers.
   */
  responseHeaderConfig?: UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The configuration of the response status codes.
   */
  responseStatusCodeConfig?: UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * Traffic matching based on source IP addresses. You can specify up to five IP addresses, including CIDR blocks.
   */
  sourceIpConfig?: UpdateRuleAttributeRequestRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of forwarding rule. You can specify up to seven types of forwarding rule. Valid values:
   * 
   * *   **Host**: Requests are forwarded based on hosts.
   * *   **Path**: Requests are forwarded based on URLs.
   * *   **Header**: Requests are forwarded based on HTTP headers.
   * *   **QueryString**: Requests are forwarded based on query strings.
   * *   **Method**: Requests are forwarded based on request methods.
   * *   **Cookie**: Requests are forwarded based on cookies.
   * *   **SourceIp**: Requests are forwarded based on source IP addresses.
   * *   **ResponseHeader**: Requests are forwarded based on HTTP response headers.
   * *   **ResponseStatusCode**: Requests are forwarded based on response status codes.
   * 
   * @example
   * Host
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      responseHeaderConfig: 'ResponseHeaderConfig',
      responseStatusCodeConfig: 'ResponseStatusCodeConfig',
      sourceIpConfig: 'SourceIpConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: UpdateRuleAttributeRequestRuleConditionsCookieConfig,
      headerConfig: UpdateRuleAttributeRequestRuleConditionsHeaderConfig,
      hostConfig: UpdateRuleAttributeRequestRuleConditionsHostConfig,
      methodConfig: UpdateRuleAttributeRequestRuleConditionsMethodConfig,
      pathConfig: UpdateRuleAttributeRequestRuleConditionsPathConfig,
      queryStringConfig: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig,
      responseHeaderConfig: UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: UpdateRuleAttributeRequestRuleConditionsSourceIpConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.cookieConfig && typeof (this.cookieConfig as any).validate === 'function') {
      (this.cookieConfig as any).validate();
    }
    if(this.headerConfig && typeof (this.headerConfig as any).validate === 'function') {
      (this.headerConfig as any).validate();
    }
    if(this.hostConfig && typeof (this.hostConfig as any).validate === 'function') {
      (this.hostConfig as any).validate();
    }
    if(this.methodConfig && typeof (this.methodConfig as any).validate === 'function') {
      (this.methodConfig as any).validate();
    }
    if(this.pathConfig && typeof (this.pathConfig as any).validate === 'function') {
      (this.pathConfig as any).validate();
    }
    if(this.queryStringConfig && typeof (this.queryStringConfig as any).validate === 'function') {
      (this.queryStringConfig as any).validate();
    }
    if(this.responseHeaderConfig && typeof (this.responseHeaderConfig as any).validate === 'function') {
      (this.responseHeaderConfig as any).validate();
    }
    if(this.responseStatusCodeConfig && typeof (this.responseStatusCodeConfig as any).validate === 'function') {
      (this.responseStatusCodeConfig as any).validate();
    }
    if(this.sourceIpConfig && typeof (this.sourceIpConfig as any).validate === 'function') {
      (this.sourceIpConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

