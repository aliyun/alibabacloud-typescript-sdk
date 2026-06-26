// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The function description to filter by.
   * 
   * @example
   * test_description
   */
  description?: string;
  /**
   * @remarks
   * The version to which the function belongs. Valid values:
   * - v3: lists only FC 3.0 functions.
   * - v2: lists only FC 2.0 functions.
   * 
   * If not specified, both FC 3.0 and FC 2.0 functions are listed.
   * 
   * @example
   * v3
   */
  fcVersion?: string;
  /**
   * @remarks
   * The function name.
   */
  functionName?: string;
  /**
   * @remarks
   * The function GPU type to filter by.
   * 
   * @example
   * fc.gpu.tesla.1
   */
  gpuType?: string;
  /**
   * @remarks
   * The number of functions to return. Minimum value: 1. Maximum value: 100.
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
   * The function name prefix.
   * 
   * @example
   * my-func
   */
  prefix?: string;
  /**
   * @remarks
   * The resource group ID.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The function runtime to filter by.
   * 
   * @example
   * python3.10
   */
  runtime?: string;
  /**
   * @remarks
   * The function tags to filter by.
   */
  tagsShrink?: string;
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
      tagsShrink: 'tags',
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
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

