// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneExperimentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The target environment. Valid values:
   * - Daily: daily environment.
   * - Pre: staging environment.
   * - Prod: production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the ListInstances operation to obtain instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the layer. You can call the ListLayers operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  layerId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      layerId: 'LayerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      layerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

