// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class ListFunctionsRequest extends $dara.Model {
  /**
   * @remarks
   * The description used to filter functions.
   * 
   * @example
   * test_description
   */
  description?: string;
  /**
   * @remarks
   * The version of the function. Valid values:
   * - v3: Lists only Function Compute 3.0 functions.
   * - v2: Lists only Function Compute 2.0 functions.
   * 
   * Default value: empty. An empty value indicates that both Function Compute 3.0 and Function Compute 2.0 functions are listed.
   * 
   * @example
   * v3
   */
  fcVersion?: string;
  /**
   * @remarks
   * The name of the function.
   */
  functionName?: string;
  /**
   * @remarks
   * The GPU type used to filter functions.
   * 
   * @example
   * fc.gpu.tesla.1
   */
  gpuType?: string;
  /**
   * @remarks
   * The number of functions to return. Valid values: 1 to 100.
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
  /**
   * @remarks
   * The ID of the resource group.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The runtime used to filter functions.
   * 
   * @example
   * python3.10
   */
  runtime?: string;
  /**
   * @remarks
   * The tags used to filter functions.
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

