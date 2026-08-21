// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodTieringStorageRetrievalDataResponseBodyRetrievalData extends $dara.Model {
  /**
   * @remarks
   * The Cold Archive bulk retrieval data.
   * 
   * @example
   * 123
   */
  CABulkRetrievalData?: number;
  /**
   * @remarks
   * The Cold Archive high-priority retrieval data.
   * 
   * @example
   * 123
   */
  CAHighPriorRetrievalData?: number;
  /**
   * @remarks
   * The Cold Archive standard retrieval data.
   * 
   * @example
   * 123
   */
  CAStdRetrievalData?: number;
  /**
   * @remarks
   * The storage region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The retrieval data.
   * 
   * @example
   * 1234
   */
  retrievalData?: number;
  /**
   * @remarks
   * The media asset storage class.
   * 
   * @example
   * IA
   */
  storageClass?: string;
  /**
   * @remarks
   * The start time of the time interval. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-02T10:20:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      CABulkRetrievalData: 'CABulkRetrievalData',
      CAHighPriorRetrievalData: 'CAHighPriorRetrievalData',
      CAStdRetrievalData: 'CAStdRetrievalData',
      region: 'Region',
      retrievalData: 'RetrievalData',
      storageClass: 'StorageClass',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CABulkRetrievalData: 'number',
      CAHighPriorRetrievalData: 'number',
      CAStdRetrievalData: 'number',
      region: 'string',
      retrievalData: 'number',
      storageClass: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodTieringStorageRetrievalDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D73936****
   */
  requestId?: string;
  /**
   * @remarks
   * The retrieval data.
   */
  retrievalData?: DescribeVodTieringStorageRetrievalDataResponseBodyRetrievalData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retrievalData: 'RetrievalData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retrievalData: { 'type': 'array', 'itemType': DescribeVodTieringStorageRetrievalDataResponseBodyRetrievalData },
    };
  }

  validate() {
    if(Array.isArray(this.retrievalData)) {
      $dara.Model.validateArray(this.retrievalData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

