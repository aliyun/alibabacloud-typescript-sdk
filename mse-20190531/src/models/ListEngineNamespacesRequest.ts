// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEngineNamespacesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

