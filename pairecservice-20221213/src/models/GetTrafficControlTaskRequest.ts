// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrafficControlTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The filter for traffic control targets.
   * 
   * @example
   * All
   */
  controlTargetFilter?: string;
  /**
   * @remarks
   * The environment to which the parameter belongs. Valid values:
   * - Daily: daily environment
   * - Pre: staging environment
   * - Prod: production environment.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-1324***
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * Latest
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      controlTargetFilter: 'ControlTargetFilter',
      environment: 'Environment',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlTargetFilter: 'string',
      environment: 'string',
      instanceId: 'string',
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

