// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRulesRequestRulesRuleConditionsCookieConfig } from "./CreateRulesRequestRulesRuleConditionsCookieConfig";
import { CreateRulesRequestRulesRuleConditionsHeaderConfig } from "./CreateRulesRequestRulesRuleConditionsHeaderConfig";
import { CreateRulesRequestRulesRuleConditionsHostConfig } from "./CreateRulesRequestRulesRuleConditionsHostConfig";
import { CreateRulesRequestRulesRuleConditionsMethodConfig } from "./CreateRulesRequestRulesRuleConditionsMethodConfig";
import { CreateRulesRequestRulesRuleConditionsPathConfig } from "./CreateRulesRequestRulesRuleConditionsPathConfig";
import { CreateRulesRequestRulesRuleConditionsQueryStringConfig } from "./CreateRulesRequestRulesRuleConditionsQueryStringConfig";
import { CreateRulesRequestRulesRuleConditionsResponseHeaderConfig } from "./CreateRulesRequestRulesRuleConditionsResponseHeaderConfig";
import { CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig } from "./CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig";
import { CreateRulesRequestRulesRuleConditionsSourceIpConfig } from "./CreateRulesRequestRulesRuleConditionsSourceIpConfig";


export class CreateRulesRequestRulesRuleConditions extends $dara.Model {
  cookieConfig?: CreateRulesRequestRulesRuleConditionsCookieConfig;
  headerConfig?: CreateRulesRequestRulesRuleConditionsHeaderConfig;
  hostConfig?: CreateRulesRequestRulesRuleConditionsHostConfig;
  methodConfig?: CreateRulesRequestRulesRuleConditionsMethodConfig;
  pathConfig?: CreateRulesRequestRulesRuleConditionsPathConfig;
  queryStringConfig?: CreateRulesRequestRulesRuleConditionsQueryStringConfig;
  responseHeaderConfig?: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig;
  responseStatusCodeConfig?: CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig;
  sourceIpConfig?: CreateRulesRequestRulesRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * This parameter is required.
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
      cookieConfig: CreateRulesRequestRulesRuleConditionsCookieConfig,
      headerConfig: CreateRulesRequestRulesRuleConditionsHeaderConfig,
      hostConfig: CreateRulesRequestRulesRuleConditionsHostConfig,
      methodConfig: CreateRulesRequestRulesRuleConditionsMethodConfig,
      pathConfig: CreateRulesRequestRulesRuleConditionsPathConfig,
      queryStringConfig: CreateRulesRequestRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: CreateRulesRequestRulesRuleConditionsSourceIpConfig,
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

