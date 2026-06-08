// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAutoShutdownPoliciesResponseBodyAutoShutdownPoliciesConditions extends $dara.Model {
  context?: { [key: string]: any };
  /**
   * @example
   * IdleDuration > 1440 min AND CpuUtilization <= 1%
   */
  expression?: string;
  /**
   * @example
   * Workspace
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      expression: 'Expression',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      expression: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(this.context) {
      $dara.Model.validateMap(this.context);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAutoShutdownPoliciesResponseBodyAutoShutdownPolicies extends $dara.Model {
  conditions?: QueryAutoShutdownPoliciesResponseBodyAutoShutdownPoliciesConditions[];
  /**
   * @deprecated
   */
  context?: { [key: string]: any };
  /**
   * @example
   * IdleDuration > 1440 min AND CpuUtilization <= 1%
   * 
   * @deprecated
   */
  expression?: string;
  /**
   * @example
   * dsw-05cefd0be2e5a278
   */
  instanceId?: string;
  /**
   * @example
   * Workspace
   * 
   * @deprecated
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      context: 'Context',
      expression: 'Expression',
      instanceId: 'InstanceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': QueryAutoShutdownPoliciesResponseBodyAutoShutdownPoliciesConditions },
      context: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      expression: 'string',
      instanceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.context) {
      $dara.Model.validateMap(this.context);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAutoShutdownPoliciesResponseBody extends $dara.Model {
  autoShutdownPolicies?: QueryAutoShutdownPoliciesResponseBodyAutoShutdownPolicies[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoShutdownPolicies: 'AutoShutdownPolicies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoShutdownPolicies: { 'type': 'array', 'itemType': QueryAutoShutdownPoliciesResponseBodyAutoShutdownPolicies },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.autoShutdownPolicies)) {
      $dara.Model.validateArray(this.autoShutdownPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

