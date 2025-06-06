// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentDeploymentSpec } from "./EnvironmentDeploymentSpec";
import { EnvironmentDeploymentStatus } from "./EnvironmentDeploymentStatus";


export class EnvironmentDeployment extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * commit by xxx.
   */
  description?: string;
  /**
   * @example
   * Deployment
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-deployment
   */
  name?: string;
  spec?: EnvironmentDeploymentSpec;
  status?: EnvironmentDeploymentStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      spec: EnvironmentDeploymentSpec,
      status: EnvironmentDeploymentStatus,
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

