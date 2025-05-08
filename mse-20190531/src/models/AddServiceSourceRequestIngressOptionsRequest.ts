// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServiceSourceRequestIngressOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * true
   */
  enableIngress?: boolean;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese. This is the default value.
   * *   en-US: English.
   * *   ja: Japanese.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * An array of service root paths.
   * 
   * @example
   * com.test.xxx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The root path of the service.
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

