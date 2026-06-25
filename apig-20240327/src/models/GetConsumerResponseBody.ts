// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AkSkIdentityConfig } from "./AkSkIdentityConfig";
import { ApiKeyIdentityConfig } from "./ApiKeyIdentityConfig";
import { JwtIdentityConfig } from "./JwtIdentityConfig";


export class GetConsumerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * As configurações de autenticação por par de AccessKey.
   */
  akSkIdentityConfigs?: AkSkIdentityConfig[];
  /**
   * @remarks
   * A configuração de autenticação de chave de API.
   */
  apiKeyIdentityConfig?: ApiKeyIdentityConfig;
  /**
   * @remarks
   * O ID do consumidor de API.
   */
  consumerId?: string;
  /**
   * @remarks
   * O carimbo de data/hora de criação.
   */
  createTimestamp?: number;
  /**
   * @remarks
   * O status de publicação da API no ambiente atual.
   */
  deployStatus?: string;
  /**
   * @remarks
   * A descrição.
   */
  description?: string;
  /**
   * @remarks
   * Indica se o consumidor de API está habilitado.
   */
  enable?: boolean;
  /**
   * @remarks
   * A configuração de autenticação JWT.
   */
  jwtIdentityConfig?: JwtIdentityConfig;
  /**
   * @remarks
   * O nome do consumidor de API.
   */
  name?: string;
  /**
   * @remarks
   * O carimbo de data/hora de atualização.
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      akSkIdentityConfigs: 'akSkIdentityConfigs',
      apiKeyIdentityConfig: 'apiKeyIdentityConfig',
      consumerId: 'consumerId',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      description: 'description',
      enable: 'enable',
      jwtIdentityConfig: 'jwtIdentityConfig',
      name: 'name',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akSkIdentityConfigs: { 'type': 'array', 'itemType': AkSkIdentityConfig },
      apiKeyIdentityConfig: ApiKeyIdentityConfig,
      consumerId: 'string',
      createTimestamp: 'number',
      deployStatus: 'string',
      description: 'string',
      enable: 'boolean',
      jwtIdentityConfig: JwtIdentityConfig,
      name: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.akSkIdentityConfigs)) {
      $dara.Model.validateArray(this.akSkIdentityConfigs);
    }
    if(this.apiKeyIdentityConfig && typeof (this.apiKeyIdentityConfig as any).validate === 'function') {
      (this.apiKeyIdentityConfig as any).validate();
    }
    if(this.jwtIdentityConfig && typeof (this.jwtIdentityConfig as any).validate === 'function') {
      (this.jwtIdentityConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerResponseBody extends $dara.Model {
  /**
   * @remarks
   * O código de resposta.
   */
  code?: string;
  /**
   * @remarks
   * Os dados de resposta.
   */
  data?: GetConsumerResponseBodyData;
  /**
   * @remarks
   * A mensagem de resposta.
   */
  message?: string;
  /**
   * @remarks
   * O ID da solicitação.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetConsumerResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

