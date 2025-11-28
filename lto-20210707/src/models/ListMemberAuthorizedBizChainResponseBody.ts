// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemberAuthorizedBizChainResponseBodyDataPeerList extends $dara.Model {
  authorized?: boolean;
  peerName?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      peerName: 'PeerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      peerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberAuthorizedBizChainResponseBodyData extends $dara.Model {
  authorized?: boolean;
  bizChainId?: string;
  bizChainName?: string;
  bizChainType?: string;
  peerList?: ListMemberAuthorizedBizChainResponseBodyDataPeerList[];
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      bizChainId: 'BizChainId',
      bizChainName: 'BizChainName',
      bizChainType: 'BizChainType',
      peerList: 'PeerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      bizChainId: 'string',
      bizChainName: 'string',
      bizChainType: 'string',
      peerList: { 'type': 'array', 'itemType': ListMemberAuthorizedBizChainResponseBodyDataPeerList },
    };
  }

  validate() {
    if(Array.isArray(this.peerList)) {
      $dara.Model.validateArray(this.peerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberAuthorizedBizChainResponseBody extends $dara.Model {
  code?: string;
  data?: ListMemberAuthorizedBizChainResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListMemberAuthorizedBizChainResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

