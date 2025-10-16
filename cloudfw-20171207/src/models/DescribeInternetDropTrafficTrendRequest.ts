// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetDropTrafficTrendRequest extends $dara.Model {
  /**
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1756346821
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @example
   * 120.136.21.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1749176793
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      lang: 'Lang',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'string',
      lang: 'string',
      sourceCode: 'string',
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

