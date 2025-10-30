// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalCACertificateRequestApiPassthroughExtensions extends $dara.Model {
  extendedKeyUsages?: string[];
  /**
   * @example
   * 0
   */
  pathLenConstraint?: number;
  static names(): { [key: string]: string } {
    return {
      extendedKeyUsages: 'ExtendedKeyUsages',
      pathLenConstraint: 'PathLenConstraint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedKeyUsages: { 'type': 'array', 'itemType': 'string' },
      pathLenConstraint: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extendedKeyUsages)) {
      $dara.Model.validateArray(this.extendedKeyUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalCACertificateRequestApiPassthroughSubject extends $dara.Model {
  commonName?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  locality?: string;
  organization?: string;
  organizationUnit?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      country: 'Country',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      country: 'string',
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalCACertificateRequestApiPassthrough extends $dara.Model {
  extensions?: CreateExternalCACertificateRequestApiPassthroughExtensions;
  subject?: CreateExternalCACertificateRequestApiPassthroughSubject;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: CreateExternalCACertificateRequestApiPassthroughExtensions,
      subject: CreateExternalCACertificateRequestApiPassthroughSubject,
    };
  }

  validate() {
    if(this.extensions && typeof (this.extensions as any).validate === 'function') {
      (this.extensions as any).validate();
    }
    if(this.subject && typeof (this.subject as any).validate === 'function') {
      (this.subject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalCACertificateRequestTags extends $dara.Model {
  key?: string;
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

export class CreateExternalCACertificateRequest extends $dara.Model {
  apiPassthrough?: CreateExternalCACertificateRequestApiPassthrough;
  /**
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----
   * MIIBczCCARgCAQAwgYoxFDASBgNVBAMMC2FsaXl1bi50ZXN0MQ0wCwYDVQQ
   * ...
   * vbIgMQIhAKHDWD6/WAMbtezAt4bysJ/BZIDz1jPWuUR5GV4TJ/mS
   * -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @example
   * cas_deposit-cn-1234abcd
   */
  instanceId?: string;
  resourceGroupId?: string;
  tags?: CreateExternalCACertificateRequestTags[];
  /**
   * @example
   * 10y
   */
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      apiPassthrough: 'ApiPassthrough',
      csr: 'Csr',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      validity: 'Validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPassthrough: CreateExternalCACertificateRequestApiPassthrough,
      csr: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateExternalCACertificateRequestTags },
      validity: 'string',
    };
  }

  validate() {
    if(this.apiPassthrough && typeof (this.apiPassthrough as any).validate === 'function') {
      (this.apiPassthrough as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

