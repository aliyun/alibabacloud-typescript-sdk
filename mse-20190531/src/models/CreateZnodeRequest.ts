// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateZnodeRequest extends $dara.Model {
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
   * mse-09k1q11****
   */
  clusterId?: string;
  /**
   * @remarks
   * The data of the node.
   * 
   * @example
   * data
   */
  data?: string;
  /**
   * @remarks
   * The path of the node.
   * 
   * @example
   * /zookeeper
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      data: 'Data',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      data: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

