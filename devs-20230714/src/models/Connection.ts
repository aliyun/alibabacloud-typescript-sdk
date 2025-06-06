// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConnectionSpec } from "./ConnectionSpec";
import { ConnectionStatus } from "./ConnectionStatus";


export class Connection extends $dara.Model {
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
   * Connection
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-connection
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: ConnectionSpec;
  status?: ConnectionStatus;
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
      spec: ConnectionSpec,
      status: ConnectionStatus,
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

