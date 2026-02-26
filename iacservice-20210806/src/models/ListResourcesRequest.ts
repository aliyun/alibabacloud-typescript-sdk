// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TaskId
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task-235436dsfdgd
   */
  sourceValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudSpec
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      sourceType: 'sourceType',
      sourceValue: 'sourceValue',
      specType: 'specType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
      sourceValue: 'string',
      specType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

