// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
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
   * The marker after which the returned objects are listed in alphabetical order.
   * 
   * @example
   * test1.txt
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of objects to return. If the listing cannot be completed in a single request due to the max-keys setting, a NextMarker element is included in the response as the marker for the next listing request.
   * 
   * Valid values: greater than 0 and less than 1000.
   * 
   * Default value: 100.
   * 
   * @example
   * 50
   */
  maxKeys?: number;
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
      marker: 'marker',
      maxKeys: 'maxKeys',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      delimiter: 'string',
      marker: 'string',
      maxKeys: 'number',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

