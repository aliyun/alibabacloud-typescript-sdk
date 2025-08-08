// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TemplateServiceConfig } from "./TemplateServiceConfig";
import { TemplateParameterSchema } from "./TemplateParameterSchema";
import { RepositorySourceConfig } from "./RepositorySourceConfig";


export class TemplateSpecSource extends $dara.Model {
  repository?: RepositorySourceConfig;
  static names(): { [key: string]: string } {
    return {
      repository: 'repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repository: RepositorySourceConfig,
    };
  }

  validate() {
    if(this.repository && typeof (this.repository as any).validate === 'function') {
      (this.repository as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateSpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CAP
   */
  author?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AI
   */
  category?: string;
  /**
   * @example
   * Apache-1.0
   */
  license?: string;
  /**
   * @example
   * demo-package
   */
  packageName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  readme?: string;
  registryToken?: string;
  services?: { [key: string]: TemplateServiceConfig };
  source?: TemplateSpecSource;
  variables?: { [key: string]: TemplateParameterSchema };
  version?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      category: 'category',
      license: 'license',
      packageName: 'packageName',
      readme: 'readme',
      registryToken: 'registryToken',
      services: 'services',
      source: 'source',
      variables: 'variables',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      category: 'string',
      license: 'string',
      packageName: 'string',
      readme: 'string',
      registryToken: 'string',
      services: { 'type': 'map', 'keyType': 'string', 'valueType': TemplateServiceConfig },
      source: TemplateSpecSource,
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': TemplateParameterSchema },
      version: 'string',
    };
  }

  validate() {
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

