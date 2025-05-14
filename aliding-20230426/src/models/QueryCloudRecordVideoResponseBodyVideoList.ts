// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCloudRecordVideoResponseBodyVideoList extends $dara.Model {
  /**
   * @example
   * 59886
   */
  duration?: number;
  /**
   * @example
   * 1631172094000
   */
  endTime?: number;
  /**
   * @example
   * 1127942
   */
  fileSize?: number;
  /**
   * @example
   * faa1566c5bc24f21821ae2394f82db2e
   */
  mediaId?: string;
  /**
   * @example
   * 290882268xxx1172033231
   */
  recordId?: string;
  /**
   * @example
   * 1
   */
  recordType?: number;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * 1631172094000
   */
  startTime?: number;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      fileSize: 'FileSize',
      mediaId: 'MediaId',
      recordId: 'RecordId',
      recordType: 'RecordType',
      regionId: 'RegionId',
      startTime: 'StartTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'number',
      fileSize: 'number',
      mediaId: 'string',
      recordId: 'string',
      recordType: 'number',
      regionId: 'string',
      startTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

