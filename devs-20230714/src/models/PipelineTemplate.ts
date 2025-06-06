// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PipelineTemplateSpec } from "./PipelineTemplateSpec";


export class PipelineTemplate extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  deletionTime?: string;
  /**
   * @example
   * PipelineTemplate example.
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * PipelineTemplate
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-pipeline-template
   */
  name?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: number;
  spec?: PipelineTemplateSpec;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: PipelineTemplateSpec,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

