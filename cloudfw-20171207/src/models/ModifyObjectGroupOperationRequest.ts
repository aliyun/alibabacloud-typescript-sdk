// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyObjectGroupOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The comment for the operation.
   * 
   * @example
   * Comment for batch whitelisting
   */
  comment?: string;
  /**
   * @remarks
   * The traffic direction controlled by the access control policy. Valid values:
   * - **in**: inbound
   * - **out**: outbound
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
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
   * The operation to whitelist, remove from the whitelist, follow, or unfollow an object. Valid values:
   * - **subscribe**: follow
   * - **unsubscribe**: unfollow
   * - **ignore**: add to the whitelist
   * - **cancelIgnore**: remove from the whitelist
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  objectOperation?: string;
  /**
   * @remarks
   * The type of the object to whitelist or follow for outbound connections. Valid values:
   * - **assetsIp**: asset IP address
   * - **destinationIp**: destination IP address
   * - **destinationPort**: destination port
   * - **destinationDomain**: destination domain name
   * 
   * This parameter is required.
   * 
   * @example
   * destinationDomain
   */
  objectType?: string;
  /**
   * @remarks
   * The source IP address of the requester.
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

