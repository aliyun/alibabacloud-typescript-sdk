// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreatedByEnabledResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the createdby tag is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  openStatus?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 682DD9E1-F530-5D14-A839-A6787FA8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openStatus: 'OpenStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openStatus: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

