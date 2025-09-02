// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The synchronization task ID.
   * 
   * @example
   * 11792
   */
  DIJobId?: number;
  /**
   * @remarks
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * 4F6AB6B3-41FB-5EBB-AFB2-0C98D49DA2BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
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

