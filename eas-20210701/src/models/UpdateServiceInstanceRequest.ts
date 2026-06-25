// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance is a replica.
   * 
   * @example
   * false
   */
  isReplica?: boolean;
  /**
   * @remarks
   * Specifies whether to fence the service instance. After an instance is fenced, it is no longer managed by the VPC controller and a new instance is created. The fenced instance is reserved for troubleshooting or debugging. Note: You cannot unfence an instance. Valid values:
   * 
   * - true: Fences the instance.
   * 
   * @example
   * true
   */
  detach?: boolean;
  /**
   * @remarks
   * > This parameter is for an invitational preview. It is not generally available.
   * 
   * @example
   * 0
   */
  hibernate?: boolean;
  /**
   * @remarks
   * Specifies whether to isolate the instance. Valid values:
   * 
   * - true: The instance is isolated and does not receive traffic.
   * 
   * - false: The instance is not isolated and receives traffic.
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

