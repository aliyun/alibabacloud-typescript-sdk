// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CertConfig } from "./CertConfig";
import { TLSConfig } from "./Tlsconfig";
import { WAFConfig } from "./Wafconfig";


export class UpdateCustomDomainInput extends $dara.Model {
  applicationID?: string;
  applicationName?: string;
  certConfig?: CertConfig;
  keepFullPath?: boolean;
  namespaceID?: string;
  protocol?: string;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      applicationID: 'applicationID',
      applicationName: 'applicationName',
      certConfig: 'certConfig',
      keepFullPath: 'keepFullPath',
      namespaceID: 'namespaceID',
      protocol: 'protocol',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationID: 'string',
      applicationName: 'string',
      certConfig: CertConfig,
      keepFullPath: 'boolean',
      namespaceID: 'string',
      protocol: 'string',
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  validate() {
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.tlsConfig && typeof (this.tlsConfig as any).validate === 'function') {
      (this.tlsConfig as any).validate();
    }
    if(this.wafConfig && typeof (this.wafConfig as any).validate === 'function') {
      (this.wafConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

