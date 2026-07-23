// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SplitTrafficControlTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * - `Pre`: pre-production environment.
   * 
   * - `Prod`: production environment.
   * 
   * @example
   * Prod
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. For information about how to obtain the instance ID, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  setPoints?: number[];
  /**
   * @remarks
   * The target values that correspond to the time intervals defined by the `TimePoints` parameter.
   */
  setValues?: number[];
  /**
   * @remarks
   * The time points that define the traffic-splitting intervals.
   */
  timePoints?: number[];
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      setPoints: 'SetPoints',
      setValues: 'SetValues',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      setPoints: { 'type': 'array', 'itemType': 'number' },
      setValues: { 'type': 'array', 'itemType': 'number' },
      timePoints: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.setPoints)) {
      $dara.Model.validateArray(this.setPoints);
    }
    if(Array.isArray(this.setValues)) {
      $dara.Model.validateArray(this.setValues);
    }
    if(Array.isArray(this.timePoints)) {
      $dara.Model.validateArray(this.timePoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

