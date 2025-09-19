// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUsageTopRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset fingerprint. Valid value:
   * 
   * *   **port**: port
   * *   **process**: process
   * *   **software**: software
   * *   **user**: account
   * *   **sca**: middleware
   * 
   * This parameter is required.
   * 
   * @example
   * port
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

