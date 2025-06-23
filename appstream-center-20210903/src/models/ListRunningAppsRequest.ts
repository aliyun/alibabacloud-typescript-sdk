// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRunningAppsRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 370b56f8-2812-4b6c-bfa6-2560791cad88
   */
  clientId?: string;
  /**
   * @example
   * 22.21.2.32
   */
  clientIp?: string;
  /**
   * @example
   * windows_"Windows 10 Enterprise" 10.0 (Build 18363)
   */
  clientOS?: string;
  /**
   * @example
   * 0.1.0-R-20220512.175656
   */
  clientVersion?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v1124500957832f30b3e716406562071655aa43b2a723ed2be0837815483d54e025db13ba5469f06f2410d0efc4d302e36
   */
  loginToken?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * a863f4c3-2f1d-4971-8cf7-e2b92ae97764
   */
  sessionId?: string;
  /**
   * @example
   * 1735953493960828
   */
  tenantId?: string;
  /**
   * @example
   * 470E8C12AB78CE9C3F6627DD0409E51D
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      sessionId: 'string',
      tenantId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

