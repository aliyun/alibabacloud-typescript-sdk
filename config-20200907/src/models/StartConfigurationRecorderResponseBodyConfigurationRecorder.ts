// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConfigurationRecorderResponseBodyConfigurationRecorder extends $dara.Model {
  /**
   * @remarks
   * The status of the configuration recorder. Valid values:
   * 
   * *   REGISTRABLE: The configuration recorder has not been registered.
   * *   BUILDING: The configuration recorder is being deployed.
   * *   REGISTERED: The configuration recorder has been registered.
   * *   REBUILDING: The configuration recorder is being redeployed.
   * 
   * @example
   * REGISTERED
   */
  configurationRecorderStatus?: string;
  /**
   * @remarks
   * The types of the resources that are monitored by Cloud Config.
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorderStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

