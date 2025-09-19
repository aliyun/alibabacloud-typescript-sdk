// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScalingConfigsRequest extends $dara.Model {
  /**
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @example
   * 20
   */
  limit?: number;
  /**
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

