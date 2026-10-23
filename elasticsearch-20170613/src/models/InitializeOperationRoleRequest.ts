// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeOperationRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client generates the value. The value must be unique among different requests and can be up to 64 ASCII characters long.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the Elasticsearch service-linked role to be created.
   * 
   * @example
   * {"rolename":"AliyunServiceRoleForElasticsearchCollector"}
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

