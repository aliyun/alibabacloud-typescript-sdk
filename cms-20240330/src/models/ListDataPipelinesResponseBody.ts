// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigAssignments extends $dara.Model {
  /**
   * @remarks
   * The assignment expression.
   * 
   * @example
   * duration / 1000000.0
   */
  expression?: string;
  /**
   * @remarks
   * The output field.
   * 
   * @example
   * latency_ms
   */
  field?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      field: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigProjections extends $dara.Model {
  /**
   * @remarks
   * The source field.
   * 
   * @example
   * serviceName
   */
  source?: string;
  /**
   * @remarks
   * The target field.
   * 
   * @example
   * service
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigRules extends $dara.Model {
  /**
   * @remarks
   * The length of the prefix to retain.
   * 
   * @example
   * 2
   */
  keepPrefix?: number;
  /**
   * @remarks
   * The length of the suffix to retain.
   * 
   * @example
   * 2
   */
  keepSuffix?: number;
  /**
   * @remarks
   * The sensitive keywords.
   */
  keys?: string[];
  /**
   * @remarks
   * The mask character.
   * 
   * @example
   * *
   */
  maskChar?: string;
  /**
   * @remarks
   * The masking mode.
   * 
   * @example
   * keyword
   */
  mode?: string;
  /**
   * @remarks
   * The built-in sensitive types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      keepPrefix: 'keepPrefix',
      keepSuffix: 'keepSuffix',
      keys: 'keys',
      maskChar: 'maskChar',
      mode: 'mode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepPrefix: 'number',
      keepSuffix: 'number',
      keys: { 'type': 'array', 'itemType': 'string' },
      maskChar: 'string',
      mode: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeConditionsField extends $dara.Model {
  /**
   * @remarks
   * The JSON object container.
   * 
   * @example
   * {}
   */
  container?: string;
  /**
   * @remarks
   * The reference data type.
   * 
   * @example
   * ifconfig
   */
  kind?: string;
  /**
   * @remarks
   * The field or dimension name.
   * 
   * @example
   * 007
   */
  name?: string;
  /**
   * @remarks
   * The JSON literal key path.
   */
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      container: 'container',
      kind: 'kind',
      name: 'name',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: 'string',
      kind: 'string',
      name: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeConditions extends $dara.Model {
  /**
   * @remarks
   * The field reference.
   */
  field?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeConditionsField;
  /**
   * @remarks
   * The match type.
   * 
   * @example
   * GLOB
   */
  matchType?: string;
  /**
   * @remarks
   * The match values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      matchType: 'matchType',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeConditionsField,
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.field && typeof (this.field as any).validate === 'function') {
      (this.field as any).validate();
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeMetricName extends $dara.Model {
  /**
   * @remarks
   * The match type.
   * 
   * @example
   * EXACT
   */
  matchType?: string;
  /**
   * @remarks
   * The metric names.
   * 
   * @example
   * ["http_requests_total"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeServiceName extends $dara.Model {
  /**
   * @remarks
   * The match type.
   * 
   * @example
   * EXACT
   */
  matchType?: string;
  /**
   * @remarks
   * The match values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScope extends $dara.Model {
  /**
   * @remarks
   * The additional field conditions.
   */
  conditions?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeConditions[];
  /**
   * @remarks
   * The metric name scope.
   */
  metricName?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeMetricName;
  /**
   * @remarks
   * The service name scope.
   */
  serviceName?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeServiceName;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      metricName: 'metricName',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeConditions },
      metricName: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeMetricName,
      serviceName: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScopeServiceName,
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.metricName && typeof (this.metricName as any).validate === 'function') {
      (this.metricName as any).validate();
    }
    if(this.serviceName && typeof (this.serviceName as any).validate === 'function') {
      (this.serviceName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigSelector extends $dara.Model {
  /**
   * @remarks
   * The list of service names.
   * 
   * @example
   * ["checkout-*","order-service"]
   */
  serviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceNames: 'serviceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigTarget extends $dara.Model {
  /**
   * @remarks
   * The target workspace.
   * 
   * @example
   * target-checkout-ws
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfig extends $dara.Model {
  /**
   * @remarks
   * The list of applications.
   */
  applications?: string[];
  /**
   * @remarks
   * The list of field assignments.
   */
  assignments?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigAssignments[];
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * attributes["http.route"] != "/health"
   */
  expression?: string;
  /**
   * @remarks
   * The list of fields.
   */
  fields?: string[];
  /**
   * @remarks
   * The extended parameters.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The list of field projections.
   */
  projections?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigProjections[];
  /**
   * @remarks
   * The list of masking rules.
   */
  rules?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigRules[];
  /**
   * @remarks
   * The scope in which the pipeline processing processor takes effect.
   */
  scope?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScope;
  /**
   * @remarks
   * The SPL script.
   * 
   * @example
   * * | extend latency_ms = duration / 1000000
   */
  script?: string;
  /**
   * @remarks
   * The service selector.
   */
  selector?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigSelector;
  /**
   * @remarks
   * The processing target.
   */
  target?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigTarget;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      assignments: 'assignments',
      expression: 'expression',
      fields: 'fields',
      parameters: 'parameters',
      projections: 'projections',
      rules: 'rules',
      scope: 'scope',
      script: 'script',
      selector: 'selector',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': 'string' },
      assignments: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigAssignments },
      expression: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      projections: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigProjections },
      rules: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigRules },
      scope: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigScope,
      script: 'string',
      selector: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigSelector,
      target: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfigTarget,
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    if(Array.isArray(this.assignments)) {
      $dara.Model.validateArray(this.assignments);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.projections)) {
      $dara.Model.validateArray(this.projections);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    if(this.selector && typeof (this.selector as any).validate === 'function') {
      (this.selector as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputsProcessors extends $dara.Model {
  /**
   * @remarks
   * The processor configuration.
   */
  config?: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfig;
  /**
   * @remarks
   * The processor name.
   * 
   * @example
   * drop-health-check
   */
  name?: string;
  /**
   * @remarks
   * The processor type.
   * 
   * @example
   * filter
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListDataPipelinesResponseBodyPipelinesOutputsProcessorsConfig,
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesOutputs extends $dara.Model {
  /**
   * @remarks
   * The output name.
   * 
   * @example
   * checkout_route
   */
  name?: string;
  /**
   * @remarks
   * The branch processors.
   */
  processors?: ListDataPipelinesResponseBodyPipelinesOutputsProcessors[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      processors: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesOutputsProcessors },
    };
  }

  validate() {
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigAssignments extends $dara.Model {
  /**
   * @remarks
   * The assignment expression.
   * 
   * @example
   * duration / 1000000.0
   */
  expression?: string;
  /**
   * @remarks
   * The output field.
   * 
   * @example
   * latency_ms
   */
  field?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
      field: 'field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      field: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigProjections extends $dara.Model {
  /**
   * @remarks
   * The source field.
   * 
   * @example
   * serviceName
   */
  source?: string;
  /**
   * @remarks
   * The target field.
   * 
   * @example
   * service
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigRules extends $dara.Model {
  /**
   * @remarks
   * The length of the prefix to retain.
   * 
   * @example
   * 2
   */
  keepPrefix?: number;
  /**
   * @remarks
   * The length of the suffix to retain.
   * 
   * @example
   * 2
   */
  keepSuffix?: number;
  /**
   * @remarks
   * The sensitive keywords.
   */
  keys?: string[];
  /**
   * @remarks
   * The mask character.
   * 
   * @example
   * *
   */
  maskChar?: string;
  /**
   * @remarks
   * The masking mode.
   * 
   * @example
   * keyword
   */
  mode?: string;
  /**
   * @remarks
   * The built-in sensitive types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      keepPrefix: 'keepPrefix',
      keepSuffix: 'keepSuffix',
      keys: 'keys',
      maskChar: 'maskChar',
      mode: 'mode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepPrefix: 'number',
      keepSuffix: 'number',
      keys: { 'type': 'array', 'itemType': 'string' },
      maskChar: 'string',
      mode: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeConditionsField extends $dara.Model {
  /**
   * @remarks
   * The JSON object container.
   * 
   * @example
   * attributes
   */
  container?: string;
  /**
   * @remarks
   * The reference data type.
   * 
   * @example
   * Namespace
   */
  kind?: string;
  /**
   * @remarks
   * The field or dimension name.
   * 
   * @example
   * cloud-acs-ecs-monitor-1768184111425_acs.metric.prometheus_ecs_userid_cn-hangzhou/rw-918c25ad26e2f45260d304d298b5
   */
  name?: string;
  /**
   * @remarks
   * The JSON literal key path.
   */
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      container: 'container',
      kind: 'kind',
      name: 'name',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: 'string',
      kind: 'string',
      name: 'string',
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeConditions extends $dara.Model {
  /**
   * @remarks
   * The field reference.
   */
  field?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeConditionsField;
  /**
   * @remarks
   * The match type.
   * 
   * @example
   * EXACT
   */
  matchType?: string;
  /**
   * @remarks
   * The match values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      matchType: 'matchType',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeConditionsField,
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.field && typeof (this.field as any).validate === 'function') {
      (this.field as any).validate();
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeMetricName extends $dara.Model {
  /**
   * @remarks
   * The match type.
   * 
   * @example
   * EXACT
   */
  matchType?: string;
  /**
   * @remarks
   * The metric names.
   * 
   * @example
   * ["http_requests_total"]
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeServiceName extends $dara.Model {
  /**
   * @remarks
   * The match type.
   * 
   * @example
   * EXACT
   */
  matchType?: string;
  /**
   * @remarks
   * The match values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigScope extends $dara.Model {
  /**
   * @remarks
   * The additional field conditions.
   */
  conditions?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeConditions[];
  /**
   * @remarks
   * The metric name scope.
   */
  metricName?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeMetricName;
  /**
   * @remarks
   * The service name scope.
   */
  serviceName?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeServiceName;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      metricName: 'metricName',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeConditions },
      metricName: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeMetricName,
      serviceName: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScopeServiceName,
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.metricName && typeof (this.metricName as any).validate === 'function') {
      (this.metricName as any).validate();
    }
    if(this.serviceName && typeof (this.serviceName as any).validate === 'function') {
      (this.serviceName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigSelector extends $dara.Model {
  /**
   * @remarks
   * The list of service names.
   * 
   * @example
   * ["checkout-*","order-service"]
   */
  serviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceNames: 'serviceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfigTarget extends $dara.Model {
  /**
   * @remarks
   * The target workspace.
   * 
   * @example
   * target-checkout-ws
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessorsConfig extends $dara.Model {
  /**
   * @remarks
   * The list of applications.
   */
  applications?: string[];
  /**
   * @remarks
   * The list of field assignments.
   */
  assignments?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigAssignments[];
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * attributes["http.route"] != "/health"
   */
  expression?: string;
  /**
   * @remarks
   * The list of fields.
   */
  fields?: string[];
  /**
   * @remarks
   * The extended parameters.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The list of field projections.
   */
  projections?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigProjections[];
  /**
   * @remarks
   * The list of masking rules.
   */
  rules?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigRules[];
  /**
   * @remarks
   * The scope in which the pipeline processing takes effect.
   */
  scope?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScope;
  /**
   * @remarks
   * The SPL script.
   * 
   * @example
   * * | extend latency_ms = duration / 1000000
   */
  script?: string;
  /**
   * @remarks
   * The service selector.
   */
  selector?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigSelector;
  /**
   * @remarks
   * The processing target.
   */
  target?: ListDataPipelinesResponseBodyPipelinesProcessorsConfigTarget;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      assignments: 'assignments',
      expression: 'expression',
      fields: 'fields',
      parameters: 'parameters',
      projections: 'projections',
      rules: 'rules',
      scope: 'scope',
      script: 'script',
      selector: 'selector',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': 'string' },
      assignments: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesProcessorsConfigAssignments },
      expression: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      projections: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesProcessorsConfigProjections },
      rules: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesProcessorsConfigRules },
      scope: ListDataPipelinesResponseBodyPipelinesProcessorsConfigScope,
      script: 'string',
      selector: ListDataPipelinesResponseBodyPipelinesProcessorsConfigSelector,
      target: ListDataPipelinesResponseBodyPipelinesProcessorsConfigTarget,
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    if(Array.isArray(this.assignments)) {
      $dara.Model.validateArray(this.assignments);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.projections)) {
      $dara.Model.validateArray(this.projections);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    if(this.selector && typeof (this.selector as any).validate === 'function') {
      (this.selector as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesProcessors extends $dara.Model {
  /**
   * @remarks
   * The processor configuration.
   */
  config?: ListDataPipelinesResponseBodyPipelinesProcessorsConfig;
  /**
   * @remarks
   * The processor name.
   * 
   * @example
   * drop-health-check
   */
  name?: string;
  /**
   * @remarks
   * The processor type.
   * 
   * @example
   * filter
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListDataPipelinesResponseBodyPipelinesProcessorsConfig,
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesSinks extends $dara.Model {
  /**
   * @remarks
   * The list of datasets.
   */
  datasets?: string[];
  /**
   * @remarks
   * SLS Logstore
   * 
   * @example
   * error-spans
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the output destination.
   * 
   * @example
   * error-archive
   */
  name?: string;
  /**
   * @remarks
   * SLS Project
   * 
   * @example
   * customer-project
   */
  project?: string;
  /**
   * @remarks
   * The type of the output destination.
   * 
   * @example
   * logstore
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      datasets: 'datasets',
      logstore: 'logstore',
      name: 'name',
      project: 'project',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': 'string' },
      logstore: 'string',
      name: 'string',
      project: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesSourceConfigTimeRange extends $dara.Model {
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1722844800
   */
  from?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1722848400
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesSourceConfig extends $dara.Model {
  /**
   * @remarks
   * The run mode.
   * 
   * @example
   * continuous
   */
  runMode?: string;
  /**
   * @remarks
   * The read start point.
   * 
   * @example
   * latest
   */
  startFrom?: string;
  /**
   * @remarks
   * The backfill time range.
   */
  timeRange?: ListDataPipelinesResponseBodyPipelinesSourceConfigTimeRange;
  static names(): { [key: string]: string } {
    return {
      runMode: 'runMode',
      startFrom: 'startFrom',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runMode: 'string',
      startFrom: 'string',
      timeRange: ListDataPipelinesResponseBodyPipelinesSourceConfigTimeRange,
    };
  }

  validate() {
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelinesSource extends $dara.Model {
  /**
   * @remarks
   * The datasource config.
   */
  config?: ListDataPipelinesResponseBodyPipelinesSourceConfig;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * traces-default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListDataPipelinesResponseBodyPipelinesSourceConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBodyPipelines extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-08-10T05:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * Export selected trace services to the target workspace.
   */
  description?: string;
  /**
   * @remarks
   * The pipeline type.
   * 
   * This parameter is required.
   * 
   * @example
   * export
   */
  kind?: string;
  /**
   * @remarks
   * The named outputs.
   * 
   * This parameter is required.
   */
  outputs?: ListDataPipelinesResponseBodyPipelinesOutputs[];
  /**
   * @remarks
   * The pipeline name.
   * 
   * This parameter is required.
   * 
   * @example
   * export-traces-to-prod
   */
  pipelineName?: string;
  /**
   * @remarks
   * The common processors.
   * 
   * This parameter is required.
   */
  processors?: ListDataPipelinesResponseBodyPipelinesProcessors[];
  /**
   * @remarks
   * The signal type.
   * 
   * This parameter is required.
   * 
   * @example
   * traces
   */
  signalType?: string;
  /**
   * @remarks
   * The output destinations.
   * 
   * This parameter is required.
   */
  sinks?: ListDataPipelinesResponseBodyPipelinesSinks[];
  /**
   * @remarks
   * The data source.
   * 
   * This parameter is required.
   */
  source?: ListDataPipelinesResponseBodyPipelinesSource;
  /**
   * @remarks
   * The running status.
   * 
   * This parameter is required.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * Pipeline is running.
   */
  statusMessage?: string;
  /**
   * @remarks
   * The update time.
   * 
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-08-10T05:10:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The configuration version.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      kind: 'kind',
      outputs: 'outputs',
      pipelineName: 'pipelineName',
      processors: 'processors',
      signalType: 'signalType',
      sinks: 'sinks',
      source: 'source',
      status: 'status',
      statusMessage: 'statusMessage',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      kind: 'string',
      outputs: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesOutputs },
      pipelineName: 'string',
      processors: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesProcessors },
      signalType: 'string',
      sinks: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelinesSinks },
      source: ListDataPipelinesResponseBodyPipelinesSource,
      status: 'string',
      statusMessage: 'string',
      updateTime: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    if(Array.isArray(this.processors)) {
      $dara.Model.validateArray(this.processors);
    }
    if(Array.isArray(this.sinks)) {
      $dara.Model.validateArray(this.sinks);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataPipelinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of data pipelines.
   */
  pipelines?: ListDataPipelinesResponseBodyPipelines[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pipelines: 'pipelines',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pipelines: { 'type': 'array', 'itemType': ListDataPipelinesResponseBodyPipelines },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelines)) {
      $dara.Model.validateArray(this.pipelines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

