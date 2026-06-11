// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the deleted context.
   * 
   * @example
   * 897294a7-67a4-4f60-976c-e136edc5f97e
   */
  contextId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5B1D3D4-BB28-5996-8AD2-***********
   */
  requestId?: string;
  /**
   * @remarks
   * The deletion status. For example, deleted.
   * 
   * @example
   * deleted
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      contextId: 'contextId',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

