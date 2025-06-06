// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PipelineSpec } from "./PipelineSpec";
import { PipelineStatus } from "./PipelineStatus";


export class Pipeline extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * Pipeline example.
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * Pipeline
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-pipeline
   */
  name?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: number;
  spec?: PipelineSpec;
  status?: PipelineStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: PipelineSpec,
      status: PipelineStatus,
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
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

