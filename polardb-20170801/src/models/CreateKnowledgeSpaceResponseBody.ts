// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeSpaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB instance created by automatic creation.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The unique identifier of the knowledge space.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20951253014****
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2F029645-FED9-4FE8-A6D3-488954******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      knowledgeSpaceId: 'KnowledgeSpaceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      knowledgeSpaceId: 'string',
      orderId: 'string',
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

