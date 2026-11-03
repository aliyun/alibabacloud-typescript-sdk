// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvailabilityMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1****
   */
  appId?: string;
  /**
   * @remarks
   * Indicates whether an auto scaling policy is enabled. Valid values:
   * 
   * *   **1**: An auto scaling policy is enabled.
   * *   **0**: No auto scaling policy is enabled.
   * 
   * @example
   * 0
   */
  enableAutoscale?: number;
  /**
   * @remarks
   * The number of abnormal instances.
   * 
   * @example
   * 0
   */
  errorInstances?: number;
  /**
   * @remarks
   * The expected number of instances.
   * 
   * @example
   * 0
   */
  instances?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The current number of instances.
   * 
   * @example
   * 1
   */
  runnings?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableAutoscale: 'EnableAutoscale',
      errorInstances: 'ErrorInstances',
      instances: 'Instances',
      name: 'Name',
      regionId: 'RegionId',
      runnings: 'Runnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableAutoscale: 'number',
      errorInstances: 'number',
      instances: 'number',
      name: 'string',
      regionId: 'string',
      runnings: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailabilityMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The following limits are imposed on the ID:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data entries returned.
   */
  data?: GetAvailabilityMetricResponseBodyData[];
  /**
   * @remarks
   * The additional information that is returned. The following limits are imposed on the ID:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A92C4EA-4C53-5A1C-8AEB-F2DB11982D5F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of applications was obtained. The following limits are imposed on the ID:
   * 
   * *   **true**: The namespaces were obtained.
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAvailabilityMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

