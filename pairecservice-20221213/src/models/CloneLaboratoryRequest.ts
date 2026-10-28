// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clone the experiment groups.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  cloneExperimentGroup?: boolean;
  /**
   * @remarks
   * The runtime environment. Valid values:
   * - Daily: daily environment.
   * - Pre: pre-release environment.
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
   * Instance ID of the instance. You can call the ListInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cloneExperimentGroup: 'CloneExperimentGroup',
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneExperimentGroup: 'boolean',
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

