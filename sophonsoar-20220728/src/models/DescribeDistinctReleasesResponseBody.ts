// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistinctReleasesResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * demo version
   */
  description?: string;
  /**
   * @remarks
   * The MD5 value of the version\\"s XML configuration.
   * 
   * @example
   * 17cf53049bc8efa941207xxxxx
   */
  taskflowMd5?: string;
  /**
   * @remarks
   * The configuration format of the playbook.
   * 
   * - **xml**: XML format.
   * 
   * - **x6**: JSON format.
   * 
   * @example
   * x6
   */
  taskflowType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      taskflowMd5: 'TaskflowMd5',
      taskflowType: 'TaskflowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      taskflowMd5: 'string',
      taskflowType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version records.
   */
  records?: DescribeDistinctReleasesResponseBodyRecords[];
  /**
   * @remarks
   * The ID of the request. This ID is unique to each request and is used to troubleshoot issues.
   * 
   * @example
   * 145CACF6-D276-5197-8549-CB1AD76E2AC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeDistinctReleasesResponseBodyRecords },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

