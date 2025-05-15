// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of queries
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

