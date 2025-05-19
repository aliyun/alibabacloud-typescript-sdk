// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrafficControlTaskRequest extends $dara.Model {
  controlTargetFilter?: string;
  environment?: string;
  instanceId?: string;
  regionId?: string;
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

