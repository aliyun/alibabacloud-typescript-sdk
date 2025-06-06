// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TemplateVariableValueMap } from "./TemplateVariableValueMap";


export class TemplateConfig extends $dara.Model {
  /**
   * @example
   * {"region":"cn-hangzhou"}
   */
  parameters?: { [key: string]: string };
  /**
   * @example
   * {"svc1":"svc2"}
   */
  serviceNameChanges?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * start-springboot
   */
  templateName?: string;
  variableValues?: TemplateVariableValueMap;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      serviceNameChanges: 'serviceNameChanges',
      templateName: 'templateName',
      variableValues: 'variableValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serviceNameChanges: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
      variableValues: TemplateVariableValueMap,
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.serviceNameChanges) {
      $dara.Model.validateMap(this.serviceNameChanges);
    }
    if(this.variableValues && typeof (this.variableValues as any).validate === 'function') {
      (this.variableValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

