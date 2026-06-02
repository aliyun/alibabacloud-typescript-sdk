// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartJobRequest extends $dara.Model {
  /**
   * @example
   * 10086
   */
  callingNumber?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @example
   * 4f21446e-324e-46f2-bf62-7f341fb004ea
   */
  jobGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobJson?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  scenarioId?: string;
  /**
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobJson: 'JobJson',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobGroupId: 'string',
      jobJson: 'string',
      scenarioId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumber)) {
      $dara.Model.validateArray(this.callingNumber);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

