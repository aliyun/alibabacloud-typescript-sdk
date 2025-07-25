// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmSystemLinesResponseBodySystemLinesSystemLine extends $dara.Model {
  /**
   * @remarks
   * The line code.
   * 
   * @example
   * aliyun_r_ap-south-1
   */
  code?: string;
  /**
   * @remarks
   * The display name of the line.
   * 
   * @example
   * Default
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the line can be selected as the source of a Domain Name System (DNS) request. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The name of the line.
   * 
   * @example
   * Default
   */
  name?: string;
  /**
   * @remarks
   * The code of the parent line.
   * 
   * @example
   * String	aliyun
   */
  parentCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      displayName: 'DisplayName',
      isAvailable: 'IsAvailable',
      name: 'Name',
      parentCode: 'ParentCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      displayName: 'string',
      isAvailable: 'boolean',
      name: 'string',
      parentCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmSystemLinesResponseBodySystemLines extends $dara.Model {
  systemLine?: DescribeCloudGtmSystemLinesResponseBodySystemLinesSystemLine[];
  static names(): { [key: string]: string } {
    return {
      systemLine: 'SystemLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemLine: { 'type': 'array', 'itemType': DescribeCloudGtmSystemLinesResponseBodySystemLinesSystemLine },
    };
  }

  validate() {
    if(Array.isArray(this.systemLine)) {
      $dara.Model.validateArray(this.systemLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmSystemLinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA
   */
  requestId?: string;
  /**
   * @remarks
   * The system lines.
   */
  systemLines?: DescribeCloudGtmSystemLinesResponseBodySystemLines;
  /**
   * @remarks
   * The system lines, which are in a tree structure. Only a system line is listed in this example.
   * 
   * @example
   * [{\\"displayName\\":\\"Default\\",\\"id\\":\\"default\\",\\"isAvailable\\":true,\\"name\\":\\"Default\\",\\"parentId\\":\\"\\"}]
   */
  systemLinesTree?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemLines: 'SystemLines',
      systemLinesTree: 'SystemLinesTree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemLines: DescribeCloudGtmSystemLinesResponseBodySystemLines,
      systemLinesTree: 'string',
    };
  }

  validate() {
    if(this.systemLines && typeof (this.systemLines as any).validate === 'function') {
      (this.systemLines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

