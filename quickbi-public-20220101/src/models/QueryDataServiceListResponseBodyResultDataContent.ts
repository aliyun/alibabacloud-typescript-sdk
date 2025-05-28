// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataServiceListResponseBodyResultDataContentFilter } from "./QueryDataServiceListResponseBodyResultDataContentFilter";
import { QueryDataServiceListResponseBodyResultDataContentReturnFields } from "./QueryDataServiceListResponseBodyResultDataContentReturnFields";


export class QueryDataServiceListResponseBodyResultDataContent extends $dara.Model {
  /**
   * @remarks
   * Cube identifier ID.
   * 
   * @example
   * 56f9f34a-bdba-496a-91a3-a18b1ff73a80
   */
  cubeId?: string;
  /**
   * @remarks
   * Dataset name.
   * 
   * @example
   * test data source
   */
  cubeName?: string;
  /**
   * @remarks
   * Detail or Summary
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * Request parameter information.
   */
  filter?: QueryDataServiceListResponseBodyResultDataContentFilter;
  /**
   * @remarks
   * Return information.
   */
  returnFields?: QueryDataServiceListResponseBodyResultDataContentReturnFields[];
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      detail: 'Detail',
      filter: 'Filter',
      returnFields: 'ReturnFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      cubeName: 'string',
      detail: 'boolean',
      filter: QueryDataServiceListResponseBodyResultDataContentFilter,
      returnFields: { 'type': 'array', 'itemType': QueryDataServiceListResponseBodyResultDataContentReturnFields },
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(Array.isArray(this.returnFields)) {
      $dara.Model.validateArray(this.returnFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

