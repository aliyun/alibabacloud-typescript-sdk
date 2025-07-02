// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProvisionConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the function. If this parameter is not specified, the provisioned configurations of all functions are listed.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * Number of provisioned configurations to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * A pagination token.
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

