// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReimageNodesRequestNodes extends $dara.Model {
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * 457db5ca-241d-11ed-9fd7-acde48001122
   */
  hostname?: string;
  /**
   * @remarks
   * The system image ID.
   * 
   * @example
   * m-8vbf8rpv2nn14y7oybjy
   */
  imageId?: string;
  /**
   * @remarks
   * The logon password.
   * 
   * @example
   * ***
   */
  loginPassword?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-zvp2tgykr0b
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      imageId: 'ImageId',
      loginPassword: 'LoginPassword',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      imageId: 'string',
      loginPassword: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

