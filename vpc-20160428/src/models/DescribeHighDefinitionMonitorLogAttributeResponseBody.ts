// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHighDefinitionMonitorLogAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID for which high-precision second-level monitoring is queried.
   * 
   * @example
   * eip-wz9fi6qboho9fwgx7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance for which high-precision second-level monitoring is queried. The value is **EIP**.
   * 
   * @example
   * EIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the LogProject.
   * 
   * @example
   * hdmonitor-cn-shenzhen-1658206966225390
   */
  logProject?: string;
  /**
   * @remarks
   * The name of the LogStore.
   * 
   * @example
   * hdmonitor
   */
  logStore?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B457
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      logProject: 'LogProject',
      logStore: 'LogStore',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      logProject: 'string',
      logStore: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

