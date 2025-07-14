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
   * The time when the Secret was created.
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
   * The Secret ID.
   * 
   * @example
   * 16
   */
  secretId?: number;
  /**
   * @remarks
   * The Secret name.
   * 
   * @example
   * registry-auth
   */
  secretName?: string;
  /**
   * @remarks
   * The Secret type.
   * 
   * Set the value to **kubernetes.io/dockerconfigjson**. The value indicates the secret for the username and password of the image repository and is used for authentication when images are pulled during application deployment.
   * 
   * @example
   * kubernetes.io/dockerconfigjson
   */
  secretType?: string;
  /**
   * @remarks
   * The time when the Secret was updated.
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
   * The Secrets.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListSecretsResponseBodyData;
  /**
   * @remarks
   * The error code returned. Take note of the following rules:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section in this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Take note of the following rules:
   * 
   * *   If the call is successful, **success** is returned.
   * *   If the call fails, an error code is returned.
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
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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

