// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthReportInterval extends $dara.Model {
  /**
   * @remarks
   * The unit of the effective recovery duration. Valid values:
   * - **Minute**: Minutes.
   * - **Hour**: Hours.
   * - **Day**: Days.
   * 
   * @example
   * Minute
   */
  timeUnit?: string;
  /**
   * @remarks
   * The numeric value of the effective recovery duration. The unit is specified by TimeUnit. A non-zero value must be at least 1.
   * 
   * @example
   * 60
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timeUnit: 'TimeUnit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeUnit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

