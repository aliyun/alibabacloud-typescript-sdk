// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestRuleConditionsCookieConfig } from "./CreateRuleRequestRuleConditionsCookieConfig";
import { CreateRuleRequestRuleConditionsHeaderConfig } from "./CreateRuleRequestRuleConditionsHeaderConfig";
import { CreateRuleRequestRuleConditionsHostConfig } from "./CreateRuleRequestRuleConditionsHostConfig";
import { CreateRuleRequestRuleConditionsMethodConfig } from "./CreateRuleRequestRuleConditionsMethodConfig";
import { CreateRuleRequestRuleConditionsPathConfig } from "./CreateRuleRequestRuleConditionsPathConfig";
import { CreateRuleRequestRuleConditionsQueryStringConfig } from "./CreateRuleRequestRuleConditionsQueryStringConfig";
import { CreateRuleRequestRuleConditionsResponseHeaderConfig } from "./CreateRuleRequestRuleConditionsResponseHeaderConfig";
import { CreateRuleRequestRuleConditionsResponseStatusCodeConfig } from "./CreateRuleRequestRuleConditionsResponseStatusCodeConfig";
import { CreateRuleRequestRuleConditionsSourceIpConfig } from "./CreateRuleRequestRuleConditionsSourceIpConfig";


export class CreateRuleRequestRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs of the cookie.
   */
  cookieConfig?: CreateRuleRequestRuleConditionsCookieConfig;
  /**
   * @remarks
   * The configuration of the header.
   */
  headerConfig?: CreateRuleRequestRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The configuration of the host.
   */
  hostConfig?: CreateRuleRequestRuleConditionsHostConfig;
  /**
   * @remarks
   * The configurations of the request method.
   */
  methodConfig?: CreateRuleRequestRuleConditionsMethodConfig;
  /**
   * @remarks
   * The configurations of the URL to which requests are forwarded.
   */
  pathConfig?: CreateRuleRequestRuleConditionsPathConfig;
  /**
   * @remarks
   * The configuration of the query strings.
   */
  queryStringConfig?: CreateRuleRequestRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The configuration of headers.
   */
  responseHeaderConfig?: CreateRuleRequestRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The configuration of the response status codes.
   */
  responseStatusCodeConfig?: CreateRuleRequestRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * Configuration of traffic matching based on source IP addresses. This parameter is required and valid when **Type** is set to **SourceIP**.
   */
  sourceIpConfig?: CreateRuleRequestRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of forwarding rule. Valid values:
   * 
   * *   **Host**: Requests are distributed based on hosts.
   * *   **Path**: Requests are distributed based on paths.
   * *   **Header**: Requests are distributed based on HTTP headers.
   * *   **QueryString**: Requests are distributed based on query strings.
   * *   **Method**: Requests are distributed based on request methods.
   * *   **Cookie**: Requests are distributed based on cookies.
   * *   **SourceIp**: Requests are forwarded based on source IP addresses.
   * *   **ResponseHeader**: Requests are forwarded based on HTTP response headers.
   * *   **ResponseStatusCode**: Requests are forwarded based on response status codes.
   * 
   * This parameter is required.
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
      cookieConfig: CreateRuleRequestRuleConditionsCookieConfig,
      headerConfig: CreateRuleRequestRuleConditionsHeaderConfig,
      hostConfig: CreateRuleRequestRuleConditionsHostConfig,
      methodConfig: CreateRuleRequestRuleConditionsMethodConfig,
      pathConfig: CreateRuleRequestRuleConditionsPathConfig,
      queryStringConfig: CreateRuleRequestRuleConditionsQueryStringConfig,
      responseHeaderConfig: CreateRuleRequestRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: CreateRuleRequestRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: CreateRuleRequestRuleConditionsSourceIpConfig,
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

