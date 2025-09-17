// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. The property of the resource, which is specified in JSON format.
   * 
   * @example
   * {
   *      "AccountName": "cctest",
   *      "AccountPassword": "Aa1234****"
   * }
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. If a cloud service supports idempotence, the parameter takes effect.
   * 
   * @example
   * 1e810dfe1468721d0664a49b9d9f74f4
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID. This parameter is required if a cloud service is a regionalized.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

