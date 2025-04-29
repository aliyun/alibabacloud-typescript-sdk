// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType extends $dara.Model {
  /**
   * @remarks
   * The code of the event type.
   * 
   * @example
   * 7
   */
  code?: number;
  /**
   * @remarks
   * The name of the event type. Valid values:
   * 
   * *   Degraded: The performance of the EBS device is degraded.
   * *   SeverelyDegraded: The performance of the EBS device is severely degraded.
   * *   Stalled: The performance of the EBS device is severely affected.
   * *   ErrorDetected: The local disk is damaged.
   * 
   * @example
   * Stalled
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

