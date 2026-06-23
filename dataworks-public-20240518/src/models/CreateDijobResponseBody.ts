// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * This field is deprecated. Use the `Id` field instead.
   * 
   * @example
   * 11792
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The data integration job ID.
   * 
   * @example
   * 11792
   */
  id?: number;
  /**
   * @remarks
   * The request ID. Use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 4F6AB6B3-41FB-5EBB-AFB2-0C98D49DA2BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      id: 'number',
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

