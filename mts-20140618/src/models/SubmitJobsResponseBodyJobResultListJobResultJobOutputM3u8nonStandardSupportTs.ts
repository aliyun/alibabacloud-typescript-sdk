// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputM3U8NonStandardSupportTS extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the output of the MD5 value of the TS file is supported in the M3U8 video. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  md5Support?: boolean;
  /**
   * @remarks
   * Indicates whether the size of the TS file is generated in the output M3U8 video. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  sizeSupport?: boolean;
  static names(): { [key: string]: string } {
    return {
      md5Support: 'Md5Support',
      sizeSupport: 'SizeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5Support: 'boolean',
      sizeSupport: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

