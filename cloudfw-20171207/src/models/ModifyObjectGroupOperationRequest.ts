// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyObjectGroupOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the operation.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The direction of the traffic to which the access control policy applies.
   * 
   * Valid values:
   * 
   * *   **in**: inbound.
   * *   **out**: outbound.
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operation objects.
   * 
   * This parameter is required.
   */
  objectList?: string[];
  /**
   * @remarks
   * The operation. Valid values:
   * 
   * *   **ignore**: adds the operation object to the whitelist.
   * *   **cancelIgnore**: removes the operation object from the whitelist.
   * *   **subscribe**: follows the operation object.
   * *   **unsubscribe**: unfollows the operation object.
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  objectOperation?: string;
  /**
   * @remarks
   * The type of the operation object.
   * 
   * Valid values:
   * 
   * *   **assetsIp**: the asset IP address.
   * *   **destinationIp**: the destination IP address.
   * *   **destinationPort**: the destination port.
   * *   **destinationDomain**: the destination domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * destinationDomain
   */
  objectType?: string;
  /**
   * @remarks
   * The source IP address of the request.
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

