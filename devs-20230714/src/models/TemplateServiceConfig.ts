// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ArtifactMeta } from "./ArtifactMeta";
import { BuildConfig } from "./BuildConfig";
import { SourceConfig } from "./SourceConfig";
import { TemplateParameterSchema } from "./TemplateParameterSchema";


export class TemplateServiceConfig extends $dara.Model {
  artifact?: ArtifactMeta;
  build?: BuildConfig;
  /**
   * @example
   * fc3@1.0.0
   */
  component?: string;
  props?: { [key: string]: any };
  source?: SourceConfig;
  /**
   * @example
   * Function
   */
  type?: string;
  variables?: { [key: string]: TemplateParameterSchema };
  static names(): { [key: string]: string } {
    return {
      artifact: 'artifact',
      build: 'build',
      component: 'component',
      props: 'props',
      source: 'source',
      type: 'type',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifact: ArtifactMeta,
      build: BuildConfig,
      component: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: SourceConfig,
      type: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': TemplateParameterSchema },
    };
  }

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.props) {
      $dara.Model.validateMap(this.props);
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

