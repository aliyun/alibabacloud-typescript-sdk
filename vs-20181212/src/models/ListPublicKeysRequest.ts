// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicKeysRequest extends $dara.Model {
  /**
   * @remarks
   * A parameter for filtering by time range. The time must be in UTC and follow the ISO 8601 standard. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-09-22T02:23:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the public key group.
   * 
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * The name of the public key.
   * 
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * The type of the public key. Valid values:
   * 
   * - **adb**: ADB key
   * 
   * - **ssh**: SSH key
   * 
   * @example
   * ssh
   */
  keyType?: string;
  /**
   * @remarks
   * The page number of the list to query. The value starts from 1.
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Valid values: 1 to 100.
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A parameter for filtering by time range. The time must be in UTC and follow the ISO 8601 standard. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-09-21T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

