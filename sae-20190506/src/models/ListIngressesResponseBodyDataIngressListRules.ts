// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIngressesResponseBodyDataIngressListRulesRuleActions } from "./ListIngressesResponseBodyDataIngressListRulesRuleActions";


export class ListIngressesResponseBodyDataIngressListRules extends $dara.Model {
  appId?: string;
  appName?: string;
  backendProtocol?: string;
  containerPort?: number;
  domain?: string;
  path?: string;
  rewritePath?: string;
  ruleActions?: ListIngressesResponseBodyDataIngressListRulesRuleActions[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backendProtocol: 'BackendProtocol',
      containerPort: 'ContainerPort',
      domain: 'Domain',
      path: 'Path',
      rewritePath: 'RewritePath',
      ruleActions: 'RuleActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backendProtocol: 'string',
      containerPort: 'number',
      domain: 'string',
      path: 'string',
      rewritePath: 'string',
      ruleActions: { 'type': 'array', 'itemType': ListIngressesResponseBodyDataIngressListRulesRuleActions },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

