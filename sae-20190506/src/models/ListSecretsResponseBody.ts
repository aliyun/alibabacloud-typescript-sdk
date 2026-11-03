// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsResponseBodyDataSecretsRelateApps extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * f16b4000-9058-4c22-a49d-49a28f0b****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodyDataSecrets extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1593760185111
   */
  createTime?: number;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The associated applications.
   */
  relateApps?: ListSecretsResponseBodyDataSecretsRelateApps[];
  /**
   * @remarks
   * The Secret instance ID.
   * 
   * @example
   * 16
   */
  secretId?: number;
  /**
   * @remarks
   * The name of the Secret instance.
   * 
   * @example
   * registry-auth
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the Secret instance. Valid values:
   * 
   * - **kubernetes.io/dockerconfigjson**: A secret that stores the username and password of an image repository. It is used for image pull authentication during deployment.
   * 
   * @example
   * kubernetes.io/dockerconfigjson
   */
  secretType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1593760185111
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      secretId: 'SecretId',
      secretName: 'SecretName',
      secretType: 'SecretType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': ListSecretsResponseBodyDataSecretsRelateApps },
      secretId: 'number',
      secretName: 'string',
      secretType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.relateApps)) {
      $dara.Model.validateArray(this.relateApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of Secret instances.
   */
  secrets?: ListSecretsResponseBodyDataSecrets[];
  static names(): { [key: string]: string } {
    return {
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secrets: { 'type': 'array', 'itemType': ListSecretsResponseBodyDataSecrets },
    };
  }

  validate() {
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirect.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListSecretsResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - Success: The **ErrorCode** field is not returned.
   * - Failure: The **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.NotEmpty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - **success**: The request is successful.
   * - Specific error code: The request failed.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the Secret instance list was successfully queried. Valid values:
   * 
   * - **true**: The query was successful.
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to precisely query call information.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSecretsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

