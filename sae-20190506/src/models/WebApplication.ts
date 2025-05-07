// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RevisionConfig } from "./RevisionConfig";
import { WebScalingConfig } from "./WebScalingConfig";
import { WebTrafficConfig } from "./WebTrafficConfig";


export class WebApplication extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  applicationName?: string;
  createdTime?: string;
  description?: string;
  internetURL?: string;
  intranetURL?: string;
  lastModifiedTime?: string;
  namespaceId?: string;
  revisionConfig?: RevisionConfig;
  vpcId?: string;
  webScalingConfig?: WebScalingConfig;
  webTrafficConfig?: WebTrafficConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      createdTime: 'CreatedTime',
      description: 'Description',
      internetURL: 'InternetURL',
      intranetURL: 'IntranetURL',
      lastModifiedTime: 'LastModifiedTime',
      namespaceId: 'NamespaceId',
      revisionConfig: 'RevisionConfig',
      vpcId: 'VpcId',
      webScalingConfig: 'WebScalingConfig',
      webTrafficConfig: 'WebTrafficConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      createdTime: 'string',
      description: 'string',
      internetURL: 'string',
      intranetURL: 'string',
      lastModifiedTime: 'string',
      namespaceId: 'string',
      revisionConfig: RevisionConfig,
      vpcId: 'string',
      webScalingConfig: WebScalingConfig,
      webTrafficConfig: WebTrafficConfig,
    };
  }

  validate() {
    if(this.revisionConfig && typeof (this.revisionConfig as any).validate === 'function') {
      (this.revisionConfig as any).validate();
    }
    if(this.webScalingConfig && typeof (this.webScalingConfig as any).validate === 'function') {
      (this.webScalingConfig as any).validate();
    }
    if(this.webTrafficConfig && typeof (this.webTrafficConfig as any).validate === 'function') {
      (this.webTrafficConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

