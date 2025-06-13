// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyRulesRuleConditionsCookieConfig } from "./ListRulesResponseBodyRulesRuleConditionsCookieConfig";
import { ListRulesResponseBodyRulesRuleConditionsHeaderConfig } from "./ListRulesResponseBodyRulesRuleConditionsHeaderConfig";
import { ListRulesResponseBodyRulesRuleConditionsHostConfig } from "./ListRulesResponseBodyRulesRuleConditionsHostConfig";
import { ListRulesResponseBodyRulesRuleConditionsMethodConfig } from "./ListRulesResponseBodyRulesRuleConditionsMethodConfig";
import { ListRulesResponseBodyRulesRuleConditionsPathConfig } from "./ListRulesResponseBodyRulesRuleConditionsPathConfig";
import { ListRulesResponseBodyRulesRuleConditionsQueryStringConfig } from "./ListRulesResponseBodyRulesRuleConditionsQueryStringConfig";
import { ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig } from "./ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig";
import { ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig } from "./ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig";
import { ListRulesResponseBodyRulesRuleConditionsSourceIpConfig } from "./ListRulesResponseBodyRulesRuleConditionsSourceIpConfig";


export class ListRulesResponseBodyRulesRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs of the cookie.
   */
  cookieConfig?: ListRulesResponseBodyRulesRuleConditionsCookieConfig;
  /**
   * @remarks
   * The configuration of the header.
   */
  headerConfig?: ListRulesResponseBodyRulesRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The configuration of the hosts.
   */
  hostConfig?: ListRulesResponseBodyRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The configurations of the request methods.
   */
  methodConfig?: ListRulesResponseBodyRulesRuleConditionsMethodConfig;
  /**
   * @remarks
   * The configurations of the forwarding URLs.
   */
  pathConfig?: ListRulesResponseBodyRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The configurations of the query strings.
   */
  queryStringConfig?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The HTTP header in responses.
   */
  responseHeaderConfig?: ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The configurations of the response status codes.
   */
  responseStatusCodeConfig?: ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * Traffic matching based on source IP addresses.
   */
  sourceIpConfig?: ListRulesResponseBodyRulesRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of forwarding rule. Valid values:
   * 
   * *   **Host**: Responses are forwarded based on hosts.
   * *   **Path**: Responses are forwarded based on URLs.
   * *   **Header**: Responses are forwarded based on HTTP headers.
   * *   **QueryString**: Responses are forwarded based on query strings.
   * *   **Method**: Responses are forwarded based on request methods.
   * *   **Cookie**: Responses are forwarded based on cookies.
   * *   **SourceIp**: Responses are forwarded based on source IP addresses.
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
      cookieConfig: ListRulesResponseBodyRulesRuleConditionsCookieConfig,
      headerConfig: ListRulesResponseBodyRulesRuleConditionsHeaderConfig,
      hostConfig: ListRulesResponseBodyRulesRuleConditionsHostConfig,
      methodConfig: ListRulesResponseBodyRulesRuleConditionsMethodConfig,
      pathConfig: ListRulesResponseBodyRulesRuleConditionsPathConfig,
      queryStringConfig: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: ListRulesResponseBodyRulesRuleConditionsSourceIpConfig,
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

