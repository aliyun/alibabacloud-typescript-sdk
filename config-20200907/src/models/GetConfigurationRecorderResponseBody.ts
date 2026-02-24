// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigurationRecorderResponseBodyConfigurationRecorder extends $dara.Model {
  /**
   * @remarks
   * The status of resource monitoring. Valid values:
   * 
   * - REGISTRABLE: Not registered.
   * 
   * - BUILDING: Building.
   * 
   * - REGISTERED: Registered.
   * 
   * - REBUILDING: Rebuilding.
   * 
   * @example
   * REGISTERED
   */
  configurationRecorderStatus?: string;
  /**
   * @remarks
   * A list of monitored resource types.
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

export class GetConfigurationRecorderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource monitoring information.
   */
  configurationRecorder?: GetConfigurationRecorderResponseBodyConfigurationRecorder;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE43696A-B3AF-5E55-9845-11393127E6D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationRecorder: 'ConfigurationRecorder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorder: GetConfigurationRecorderResponseBodyConfigurationRecorder,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configurationRecorder && typeof (this.configurationRecorder as any).validate === 'function') {
      (this.configurationRecorder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

