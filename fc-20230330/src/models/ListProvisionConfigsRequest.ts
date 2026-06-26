// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProvisionConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the function. If you do not specify this parameter, the provisioned configurations for all functions are returned.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * The number of provisioned configurations to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token to start the next page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

