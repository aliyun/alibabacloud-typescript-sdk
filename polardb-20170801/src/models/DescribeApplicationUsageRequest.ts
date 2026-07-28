// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The Hermes application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-123456
   */
  applicationId?: string;
  /**
   * @remarks
   * The number of recent days to query. Valid values: 1 to 365. Default value: 30.
   * 
   * @example
   * 30
   */
  days?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      days: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

