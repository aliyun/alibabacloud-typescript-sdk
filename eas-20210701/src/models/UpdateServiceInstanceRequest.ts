// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the current instance is an instance unit.
   * 
   * @example
   * false
   */
  isReplica?: boolean;
  /**
   * @remarks
   * Specifies whether to isolate the service instance. After an instance is isolated, it is no longer managed by the controller, and a new instance is created. The isolated instance is used to preserve the state or for debugging. Note: An isolated instance cannot be unisolated. Valid values:
   * - true: The instance is isolated.
   * 
   * @example
   * true
   */
  detach?: boolean;
  /**
   * @remarks
   * >This parameter is in invitational preview and is not supported.
   * 
   * @example
   * 0
   */
  hibernate?: boolean;
  /**
   * @remarks
   * Specifies whether the instance receives traffic. Valid values:
   * - true: The instance receives traffic.
   * - false: The instance does not receive traffic.
   * 
   * @example
   * true
   */
  isolate?: boolean;
  static names(): { [key: string]: string } {
    return {
      isReplica: 'IsReplica',
      detach: 'Detach',
      hibernate: 'Hibernate',
      isolate: 'Isolate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReplica: 'boolean',
      detach: 'boolean',
      hibernate: 'boolean',
      isolate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

