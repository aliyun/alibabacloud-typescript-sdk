// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRuntimeEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by endpoint name.
   * 
   * @example
   * my-endpoint
   */
  endpointName?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Search mode.
   * 
   * @example
   * fuzzy
   */
  searchMode?: string;
  static names(): { [key: string]: string } {
    return {
      endpointName: 'endpointName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      searchMode: 'searchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

