// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the security alert event to be handled.
   * 
   * This parameter is required.
   * 
   * @example
   * 61352054
   */
  securityEventId?: number;
  static names(): { [key: string]: string } {
    return {
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

