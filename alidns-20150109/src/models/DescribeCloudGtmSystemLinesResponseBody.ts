// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmSystemLinesResponseBodySystemLines } from "./DescribeCloudGtmSystemLinesResponseBodySystemLines";


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

