// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigAssignments extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigProjections extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigRules extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeConditionsField extends $dara.Model {
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
   * label
   */
  kind?: string;
  /**
   * @remarks
   * The field or dimension name.
   * 
   * @example
   * instanceId
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeConditions extends $dara.Model {
  /**
   * @remarks
   * The field reference.
   */
  field?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeConditionsField;
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
      field: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeConditionsField,
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeMetricName extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeServiceName extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScope extends $dara.Model {
  /**
   * @remarks
   * The additional field conditions.
   */
  conditions?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeConditions[];
  /**
   * @remarks
   * The metric name scope.
   */
  metricName?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeMetricName;
  /**
   * @remarks
   * The service name scope.
   */
  serviceName?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeServiceName;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      metricName: 'metricName',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeConditions },
      metricName: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeMetricName,
      serviceName: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScopeServiceName,
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigSelector extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigTarget extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfig extends $dara.Model {
  /**
   * @remarks
   * The list of applications.
   */
  applications?: string[];
  /**
   * @remarks
   * The list of field assignments.
   */
  assignments?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigAssignments[];
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
  projections?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigProjections[];
  /**
   * @remarks
   * The list of masking rules.
   */
  rules?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigRules[];
  /**
   * @remarks
   * The scope in which the pipeline processing processor takes effect.
   */
  scope?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScope;
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
  selector?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigSelector;
  /**
   * @remarks
   * The processing target.
   */
  target?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigTarget;
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
      assignments: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigAssignments },
      expression: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      projections: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigProjections },
      rules: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigRules },
      scope: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigScope,
      script: 'string',
      selector: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigSelector,
      target: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfigTarget,
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

export class UpdateDataPipelineResponseBodyPipelineOutputsProcessors extends $dara.Model {
  /**
   * @remarks
   * The processor configuration.
   */
  config?: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfig;
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
      config: UpdateDataPipelineResponseBodyPipelineOutputsProcessorsConfig,
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

export class UpdateDataPipelineResponseBodyPipelineOutputs extends $dara.Model {
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
  processors?: UpdateDataPipelineResponseBodyPipelineOutputsProcessors[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      processors: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineOutputsProcessors },
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigAssignments extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigProjections extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigRules extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeConditionsField extends $dara.Model {
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
   * field
   */
  kind?: string;
  /**
   * @remarks
   * The field or dimension name.
   * 
   * @example
   * name
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeConditions extends $dara.Model {
  /**
   * @remarks
   * The field reference.
   */
  field?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeConditionsField;
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
      field: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeConditionsField,
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeMetricName extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeServiceName extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigScope extends $dara.Model {
  /**
   * @remarks
   * The additional field conditions.
   */
  conditions?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeConditions[];
  /**
   * @remarks
   * The metric name scope.
   */
  metricName?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeMetricName;
  /**
   * @remarks
   * The service name scope.
   */
  serviceName?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeServiceName;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      metricName: 'metricName',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeConditions },
      metricName: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeMetricName,
      serviceName: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScopeServiceName,
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigSelector extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfigTarget extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineProcessorsConfig extends $dara.Model {
  /**
   * @remarks
   * The list of applications.
   */
  applications?: string[];
  /**
   * @remarks
   * The list of field assignments.
   */
  assignments?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigAssignments[];
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
  projections?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigProjections[];
  /**
   * @remarks
   * The list of masking rules.
   */
  rules?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigRules[];
  /**
   * @remarks
   * The scope in which the pipeline processing processor takes effect.
   */
  scope?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScope;
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
  selector?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigSelector;
  /**
   * @remarks
   * The processing target.
   */
  target?: UpdateDataPipelineResponseBodyPipelineProcessorsConfigTarget;
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
      assignments: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineProcessorsConfigAssignments },
      expression: 'string',
      fields: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      projections: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineProcessorsConfigProjections },
      rules: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineProcessorsConfigRules },
      scope: UpdateDataPipelineResponseBodyPipelineProcessorsConfigScope,
      script: 'string',
      selector: UpdateDataPipelineResponseBodyPipelineProcessorsConfigSelector,
      target: UpdateDataPipelineResponseBodyPipelineProcessorsConfigTarget,
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

export class UpdateDataPipelineResponseBodyPipelineProcessors extends $dara.Model {
  /**
   * @remarks
   * The processor configuration.
   */
  config?: UpdateDataPipelineResponseBodyPipelineProcessorsConfig;
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
      config: UpdateDataPipelineResponseBodyPipelineProcessorsConfig,
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

export class UpdateDataPipelineResponseBodyPipelineSinks extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineSourceConfigTimeRange extends $dara.Model {
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

export class UpdateDataPipelineResponseBodyPipelineSourceConfig extends $dara.Model {
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
  timeRange?: UpdateDataPipelineResponseBodyPipelineSourceConfigTimeRange;
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
      timeRange: UpdateDataPipelineResponseBodyPipelineSourceConfigTimeRange,
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

export class UpdateDataPipelineResponseBodyPipelineSource extends $dara.Model {
  /**
   * @remarks
   * The datasource config.
   */
  config?: UpdateDataPipelineResponseBodyPipelineSourceConfig;
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
      config: UpdateDataPipelineResponseBodyPipelineSourceConfig,
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

export class UpdateDataPipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The time when the data pipeline was created.
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
  outputs?: UpdateDataPipelineResponseBodyPipelineOutputs[];
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
  processors?: UpdateDataPipelineResponseBodyPipelineProcessors[];
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
  sinks?: UpdateDataPipelineResponseBodyPipelineSinks[];
  /**
   * @remarks
   * The data source.
   * 
   * This parameter is required.
   */
  source?: UpdateDataPipelineResponseBodyPipelineSource;
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
      outputs: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineOutputs },
      pipelineName: 'string',
      processors: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineProcessors },
      signalType: 'string',
      sinks: { 'type': 'array', 'itemType': UpdateDataPipelineResponseBodyPipelineSinks },
      source: UpdateDataPipelineResponseBodyPipelineSource,
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

export class UpdateDataPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data pipeline.
   */
  pipeline?: UpdateDataPipelineResponseBodyPipeline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'pipeline',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: UpdateDataPipelineResponseBodyPipeline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

