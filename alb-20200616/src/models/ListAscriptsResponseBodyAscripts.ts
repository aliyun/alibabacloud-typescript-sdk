// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAScriptsResponseBodyAScripts extends $dara.Model {
  /**
   * @remarks
   * The AScript rule ID.
   * 
   * @example
   * as-aznwocxofkakf7****
   */
  AScriptId?: string;
  /**
   * @remarks
   * The name of the AScript rule.
   * 
   * @example
   * test
   */
  AScriptName?: string;
  /**
   * @remarks
   * The status of the AScript rule. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **Configuring**
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  AScriptStatus?: string;
  /**
   * @remarks
   * Indicates whether the AScript rule is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-t0w1m9r6suiwmc****
   */
  listenerId?: string;
  /**
   * @remarks
   * The Application Load Balancer (ALB) instance ID.
   * 
   * @example
   * alb-vv9rg2ub31tyec****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The content of the AScript rule.
   * 
   * @example
   * {test}
   */
  scriptContent?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptId: 'AScriptId',
      AScriptName: 'AScriptName',
      AScriptStatus: 'AScriptStatus',
      enabled: 'Enabled',
      listenerId: 'ListenerId',
      loadBalancerId: 'LoadBalancerId',
      scriptContent: 'ScriptContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptId: 'string',
      AScriptName: 'string',
      AScriptStatus: 'string',
      enabled: 'boolean',
      listenerId: 'string',
      loadBalancerId: 'string',
      scriptContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

