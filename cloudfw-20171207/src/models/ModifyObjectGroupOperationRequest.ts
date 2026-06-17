// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyObjectGroupOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks for the operation.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The traffic direction that is controlled by the access control policy.
   * 
   * Valid values:
   * 
   * - **in**: Inbound traffic.
   * 
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
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of objects.
   * 
   * This parameter is required.
   */
  objectList?: string[];
  /**
   * @remarks
   * The operation to perform. Valid values:
   * 
   * - **subscribe**: Follows the object.
   * 
   * - **unsubscribe**: Unfollows the object.
   * 
   * - **ignore**: Adds the object to the whitelist.
   * 
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
   * The type of object to add to the whitelist or follow.
   * 
   * Valid values:
   * 
   * - **assetsIp**: Asset IP address.
   * 
   * - **destinationIp**: Destination IP address.
   * 
   * - **destinationPort**: Destination port.
   * 
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

