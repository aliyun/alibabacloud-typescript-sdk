// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceExportTaskRequestExportToModule extends $dara.Model {
  /**
   * @example
   * Registry
   */
  source?: string;
  /**
   * @example
   * alibaba/security-group/alicloud
   */
  sourcePath?: string;
  /**
   * @example
   * /
   */
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestIncludeRules extends $dara.Model {
  /**
   * @example
   * ZoneId
   */
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateResourceExportTaskRequestVariables extends $dara.Model {
  properties?: string[];
  /**
   * @example
   * AliCloud::VPC::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  exportToModule?: CreateResourceExportTaskRequestExportToModule;
  includeRules?: CreateResourceExportTaskRequestIncludeRules[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * {}
   */
  ramRole?: string;
  terraformProviderVersion?: string;
  /**
   * @example
   * 1.2.6
   */
  terraformVersion?: string;
  /**
   * @example
   * Auto
   */
  triggerStrategy?: string;
  variables?: CreateResourceExportTaskRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      exportToModule: 'exportToModule',
      includeRules: 'includeRules',
      name: 'name',
      ramRole: 'ramRole',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      exportToModule: CreateResourceExportTaskRequestExportToModule,
      includeRules: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestIncludeRules },
      name: 'string',
      ramRole: 'string',
      terraformProviderVersion: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestVariables },
    };
  }

  validate() {
    if(this.exportToModule && typeof (this.exportToModule as any).validate === 'function') {
      (this.exportToModule as any).validate();
    }
    if(Array.isArray(this.includeRules)) {
      $dara.Model.validateArray(this.includeRules);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

