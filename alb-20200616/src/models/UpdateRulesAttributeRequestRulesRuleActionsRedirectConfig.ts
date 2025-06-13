// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig extends $dara.Model {
  host?: string;
  httpCode?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

