// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneExperimentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The target environment for the experiment group. ● Daily: Daily environment ● Pre: pre-release environment ● Prod: production environment
   * 
   * This parameter is required.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. You can get this ID by calling the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The layer ID. You can get this ID by calling the ListLayers operation.
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

