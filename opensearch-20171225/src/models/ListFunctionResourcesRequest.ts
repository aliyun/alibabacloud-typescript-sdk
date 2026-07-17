// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The output level.
   * 
   * @example
   * detail
   */
  output?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * feature_generator
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

