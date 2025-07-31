// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BE0D8D2-6702-5639-A9C2-xxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether an SLR is created.
   * 
   * @example
   * True
   */
  serviceLinkedRoleExists?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceLinkedRoleExists: 'ServiceLinkedRoleExists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceLinkedRoleExists: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

