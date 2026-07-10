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
   * The application ID.
   * 
   * @example
   * app_m7ar5tms4dwtggavalk3j3mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The application tokens.
   * 
   * @example
   * SATFwqX8zxGf83pJcJw78KFGjmrft4erWeZYBGS8oE7NN6qoE217yaJpUdMb1UuuGqhDiF43sCA4CF91CTL5iGntqwyLuaAcS9FJ9HfGadE5a7TjiwVafwrBYktxxxx
   */
  applicationToken?: string;
  /**
   * @remarks
   * The application token ID.
   * 
   * @example
   * token_ndfxxigahelfne2y2hodehrxxxx
   */
  applicationTokenId?: string;
  /**
   * @remarks
   * The application token type.
   * 
   * @example
   * bearer_token
   */
  applicationTokenType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1747796654000
   */
  createTime?: number;
  /**
   * @remarks
   * The application token description.
   * 
   * @example
   * jwqtts-0430
   */
  description?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1747796654000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The IDaaS EIAM instance ID.
   * 
   * @example
   * idaas_ki6hd7ihir4ybawogqk6kqxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The last used time.
   * 
   * @example
   * 1747796654000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The enabling status.
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
  /**
   * @remarks
   * The application tokens.
   */
  applicationTokens?: ListApplicationTokensResponseBodyApplicationTokens[];
  /**
   * @remarks
   * The request ID.
   * 
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

