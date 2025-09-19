// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebPathResponseBodyConfigListTargetList extends $dara.Model {
  /**
   * @remarks
   * The object.
   * 
   * @example
   * 82048187-bb9b-4e19-8320-7b4ddb97****
   */
  target?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * *   **uuid**
   * 
   * @example
   * uuid
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPathResponseBodyConfigList extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the servers on which the web directories are scanned.
   */
  targetList?: DescribeWebPathResponseBodyConfigListTargetList[];
  /**
   * @remarks
   * The path to the web directory.
   * 
   * @example
   * /root/www****
   */
  webPath?: string;
  /**
   * @remarks
   * The path type of the web directory. Valid values:
   * 
   * *   **def**: automatically identified
   * *   **customize**: manually added
   * 
   * @example
   * def
   */
  webPathType?: string;
  static names(): { [key: string]: string } {
    return {
      targetList: 'TargetList',
      webPath: 'WebPath',
      webPathType: 'WebPathType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetList: { 'type': 'array', 'itemType': DescribeWebPathResponseBodyConfigListTargetList },
      webPath: 'string',
      webPathType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the paths to the web directories.
   */
  configList?: DescribeWebPathResponseBodyConfigList[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * B37C9052-A73E-4707-A024-92477028****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeWebPathResponseBodyConfigList },
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

