// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataPipelineRequestOutputsProcessorsConfigAssignments extends $dara.Model {
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

export class CreateDataPipelineRequestOutputsProcessorsConfigProjections extends $dara.Model {
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

export class CreateDataPipelineRequestOutputsProcessorsConfigRules extends $dara.Model {
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

export class CreateDataPipelineRequestOutputsProcessorsConfigScopeConditionsField extends $dara.Model {
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
   * label
   */
  kind?: string;
  /**
   * @remarks
   * The field or dimension name.
   * 
   * @example
   * serviceName
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

export class CreateDataPipelineRequestOutputsProcessorsConfigScopeConditions extends $dara.Model {
  /**
   * @remarks
   * The field reference.
   */
  field?: CreateDataPipelineRequestOutputsProcessorsConfigScopeConditionsField;
  /**
   * @remarks
   * The matching method.
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
      field: CreateDataPipelineRequestOutputsProcessorsConfigScopeConditionsField,
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

export class CreateDataPipelineRequestOutputsProcessorsConfigScopeMetricName extends $dara.Model {
  /**
   * @remarks
   * The matching method.
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

export class CreateDataPipelineRequestOutputsProcessorsConfigScopeServiceName extends $dara.Model {
  /**
   * @remarks
   * The matching method.
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

export class CreateDataPipelineRequestOutputsProcessorsConfigScope extends $dara.Model {
  /**
   * @remarks
   * The additional field conditions.
   */
  conditions?: CreateDataPipelineRequestOutputsProcessorsConfigScopeConditions[];
  /**
   * @remarks
   * The metric name scope.
   */
  metricName?: CreateDataPipelineRequestOutputsProcessorsConfigScopeMetricName;
  /**
   * @remarks
   * The service name scope.
   */
  serviceName?: CreateDataPipelineRequestOutputsProcessorsConfigScopeServiceName;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      metricName: 'metricName',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': CreateDataPipelineRequestOutputsProcessorsConfigScopeConditions },
      metricName: CreateDataPipelineRequestOutputsProcessorsConfigScopeMetricName,
      serviceName: CreateDataPipelineRequestOutputsProcessorsConfigScopeServiceName,
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

export class CreateDataPipelineRequestOutputsProcessorsConfigSelector extends $dara.Model {
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

export class CreateDataPipelineRequestOutputsProcessorsConfigTarget extends $dara.Model {
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

export class CreateDataPipelineRequestOutputsProcessorsConfig extends $dara.Model {
  /**
   * @remarks
   * The list of applications.
   */
  applications?: string[];
  /**
   * @remarks
   * The list of field assignments.
   */
  assignments?: CreateDataPipelineRequestOutputsProcessorsConfigAssignments[];
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
  projections?: CreateDataPipelineRequestOutputsProcessorsConfigProjections[];
  /**
   * @remarks
   * The list of masking rules.
   */
  rules?: CreateDataPipelineRequestOutputsProcessorsConfigRules[];
  /**
   * @remarks
   * The pipeline processing scope.
   */
  scope?: CreateDataPipelineRequestOutputsProcessorsConfigScope;
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
  selector?: CreateDataPipelineRequestOutputsProcessorsConfigSelector;
  /**
   * @remarks
   * The processing target.
   */
  target?: CreateDataPipelineRequestOutputsProcessorsConfigTarget;
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
      assignments: { 'type': 'array', 'itemType': CreateDataPipelineRequestOutputsProcessorsConfigAssignments },
      expression: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      projections: { 'type': 'array', 'itemType': CreateDataPipelineRequestOutputsProcessorsConfigProjections },
      rules: { 'type': 'array', 'itemType': CreateDataPipelineRequestOutputsProcessorsConfigRules },
      scope: CreateDataPipelineRequestOutputsProcessorsConfigScope,
      script: 'string',
      selector: CreateDataPipelineRequestOutputsProcessorsConfigSelector,
      target: CreateDataPipelineRequestOutputsProcessorsConfigTarget,
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

export class CreateDataPipelineRequestOutputsProcessors extends $dara.Model {
  /**
   * @remarks
   * The processor configuration.
   */
  config?: CreateDataPipelineRequestOutputsProcessorsConfig;
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
      config: CreateDataPipelineRequestOutputsProcessorsConfig,
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

export class CreateDataPipelineRequestOutputs extends $dara.Model {
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
  processors?: CreateDataPipelineRequestOutputsProcessors[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      processors: { 'type': 'array', 'itemType': CreateDataPipelineRequestOutputsProcessors },
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

export class CreateDataPipelineRequestProcessorsConfigAssignments extends $dara.Model {
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

export class CreateDataPipelineRequestProcessorsConfigProjections extends $dara.Model {
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

export class CreateDataPipelineRequestProcessorsConfigRules extends $dara.Model {
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

export class CreateDataPipelineRequestProcessorsConfigScopeConditionsField extends $dara.Model {
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
   * field
   */
  kind?: string;
  /**
   * @remarks
   * The field or dimension name.
   * 
   * @example
   * serviceName
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

export class CreateDataPipelineRequestProcessorsConfigScopeConditions extends $dara.Model {
  /**
   * @remarks
   * The field reference.
   */
  field?: CreateDataPipelineRequestProcessorsConfigScopeConditionsField;
  /**
   * @remarks
   * The matching method.
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
      field: CreateDataPipelineRequestProcessorsConfigScopeConditionsField,
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

export class CreateDataPipelineRequestProcessorsConfigScopeMetricName extends $dara.Model {
  /**
   * @remarks
   * The matching method.
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

export class CreateDataPipelineRequestProcessorsConfigScopeServiceName extends $dara.Model {
  /**
   * @remarks
   * The matching method.
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

export class CreateDataPipelineRequestProcessorsConfigScope extends $dara.Model {
  /**
   * @remarks
   * The additional field conditions.
   */
  conditions?: CreateDataPipelineRequestProcessorsConfigScopeConditions[];
  /**
   * @remarks
   * The metric name scope.
   */
  metricName?: CreateDataPipelineRequestProcessorsConfigScopeMetricName;
  /**
   * @remarks
   * The service name scope.
   */
  serviceName?: CreateDataPipelineRequestProcessorsConfigScopeServiceName;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      metricName: 'metricName',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': CreateDataPipelineRequestProcessorsConfigScopeConditions },
      metricName: CreateDataPipelineRequestProcessorsConfigScopeMetricName,
      serviceName: CreateDataPipelineRequestProcessorsConfigScopeServiceName,
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

export class CreateDataPipelineRequestProcessorsConfigSelector extends $dara.Model {
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

export class CreateDataPipelineRequestProcessorsConfigTarget extends $dara.Model {
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

export class CreateDataPipelineRequestProcessorsConfig extends $dara.Model {
  /**
   * @remarks
   * The list of applications.
   */
  applications?: string[];
  /**
   * @remarks
   * The list of field assignments.
   */
  assignments?: CreateDataPipelineRequestProcessorsConfigAssignments[];
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
  projections?: CreateDataPipelineRequestProcessorsConfigProjections[];
  /**
   * @remarks
   * The list of masking rules.
   */
  rules?: CreateDataPipelineRequestProcessorsConfigRules[];
  /**
   * @remarks
   * The pipeline processing scope in which the processor takes effect.
   */
  scope?: CreateDataPipelineRequestProcessorsConfigScope;
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
  selector?: CreateDataPipelineRequestProcessorsConfigSelector;
  /**
   * @remarks
   * The processing target.
   */
  target?: CreateDataPipelineRequestProcessorsConfigTarget;
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
      assignments: { 'type': 'array', 'itemType': CreateDataPipelineRequestProcessorsConfigAssignments },
      expression: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      projections: { 'type': 'array', 'itemType': CreateDataPipelineRequestProcessorsConfigProjections },
      rules: { 'type': 'array', 'itemType': CreateDataPipelineRequestProcessorsConfigRules },
      scope: CreateDataPipelineRequestProcessorsConfigScope,
      script: 'string',
      selector: CreateDataPipelineRequestProcessorsConfigSelector,
      target: CreateDataPipelineRequestProcessorsConfigTarget,
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

export class CreateDataPipelineRequestProcessors extends $dara.Model {
  /**
   * @remarks
   * The processor configuration.
   */
  config?: CreateDataPipelineRequestProcessorsConfig;
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
      config: CreateDataPipelineRequestProcessorsConfig,
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

export class CreateDataPipelineRequestSinks extends $dara.Model {
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

export class CreateDataPipelineRequestSourceConfigTimeRange extends $dara.Model {
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

export class CreateDataPipelineRequestSourceConfig extends $dara.Model {
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
  timeRange?: CreateDataPipelineRequestSourceConfigTimeRange;
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
      timeRange: CreateDataPipelineRequestSourceConfigTimeRange,
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

export class CreateDataPipelineRequestSource extends $dara.Model {
  /**
   * @remarks
   * The datasource config.
   */
  config?: CreateDataPipelineRequestSourceConfig;
  /**
   * @remarks
   * The type of the data source.
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
      config: CreateDataPipelineRequestSourceConfig,
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

export class CreateDataPipelineRequest extends $dara.Model {
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
   * @example
   * export
   */
  kind?: string;
  /**
   * @remarks
   * The named outputs.
   */
  outputs?: CreateDataPipelineRequestOutputs[];
  /**
   * @remarks
   * The pipeline name.
   * 
   * @example
   * export-traces-to-prod
   */
  pipelineName?: string;
  /**
   * @remarks
   * The common processors.
   */
  processors?: CreateDataPipelineRequestProcessors[];
  /**
   * @remarks
   * The output destinations.
   */
  sinks?: CreateDataPipelineRequestSinks[];
  /**
   * @remarks
   * The data source.
   */
  source?: CreateDataPipelineRequestSource;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      kind: 'kind',
      outputs: 'outputs',
      pipelineName: 'pipelineName',
      processors: 'processors',
      sinks: 'sinks',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      kind: 'string',
      outputs: { 'type': 'array', 'itemType': CreateDataPipelineRequestOutputs },
      pipelineName: 'string',
      processors: { 'type': 'array', 'itemType': CreateDataPipelineRequestProcessors },
      sinks: { 'type': 'array', 'itemType': CreateDataPipelineRequestSinks },
      source: CreateDataPipelineRequestSource,
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

