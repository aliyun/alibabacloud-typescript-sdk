// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceSourceRequestIngressOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Ingress.
   * 
   * @example
   * true
   */
  enableIngress?: boolean;
  /**
   * @remarks
   * Specifies whether to update the Ingress status.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * Specifies whether to monitor Ingress classes.
   * 
   * @example
   * com.test.xxx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The namespace whose resources you want to monitor.
   * 
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enableIngress: 'EnableIngress',
      enableStatus: 'EnableStatus',
      ingressClass: 'IngressClass',
      watchNamespace: 'WatchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIngress: 'boolean',
      enableStatus: 'boolean',
      ingressClass: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

