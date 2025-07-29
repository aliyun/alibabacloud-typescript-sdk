// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * 1234
   */
  id?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the associated cluster.
   * 
   * @example
   * c259f563386444ebb8d7****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * The name consists of the namespace where the application is deployed and the name of the application. The format is `${namespace}/${name}`. Example: default/test-app.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger.
   * 
   * Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * The action that the trigger performs. The value is set to redeploy.
   * 
   * `redeploy`: redeploys the resource specified by project_id.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The token information.
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

export class DescribeTriggerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTriggerResponseBody[];
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
      body: { 'type': 'array', 'itemType': DescribeTriggerResponseBody },
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

