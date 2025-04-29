// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportSwaggerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Swagger text content.
   * 
   * This parameter is required.
   * 
   * @example
   * "A Swagger API definition in YAML"
   */
  data?: string;
  /**
   * @remarks
   * The Swagger text format:
   * 
   * *   json
   * *   yaml
   * 
   * This parameter is required.
   * 
   * @example
   * yaml
   */
  dataFormat?: string;
  /**
   * @remarks
   * The pre-inspection.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The global conditions.
   * 
   * @example
   * {}
   */
  globalConditionShrink?: string;
  /**
   * @remarks
   * The ID of the API group to which the Swagger is imported.
   * 
   * This parameter is required.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the existing API.
   * 
   * APIs with the same HTTP request type and backend request path are considered the same.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dataFormat: 'DataFormat',
      dryRun: 'DryRun',
      globalConditionShrink: 'GlobalCondition',
      groupId: 'GroupId',
      overwrite: 'Overwrite',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dataFormat: 'string',
      dryRun: 'boolean',
      globalConditionShrink: 'string',
      groupId: 'string',
      overwrite: 'boolean',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

