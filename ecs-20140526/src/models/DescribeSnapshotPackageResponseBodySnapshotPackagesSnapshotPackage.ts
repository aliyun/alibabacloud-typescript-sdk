// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotPackageResponseBodySnapshotPackagesSnapshotPackage extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS storage plan.
   * 
   * @example
   * testDisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the OSS storage plan expires. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-30T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum storage capacity offered by the OSS storage plan.
   * 
   * @example
   * 500
   */
  initCapacity?: number;
  /**
   * @remarks
   * The time when the OSS storage plan was purchased. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endTime: 'EndTime',
      initCapacity: 'InitCapacity',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endTime: 'string',
      initCapacity: 'number',
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

