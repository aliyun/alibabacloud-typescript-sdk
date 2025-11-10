// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNotifyStrategyResponseBody extends $dara.Model {
  /**
   * @example
   * 12312-31-23-123-1-23123
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notifyStrategyId: 'notifyStrategyId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyStrategyId: 'string',
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

