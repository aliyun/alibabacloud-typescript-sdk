// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig";
import { UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig";
import { UpdateRulesAttributeRequestRulesRuleConditionsHostConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsHostConfig";
import { UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig";
import { UpdateRulesAttributeRequestRulesRuleConditionsPathConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsPathConfig";
import { UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig";
import { UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig";
import { UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig";
import { UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig } from "./UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig";


export class UpdateRulesAttributeRequestRulesRuleConditions extends $dara.Model {
  cookieConfig?: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig;
  headerConfig?: UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig;
  hostConfig?: UpdateRulesAttributeRequestRulesRuleConditionsHostConfig;
  methodConfig?: UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig;
  pathConfig?: UpdateRulesAttributeRequestRulesRuleConditionsPathConfig;
  queryStringConfig?: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig;
  responseHeaderConfig?: UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig;
  responseStatusCodeConfig?: UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig;
  sourceIpConfig?: UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig;
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
      cookieConfig: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig,
      headerConfig: UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig,
      hostConfig: UpdateRulesAttributeRequestRulesRuleConditionsHostConfig,
      methodConfig: UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig,
      pathConfig: UpdateRulesAttributeRequestRulesRuleConditionsPathConfig,
      queryStringConfig: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig,
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

