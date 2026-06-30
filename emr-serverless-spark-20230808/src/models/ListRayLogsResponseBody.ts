// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayLogsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the entry is a directory.
   * 
   * @example
   * false
   */
  isDir?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test1.txt
   */
  name?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /w-xxxxxxx/ray/logs/rj-xxxxxxxxxx_default/test1.txt
   */
  path?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 535345
   */
  size?: number;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 17344656363434
   */
  timeModified?: number;
  static names(): { [key: string]: string } {
    return {
      isDir: 'isDir',
      name: 'name',
      path: 'path',
      size: 'size',
      timeModified: 'timeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDir: 'boolean',
      name: 'string',
      path: 'string',
      size: 'number',
      timeModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRayLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket name.
   * 
   * @example
   * mybucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The character used to group object names. All objects whose names contain the specified prefix and between which the delimiter character appears for the first time are grouped as a set of elements (CommonPrefixes).
   * 
   * @example
   * /
   */
  delimiter?: string;
  /**
   * @remarks
   * Indicates whether the results returned in the request are truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The marker after which the returned objects are listed in alphabetical order.
   * 
   * @example
   * test1.txt
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of objects to return.
   * 
   * @example
   * 50
   */
  maxKeys?: number;
  /**
   * @remarks
   * The marker from which the next listing of files starts.
   * 
   * @example
   * test2.txt
   */
  nextMarker?: string;
  /**
   * @remarks
   * The list of object metadata.
   */
  objectList?: ListRayLogsResponseBodyDataObjectList[];
  /**
   * @remarks
   * The prefix that the keys of the returned files must start with.
   * 
   * @example
   * /w-xxxxxxx/ray/logs/rj-xxxxxxxxxx_default/
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      delimiter: 'delimiter',
      isTruncated: 'isTruncated',
      marker: 'marker',
      maxKeys: 'maxKeys',
      nextMarker: 'nextMarker',
      objectList: 'objectList',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      delimiter: 'string',
      isTruncated: 'boolean',
      marker: 'string',
      maxKeys: 'number',
      nextMarker: 'string',
      objectList: { 'type': 'array', 'itemType': ListRayLogsResponseBodyDataObjectList },
      prefix: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRayLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. The value 1000000 indicates success.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListRayLogsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListRayLogsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

