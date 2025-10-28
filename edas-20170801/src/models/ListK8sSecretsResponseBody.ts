// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sSecretsResponseBodyResultSecretsCertDetail extends $dara.Model {
  /**
   * @remarks
   * Domain names that are associated with the SSL certificate.
   */
  domainNames?: string[];
  /**
   * @remarks
   * The time when the SSL certificate expired.
   * 
   * @example
   * 2022-02-22T02:32:41Z
   */
  endTime?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the SSL certificate.
   * 
   * @example
   * CN=GlobalSign Root CA, OU=Root CA, O=GlobalSign nv-sa, C=BE
   */
  issuer?: string;
  /**
   * @remarks
   * The time when the SSL certificate started to take effect.
   * 
   * @example
   * 2022-01-02T22:40:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the SSL certificate. Valid values:
   * 
   * *   normal: The SSL certificate is valid.
   * *   invalid: The SSL certificate is invalid.
   * *   expired: The SSL certificate has expired.
   * *   not_yet_valid: The SSL certificate is currently invalid.
   * *   about_to_expire: The SSL certificate is about to expire.
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      endTime: 'EndTime',
      issuer: 'Issuer',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      issuer: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainNames)) {
      $dara.Model.validateArray(this.domainNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResultSecretsData extends $dara.Model {
  /**
   * @remarks
   * The user-defined key of the Kubernetes Secret.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The user-defined value of the Kubernetes Secret.
   * 
   * @example
   * william
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResultSecretsRelatedApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * b08eeb18-8946-410c-a1ea-dbbc********
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * my-app
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

export class ListK8sSecretsResponseBodyResultSecretsRelatedIngressRulesRelatedApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 6dc74432-5a35-4e68-8aaa-3700********
   */
  appId?: string;
  /**
   * @remarks
   * The name of the EDAS application.
   * 
   * @example
   * app-test
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

export class ListK8sSecretsResponseBodyResultSecretsRelatedIngressRules extends $dara.Model {
  /**
   * @remarks
   * The name of the rule in the Ingress.
   * 
   * @example
   * testrulename
   */
  name?: string;
  /**
   * @remarks
   * The namespaces of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Aplications that are associated with the Ingress.
   */
  relatedApps?: ListK8sSecretsResponseBodyResultSecretsRelatedIngressRulesRelatedApps[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
      relatedApps: 'RelatedApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      relatedApps: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecretsRelatedIngressRulesRelatedApps },
    };
  }

  validate() {
    if(Array.isArray(this.relatedApps)) {
      $dara.Model.validateArray(this.relatedApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResultSecrets extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data is Base64-encoded. Valid values:
   * 
   * *   true: The data is Base64-encoded.
   * *   false: The data is not Base64-encoded.
   * 
   * @example
   * false
   */
  base64Encoded?: boolean;
  /**
   * @remarks
   * The details of the Secure Sockets Layer (SSL) certificate.
   */
  certDetail?: ListK8sSecretsResponseBodyResultSecretsCertDetail;
  /**
   * @remarks
   * The ID of the certificate provided by Alibaba Cloud Certificate Management Service.
   * 
   * @example
   * 123456
   */
  certId?: string;
  /**
   * @remarks
   * The region in which the certificate is stored.
   * 
   * @example
   * cn-hangzhou
   */
  certRegionId?: string;
  /**
   * @remarks
   * The ID of the cluster in Enterprise Distributed Application Service (EDAS).
   * 
   * @example
   * 4472a6d3-f01d-4087-85a7-3dc52********
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test-cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the Secret was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-26T02:57:02Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The data of the Kubernetes Secret.
   */
  data?: ListK8sSecretsResponseBodyResultSecretsData[];
  /**
   * @remarks
   * The name of the Secret. The name must start with a letter, and can contain digits, letters, and hyphens (-). It can be up to 63 characters in length.
   * 
   * @example
   * my-secret
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Applications that use the Secret.
   */
  relatedApps?: ListK8sSecretsResponseBodyResultSecretsRelatedApps[];
  /**
   * @remarks
   * Rules in the Ingress that is associated with the Secret.
   */
  relatedIngressRules?: ListK8sSecretsResponseBodyResultSecretsRelatedIngressRules[];
  /**
   * @remarks
   * The type of the Secret. Valid values:
   * 
   * *   Opaque: user-defined data
   * *   kubernetes.io/tls: Transport Layer Security (TLS) certificate
   * 
   * @example
   * Opaque
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      base64Encoded: 'Base64Encoded',
      certDetail: 'CertDetail',
      certId: 'CertId',
      certRegionId: 'CertRegionId',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      creationTime: 'CreationTime',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
      relatedApps: 'RelatedApps',
      relatedIngressRules: 'RelatedIngressRules',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64Encoded: 'boolean',
      certDetail: ListK8sSecretsResponseBodyResultSecretsCertDetail,
      certId: 'string',
      certRegionId: 'string',
      clusterId: 'string',
      clusterName: 'string',
      creationTime: 'string',
      data: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecretsData },
      name: 'string',
      namespace: 'string',
      relatedApps: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecretsRelatedApps },
      relatedIngressRules: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecretsRelatedIngressRules },
      type: 'string',
    };
  }

  validate() {
    if(this.certDetail && typeof (this.certDetail as any).validate === 'function') {
      (this.certDetail as any).validate();
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.relatedApps)) {
      $dara.Model.validateArray(this.relatedApps);
    }
    if(Array.isArray(this.relatedIngressRules)) {
      $dara.Model.validateArray(this.relatedIngressRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sSecretsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The information about Kubernetes Secrets.
   */
  secrets?: ListK8sSecretsResponseBodyResultSecrets[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 6
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      secrets: 'Secrets',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secrets: { 'type': 'array', 'itemType': ListK8sSecretsResponseBodyResultSecrets },
      total: 'number',
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

export class ListK8sSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned query results of Kubernetes Secrets.
   */
  result?: ListK8sSecretsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListK8sSecretsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

