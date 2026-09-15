// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessSoarStrategyTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The China Chinese Cloud generates a unique identifier for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

