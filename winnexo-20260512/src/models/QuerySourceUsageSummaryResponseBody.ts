// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySourceUsageSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of retrieval recalls.
   * 
   * @example
   * 10
   */
  retrievalCount?: number;
  /**
   * @remarks
   * The deduplicated count of sources that have retrieval events.
   * 
   * @example
   * 1
   */
  retrievedSourceCount?: number;
  /**
   * @remarks
   * The number of rows in the source data.
   * 
   * @example
   * 10
   */
  sourceCount?: number;
  /**
   * @remarks
   * The number of times the source has been used in agents.
   * 
   * @example
   * 8
   */
  usageCount?: number;
  /**
   * @remarks
   * The deduplicated count of sources that have usage events.
   * 
   * @example
   * 2
   */
  usedSourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      retrievalCount: 'retrievalCount',
      retrievedSourceCount: 'retrievedSourceCount',
      sourceCount: 'sourceCount',
      usageCount: 'usageCount',
      usedSourceCount: 'usedSourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      retrievalCount: 'number',
      retrievedSourceCount: 'number',
      sourceCount: 'number',
      usageCount: 'number',
      usedSourceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

