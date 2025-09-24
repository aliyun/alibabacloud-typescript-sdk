// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the financial relationship. Value returned by calling the AddAccountRelation operation.
   * 
   * @example
   * 1234
   */
  relationId?: number;
  /**
   * @remarks
   * The unique ID of the request. The ID is used to mark a request and troubleshoot a problem.
   * 
   * @example
   * requestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      relationId: 'RelationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationId: 'number',
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

