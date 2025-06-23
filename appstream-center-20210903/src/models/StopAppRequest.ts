// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAppRequest extends $dara.Model {
  /**
   * @example
   * 1924794279035094
   */
  aliUid?: number;
  /**
   * @example
   * AnonymousUserAPI
   */
  apiType?: string;
  /**
   * @example
   * ca-fxwp4koywsglzvvex
   */
  appId?: string;
  /**
   * @example
   * aig-89ibriac2wudyph38
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-d297eyf83g5niwnjl
   */
  appInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * pc
   */
  clientChannel?: string;
  /**
   * @example
   * 91b79184-51d0-42ad-8475-78cae95b0aa6
   */
  clientId?: string;
  /**
   * @example
   * 22.21.2.79
   */
  clientIp?: string;
  /**
   * @example
   * windows_"Windows 10 Enterprise" 10.0 (Build 19042)
   */
  clientOS?: string;
  /**
   * @example
   * 3.1.1-R-20211022.144255
   */
  clientVersion?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  /**
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @example
   * idp-9ie5smicnct2xodn2
   */
  idpId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v185fdd7f6d39fa7861981639366085772e150a390a5bb7b43c4e62440d94fc392b945770e1596cebe90085ce0af4d330e
   */
  loginToken?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 597e869d-ea14-4b83-9490-714f68bfe935
   */
  sessionId?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B26903
   */
  uuid?: string;
  /**
   * @example
   * ac3cb49059261898
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      apiType: 'ApiType',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      bizRegionId: 'BizRegionId',
      clientChannel: 'ClientChannel',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      forceStop: 'ForceStop',
      idpId: 'IdpId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      uuid: 'Uuid',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      apiType: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      bizRegionId: 'string',
      clientChannel: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      forceStop: 'boolean',
      idpId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      regionId: 'string',
      sessionId: 'string',
      uuid: 'string',
      wyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

