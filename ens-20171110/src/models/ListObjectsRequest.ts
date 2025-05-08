// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bucketName?: string;
  /**
   * @remarks
   * The token used in this list operation. If the number of objects exceeds the value of MaxKeys, the NextContinuationToken is included in the response as the token for the next list operation.
   * 
   * @example
   * test1.txt
   */
  continuationToken?: string;
  /**
   * @remarks
   * The encoding type of the object names in the response. Only URL encoding is supported.
   * 
   * @example
   * url
   */
  encodingType?: string;
  /**
   * @remarks
   * The position from which the list operation starts. If this parameter is specified, objects whose names are alphabetically greater than value of Marker are returned. The Marker parameter is used to list the returned objects by page, and its value must be smaller than 1,024 bytes in length.
   * 
   * Even if the value specified for Marker does not exist in the list during a conditional query, the list starts from the object whose name is alphabetically greater than the value of Marker.
   * 
   * @example
   * a
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of objects to return. Valid values: 0 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
  maxKeys?: number;
  /**
   * @remarks
   * The prefix that must be included in the names of objects you want to list. If you specify a prefix to query objects, the returned object names contain the prefix.
   * 
   * The value of the parameter must be less than 1,000 bytes in length.
   * 
   * @example
   * b
   */
  prefix?: string;
  /**
   * @remarks
   * The position from which the list operation starts. If this parameter is specified, objects whose names are alphabetically greater than the value of StartAfter are returned. The StartAfter parameter is used to list the returned objects by page, and its value must be less than 1,000 bytes in length. Even if the value specified for StartAfter does not exist in the list during a conditional query, the list starts from the object whose name is alphabetically greater than the value of StartAfter.
   * 
   * @example
   * b
   */
  startAfter?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      continuationToken: 'ContinuationToken',
      encodingType: 'EncodingType',
      marker: 'Marker',
      maxKeys: 'MaxKeys',
      prefix: 'Prefix',
      startAfter: 'StartAfter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      continuationToken: 'string',
      encodingType: 'string',
      marker: 'string',
      maxKeys: 'number',
      prefix: 'string',
      startAfter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

