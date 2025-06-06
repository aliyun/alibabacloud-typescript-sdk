// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ArtifactSpec } from "./ArtifactSpec";
import { ArtifactStatus } from "./ArtifactStatus";


export class Artifact extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * test-description
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * Artifact
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-artifact
   */
  name?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: number;
  spec?: ArtifactSpec;
  status?: ArtifactStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  updatedTime?: string;
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
      updatedTime: 'updatedTime',
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
      spec: ArtifactSpec,
      status: ArtifactStatus,
      uid: 'string',
      updatedTime: 'string',
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

