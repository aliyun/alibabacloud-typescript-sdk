// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The output level.
   * 
   * Valid values:
   * 
   * *   simple
   * *   normal
   * *   detail
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * Valid values:
   * 
   * *   feature_generator
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   raw_file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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

