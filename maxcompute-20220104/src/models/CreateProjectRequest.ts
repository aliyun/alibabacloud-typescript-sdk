// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * {
   *     "name":"project_name",
   *     "comment":"",
   *     "productType":"payasyougo/subscription/dev",
   *     "defaultQuota":"quota_nick_name",
   *     "properties":{
   *         "sqlMeteringMax":"",
   *         "typeSystem":"",
   *         "encryption":{
   *             "enable":true,
   *             "algorithm":"",
   *             "key":""
   *         }
   *     }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

