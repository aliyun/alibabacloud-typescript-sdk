// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyObjectGroupOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The comment for the operation.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The traffic direction controlled by the access control policy. Valid values:
   * - **in**: Inbound traffic.
   * - **out**: Outbound traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language for receiving messages. Valid values:
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of objects to operate on.
   * 
   * This parameter is required.
   */
  objectList?: string[];
  /**
   * @remarks
   * The operation to perform on the object, such as adding to or removing from a whitelist, or subscribing to or unsubscribing from the object. Valid values:
   * - **subscribe**: Subscribes to the object.
   * - **unsubscribe**: Unsubscribes from the object.
   * - **ignore**: Adds the object to the whitelist.
   * - **cancelIgnore**: Removes the object from the whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  objectOperation?: string;
  /**
   * @remarks
   * The type of the outbound connection whitelist or subscription. Valid values:
   * - **assetsIp**: Asset IP address.
   * - **destinationIp**: Destination IP address.
   * - **destinationPort**: Destination port.
   * - **destinationDomain**: Destination domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * destinationDomain
   */
  objectType?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 123.xxx.251.60
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      direction: 'Direction',
      lang: 'Lang',
      objectList: 'ObjectList',
      objectOperation: 'ObjectOperation',
      objectType: 'ObjectType',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      direction: 'string',
      lang: 'string',
      objectList: { 'type': 'array', 'itemType': 'string' },
      objectOperation: 'string',
      objectType: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

