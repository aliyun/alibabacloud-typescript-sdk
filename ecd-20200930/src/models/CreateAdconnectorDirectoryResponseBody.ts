// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateADConnectorDirectoryResponseBodyAdConnectors extends $dara.Model {
  /**
   * @remarks
   * The connection address.
   * 
   * @example
   * ``127.0.**.**``
   */
  address?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of AD connectors.
   */
  adConnectors?: CreateADConnectorDirectoryResponseBodyAdConnectors[];
  /**
   * @remarks
   * The ID of the AD directory.
   * 
   * @example
   * cn-hangzhou+dir-gx2x1dhsmu52rd****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3FE99D5E-93A1-493F-B1CB-0ABD4D05BEFF
   */
  requestId?: string;
  /**
   * @remarks
   * The AD trust password.
   * 
   * @example
   * 82Tg****
   */
  trustPassword?: string;
  static names(): { [key: string]: string } {
    return {
      adConnectors: 'AdConnectors',
      directoryId: 'DirectoryId',
      requestId: 'RequestId',
      trustPassword: 'TrustPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adConnectors: { 'type': 'array', 'itemType': CreateADConnectorDirectoryResponseBodyAdConnectors },
      directoryId: 'string',
      requestId: 'string',
      trustPassword: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adConnectors)) {
      $dara.Model.validateArray(this.adConnectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

