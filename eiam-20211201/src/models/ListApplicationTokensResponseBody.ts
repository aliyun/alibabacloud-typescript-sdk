// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationTokensResponseBodyApplicationTokens extends $dara.Model {
  /**
   * @remarks
   * aliUid。
   * 
   * @example
   * 1973166921975xxxx
   */
  aliUid?: number;
  /**
   * @remarks
   * 应用ID
   * 
   * @example
   * app_m7ar5tms4dwtggavalk3j3mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 应用token
   * 
   * @example
   * SATFwqX8zxGf83pJcJw78KFGjmrft4erWeZYBGS8oE7NN6qoE217yaJpUdMb1UuuGqhDiF43sCA4CF91CTL5iGntqwyLuaAcS9FJ9HfGadE5a7TjiwVafwrBYktxxxx
   */
  applicationToken?: string;
  /**
   * @remarks
   * 应用token ID
   * 
   * @example
   * token_ndfxxigahelfne2y2hodehrxxxx
   */
  applicationTokenId?: string;
  /**
   * @remarks
   * 应用token类型
   * 
   * @example
   * bearer_token
   */
  applicationTokenType?: string;
  /**
   * @example
   * 1747796654000
   */
  createTime?: number;
  /**
   * @remarks
   * 应用token描述
   * 
   * @example
   * jwqtts-0430
   */
  description?: string;
  /**
   * @remarks
   * 到期时间
   * 
   * @example
   * 1747796654000
   */
  expirationTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_ki6hd7ihir4ybawogqk6kqxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 最后使用时间
   * 
   * @example
   * 1747796654000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * 应用状态
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      applicationId: 'ApplicationId',
      applicationToken: 'ApplicationToken',
      applicationTokenId: 'ApplicationTokenId',
      applicationTokenType: 'ApplicationTokenType',
      createTime: 'CreateTime',
      description: 'Description',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      applicationId: 'string',
      applicationToken: 'string',
      applicationTokenId: 'string',
      applicationTokenType: 'string',
      createTime: 'number',
      description: 'string',
      expirationTime: 'number',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationTokensResponseBody extends $dara.Model {
  applicationTokens?: ListApplicationTokensResponseBodyApplicationTokens[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTokens: 'ApplicationTokens',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTokens: { 'type': 'array', 'itemType': ListApplicationTokensResponseBodyApplicationTokens },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationTokens)) {
      $dara.Model.validateArray(this.applicationTokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

