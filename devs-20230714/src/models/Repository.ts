// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RepositorySpec } from "./RepositorySpec";


export class Repository extends $dara.Model {
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
   * Repository
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-repository
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: RepositorySpec;
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
      spec: RepositorySpec,
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

