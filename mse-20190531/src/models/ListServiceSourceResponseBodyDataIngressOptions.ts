// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceSourceResponseBodyDataIngressOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Ingresses are enabled.
   * 
   * @example
   * true
   */
  enableIngress?: boolean;
  /**
   * @remarks
   * Indicates whether the Ingress status is updated.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * The Ingress class.
   * 
   * @example
   * com.test.xxx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The namespace that you want to monitor.
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

