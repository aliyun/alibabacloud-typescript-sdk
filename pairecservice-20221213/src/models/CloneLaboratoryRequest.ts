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
   * The destination environment. Valid values: Daily, Pre (pre-release), and Prod (production).
   * 
   * This parameter is required.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. To obtain this ID, call the `ListInstances` operation.
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

