// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExcuteNumRequest extends $dara.Model {
  /**
   * @remarks
   * Service code.
   * 
   * This parameter is required.
   * 
   * @example
   * saf_all
   */
  code?: string;
  /**
   * @remarks
   * This field is currently unused and has no query significance.
   * 
   * @example
   * 暂时不需要传入
   */
  degree?: string;
  /**
   * @remarks
   * End date, format yyyy-MM-dd, e.g., 2025-03-13.
   * 
   * @example
   * 2025-03-15
   */
  endDate?: string;
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Request source IP address.
   * 
   * @example
   * 220.250.21.83
   */
  sourceIp?: string;
  /**
   * @remarks
   * Start date, format yyyy-MM-dd, e.g., 2025-03-10.
   * 
   * @example
   * 2025-03-10
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      degree: 'Degree',
      endDate: 'EndDate',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      degree: 'string',
      endDate: 'string',
      lang: 'string',
      sourceIp: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

