// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListObjectsResponseBodyContents } from "./ListObjectsResponseBodyContents";


export class ListObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * If the delimiter parameter is specified in the request, the response contains CommonPrefixes. Objects whose names contain the same string from the prefix to the next occurrence of the delimiter are grouped as a single result element in CommonPrefixes.
   */
  commonPrefixes?: string[];
  /**
   * @remarks
   * The list of object metadata.
   */
  contents?: ListObjectsResponseBodyContents[];
  /**
   * @remarks
   * The token used in this list operation.
   * 
   * @example
   * test1.txt
   */
  continuationToken?: string;
  /**
   * @remarks
   * The character used to group objects by name.
   * 
   * @example
   * /
   */
  delimiter?: string;
  /**
   * @remarks
   * The encoding type of the object names in the response.
   * 
   * @example
   * N/A
   */
  encodingType?: string;
  /**
   * @remarks
   * Indicates whether the listed objects are truncated. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of keys returned for this request.
   * 
   * @example
   * 10
   */
  keyCount?: number;
  /**
   * @remarks
   * The position from which the list operation starts.
   * 
   * @example
   * ceshi.txt1617853707991
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of objects returned.
   * 
   * @example
   * 10
   */
  maxKeys?: number;
  /**
   * @remarks
   * The token used in the next list operation.
   * 
   * @example
   * CgJiYw--
   */
  nextContinuationToken?: string;
  /**
   * @remarks
   * The position from which the next list operation starts.
   * 
   * @example
   * ceshi.txt1617853707991
   */
  nextMarker?: string;
  /**
   * @remarks
   * The prefix contained in the names of returned objects.
   * 
   * @example
   * b
   */
  prefix?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4833C4AC-9396-458C-8F25-1D701334E560
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      commonPrefixes: 'CommonPrefixes',
      contents: 'Contents',
      continuationToken: 'ContinuationToken',
      delimiter: 'Delimiter',
      encodingType: 'EncodingType',
      isTruncated: 'IsTruncated',
      keyCount: 'KeyCount',
      marker: 'Marker',
      maxKeys: 'MaxKeys',
      nextContinuationToken: 'NextContinuationToken',
      nextMarker: 'NextMarker',
      prefix: 'Prefix',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      commonPrefixes: { 'type': 'array', 'itemType': 'string' },
      contents: { 'type': 'array', 'itemType': ListObjectsResponseBodyContents },
      continuationToken: 'string',
      delimiter: 'string',
      encodingType: 'string',
      isTruncated: 'boolean',
      keyCount: 'number',
      marker: 'string',
      maxKeys: 'number',
      nextContinuationToken: 'string',
      nextMarker: 'string',
      prefix: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commonPrefixes)) {
      $dara.Model.validateArray(this.commonPrefixes);
    }
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

