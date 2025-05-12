// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceAutoScalerRequestBehaviorOnZero extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the number of instances is reduced to 0. Default value: 600. The number of instances can be reduced to 0 only if no request is available or no traffic exists in the specified time window.
   * 
   * @example
   * 600
   */
  scaleDownGracePeriodSeconds?: number;
  /**
   * @remarks
   * The number of instances that you want to create at a time if the number of instances is scaled out from 0. Default value: 1.
   * 
   * @example
   * 1
   */
  scaleUpActivationReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      scaleDownGracePeriodSeconds: 'scaleDownGracePeriodSeconds',
      scaleUpActivationReplicas: 'scaleUpActivationReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDownGracePeriodSeconds: 'number',
      scaleUpActivationReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

