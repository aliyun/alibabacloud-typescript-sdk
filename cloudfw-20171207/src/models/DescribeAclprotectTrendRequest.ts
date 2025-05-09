// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLProtectTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp that is accurate to seconds.
   * 
   * @example
   * 1670397599
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 223.95.87.130
   */
  sourceIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp that is accurate to seconds.
   * 
   * @example
   * 1677050306
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      lang: 'string',
      sourceIp: 'string',
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

