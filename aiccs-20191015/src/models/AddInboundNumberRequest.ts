// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInboundNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the large language model application.
   * 
   * This parameter is required.
   * 
   * @example
   * DLWERWLD
   */
  applicationCode?: string;
  /**
   * @remarks
   * The list of inbound numbers.
   * 
   * This parameter is required.
   */
  inboundNumbers?: string[];
  /**
   * @remarks
   * The line type. Valid values:
   * - 1: Cloud communication resource.
   * - 2: Customer-provided line.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  inboundType?: number;
  /**
   * @remarks
   * The custom line code.
   * 
   * @example
   * JILIANG_*****_TEST_NET
   */
  lineCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      inboundNumbers: 'InboundNumbers',
      inboundType: 'InboundType',
      lineCode: 'LineCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      inboundNumbers: { 'type': 'array', 'itemType': 'string' },
      inboundType: 'number',
      lineCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inboundNumbers)) {
      $dara.Model.validateArray(this.inboundNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

