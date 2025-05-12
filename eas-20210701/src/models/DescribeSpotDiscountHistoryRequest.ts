// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotDiscountHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Elastic Algorithm Service (EAS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the preemptible instance has a protection period. During the 1-hour protection period of the preemptible instance, the preemptible instance will not be released.
   * 
   * @example
   * false
   */
  isProtect?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      isProtect: 'IsProtect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      isProtect: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

