// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogStatusResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * alb-wewbb23dfsetetcic****
   */
  resource?: string;
  /**
   * @remarks
   * Indicates whether the log collection feature is enabled for the protected object. Valid values:
   * 
   * *   **true:** The log collection feature is enabled.
   * *   **false:** The log collection feature is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

