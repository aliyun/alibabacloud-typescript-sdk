// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class ListFunctionsRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the functions to retrieve.
   * 
   * @example
   * test_description
   */
  description?: string;
  /**
   * @remarks
   * The version of Function Compute to which the functions belong.
   * 
   * *   v3: Only lists functions of Function Compute 3.0.
   * *   v2: Only lists functions of Function Compute 2.0.
   * 
   * By default, this parameter is left empty and functions in both Function Compute 3.0 and Function Compute 2.0 are listed.
   * 
   * @example
   * v3
   */
  fcVersion?: string;
  functionName?: string;
  /**
   * @remarks
   * The GPU type of the functions to retrieve.
   * 
   * @example
   * fc.gpu.tesla.1
   */
  gpuType?: string;
  /**
   * @remarks
   * The number of functions to return. The minimum value is 1 and the maximum value is 100.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The prefix of the function name.
   * 
   * @example
   * my-func
   */
  prefix?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The runtime of the functions to retrieve.
   * 
   * @example
   * python3.10
   */
  runtime?: string;
  /**
   * @remarks
   * The tag of the functions to retrieve.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      fcVersion: 'fcVersion',
      functionName: 'functionName',
      gpuType: 'gpuType',
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      resourceGroupId: 'resourceGroupId',
      runtime: 'runtime',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fcVersion: 'string',
      functionName: 'string',
      gpuType: 'string',
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      resourceGroupId: 'string',
      runtime: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

