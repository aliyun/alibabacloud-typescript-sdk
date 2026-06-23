// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKubernetesTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The trigger ID.
   * 
   * @example
   * 1234
   */
  id?: string;
  /**
   * @remarks
   * The trigger name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c259f563386444ebb8d7**
   */
  clusterId?: string;
  /**
   * @remarks
   * The trigger project name.
   * 
   * The value consists of the namespace and application name in the format of `${namespace}/${name}`. Example: default/test-app.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The trigger type.
   * 
   * Valid values:
   * 
   * - `deployment`: a trigger for a stateless application. 
   * 
   * - `application`: a trigger for an application center application.
   * 
   * Default value: `deployment`.
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * The trigger action. Valid values:
   * 
   * `redeploy`: redeploys the resources defined in project_id.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * Token
   * 
   * @example
   * eyJhbGci***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
      action: 'action',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      clusterId: 'string',
      projectId: 'string',
      type: 'string',
      action: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesTriggerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKubernetesTriggerResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetKubernetesTriggerResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

