// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevealServiceCredentialResponseBodyDataCredential extends $dara.Model {
  /**
   * @remarks
   * The API key generation mode. Valid values: Custom and Reference. Historical null values are treated as Custom.
   * 
   * @example
   * Custom
   */
  apiKeyGenerateMode?: string;
  /**
   * @remarks
   * The list of Key Management Service (KMS) reference names. This field is returned only in Reference mode. Reference values are not returned.
   * 
   * @example
   * ["my-kms-ref"]
   */
  apiKeyReferences?: string[];
  /**
   * @remarks
   * The list of custom API keys. This field is returned only when apiKeyGenerateMode is set to Custom. The keys are returned in their original order without deduplication.
   * 
   * @example
   * ["sk-xxxxxxxx","sk-yyyyyyyy"]
   */
  apiKeys?: string[];
  /**
   * @remarks
   * Bedrock AWS Access Key
   * 
   * @example
   * AKIAxxxxxxxx
   */
  awsAccessKey?: string;
  /**
   * @remarks
   * Bedrock AWS Region
   * 
   * @example
   * us-east-1
   */
  awsRegion?: string;
  /**
   * @remarks
   * Bedrock AWS Secret Key
   * 
   * @example
   * ********
   */
  awsSecretKey?: string;
  /**
   * @remarks
   * The source of the credential. When backfilled by the PAI-EAS system, the value is pai-eas.
   * 
   * @example
   * pai-eas
   */
  credentialSource?: string;
  /**
   * @remarks
   * The Bedrock endpoint mode. A value of runtime is returned for historical null values.
   * 
   * @example
   * runtime
   */
  endpointMode?: string;
  /**
   * @remarks
   * Kling Access Key
   * 
   * @example
   * AKxxxxxxxx
   */
  klingAccessKey?: string;
  /**
   * @remarks
   * Kling Secret Key
   * 
   * @example
   * ********
   */
  klingSecretKey?: string;
  /**
   * @remarks
   * The original JSON text of the Vertex service account. The text is neither parsed nor reordered.
   * 
   * @example
   * {"type":"service_account","private_key":"********"}
   */
  vertexAuthKey?: string;
  /**
   * @remarks
   * Vertex Project ID
   * 
   * @example
   * my-gcp-project
   */
  vertexProjectId?: string;
  /**
   * @remarks
   * Vertex Region
   * 
   * @example
   * us-central1
   */
  vertexRegion?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyGenerateMode: 'apiKeyGenerateMode',
      apiKeyReferences: 'apiKeyReferences',
      apiKeys: 'apiKeys',
      awsAccessKey: 'awsAccessKey',
      awsRegion: 'awsRegion',
      awsSecretKey: 'awsSecretKey',
      credentialSource: 'credentialSource',
      endpointMode: 'endpointMode',
      klingAccessKey: 'klingAccessKey',
      klingSecretKey: 'klingSecretKey',
      vertexAuthKey: 'vertexAuthKey',
      vertexProjectId: 'vertexProjectId',
      vertexRegion: 'vertexRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyGenerateMode: 'string',
      apiKeyReferences: { 'type': 'array', 'itemType': 'string' },
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      awsAccessKey: 'string',
      awsRegion: 'string',
      awsSecretKey: 'string',
      credentialSource: 'string',
      endpointMode: 'string',
      klingAccessKey: 'string',
      klingSecretKey: 'string',
      vertexAuthKey: 'string',
      vertexProjectId: 'string',
      vertexRegion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeyReferences)) {
      $dara.Model.validateArray(this.apiKeyReferences);
    }
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevealServiceCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current configuration revision. For legacy objects, the value is legacy.
   * 
   * @example
   * 1
   */
  configRevision?: string;
  /**
   * @remarks
   * The credential object for the currently active type. Only the fields corresponding to the credentialType are populated.
   * 
   * @example
   * {"apiKeyGenerateMode":"Custom","apiKeys":["sk-xxxxxxxx"]}
   */
  credential?: RevealServiceCredentialResponseBodyDataCredential;
  /**
   * @remarks
   * The currently active credential type. Valid values: apiKey, bedrock, vertex, and kling.
   * 
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @remarks
   * The name of the provider, such as qwen, openai, bedrock, vertex, kling, or pai-eas.
   * 
   * @example
   * qwen
   */
  provider?: string;
  /**
   * @remarks
   * The unique ID of the service.
   * 
   * @example
   * svc-xxxxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      configRevision: 'configRevision',
      credential: 'credential',
      credentialType: 'credentialType',
      provider: 'provider',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRevision: 'string',
      credential: RevealServiceCredentialResponseBodyDataCredential,
      credentialType: 'string',
      provider: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevealServiceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Ok indicates success.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The currently active credential data.
   * 
   * @example
   * {"serviceId":"svc-xxxxxxxx","provider":"qwen","credentialType":"apiKey","configRevision":"1","credential":{"apiKeyGenerateMode":"Custom","apiKeys":["sk-xxxxxxxx"]}}
   */
  data?: RevealServiceCredentialResponseBodyData;
  /**
   * @remarks
   * The response message. A value of success indicates success.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      data: RevealServiceCredentialResponseBodyData,
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

