// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCreatedByEnabledResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  openStatus?: boolean;
  /**
   * @example
   * 682DD9E1-F530-5D14-A839-A6787FA82B74
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

