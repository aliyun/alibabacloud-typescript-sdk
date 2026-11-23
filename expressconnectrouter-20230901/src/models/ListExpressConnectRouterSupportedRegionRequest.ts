// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExpressConnectRouterSupportedRegionRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * Generate a value that is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** as the **ClientToken**. Each request has a unique **RequestId**.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of network instance. Valid values:
   * 
   * - **TR**: transit router instance.
   * 
   * - **VBR**: virtual border router instance.
   * 
   * - **VPC**: virtual private cloud instance.
   * 
   * This parameter is required.
   * 
   * @example
   * VBR
   */
  nodeType?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nodeType: 'NodeType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nodeType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

