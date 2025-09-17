// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindIdpListByLoginIdentifierRequest extends $dara.Model {
  availableFeatures?: { [key: string]: string };
  /**
   * @example
   * pc
   */
  clientChannel?: string;
  /**
   * @example
   * 370b56f8-2812-4b6c-bfa6-2560791c****
   */
  clientId?: string;
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Enterprise\\" 10.0 (Build 14393)
   */
  clientOS?: string;
  /**
   * @example
   * 2.0.1-D-20211008.101607
   */
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Aliyun123***
   */
  loginIdentifier?: string;
  supportTypes?: string[];
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      availableFeatures: 'AvailableFeatures',
      clientChannel: 'ClientChannel',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      loginIdentifier: 'LoginIdentifier',
      supportTypes: 'SupportTypes',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableFeatures: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clientChannel: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      loginIdentifier: 'string',
      supportTypes: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  validate() {
    if(this.availableFeatures) {
      $dara.Model.validateMap(this.availableFeatures);
    }
    if(Array.isArray(this.supportTypes)) {
      $dara.Model.validateArray(this.supportTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

