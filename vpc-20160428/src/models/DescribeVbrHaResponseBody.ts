// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVbrHaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the VBR was created.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the VBR failover group.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The name of the VBR failover group.
   * 
   * @example
   * VBRHa
   */
  name?: string;
  /**
   * @remarks
   * The ID of the other VBR in the VBR failover group.
   * 
   * @example
   * vbr-bp12mw1f8k3jgygk9****
   */
  peerVbrId?: string;
  /**
   * @remarks
   * The ID of the region in which the VBR is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the VBR failover group.
   * 
   * *   **Creating**
   * *   **Active**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VBR failover group.
   * 
   * @example
   * vbrha-sa1sxheuxtd98****
   */
  vbrHaId?: string;
  /**
   * @remarks
   * The VBR ID.
   * 
   * @example
   * vbr-bp1jcg5cmxjbl9xgc****
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      name: 'Name',
      peerVbrId: 'PeerVbrId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      vbrHaId: 'VbrHaId',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      name: 'string',
      peerVbrId: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      vbrHaId: 'string',
      vbrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

