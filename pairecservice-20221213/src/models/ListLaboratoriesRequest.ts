// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLaboratoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The laboratory environment.
   * 
   * - `Daily`: the daily environment
   * 
   * - `Pre`: the pre-production environment
   * 
   * - `Prod`: the production environment
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The ID of the instance. You can obtain this ID by calling the `ListInstances` API.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the scene. You can obtain this ID by calling the `ListScenes` API.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The laboratory status.
   * 
   * - `Offline`: The laboratory is offline.
   * 
   * - `Online`: The laboratory is online.
   * 
   * @example
   * Offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

