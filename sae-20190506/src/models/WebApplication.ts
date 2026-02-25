// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RevisionConfig } from "./RevisionConfig";
import { WebScalingConfig } from "./WebScalingConfig";
import { WebTrafficConfig } from "./WebTrafficConfig";


export class WebApplication extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  applicationId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * sae-app
   */
  applicationName?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2019-07-11 15:54:49
   */
  createdTime?: string;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * my sae app
   */
  description?: string;
  /**
   * @remarks
   * The public URL for accessing the application.
   * 
   * @example
   * https://****.cn-hangzhou.sae.run
   */
  internetURL?: string;
  /**
   * @remarks
   * The internal URL for accessing the application.
   * 
   * @example
   * https://****.cn-hangzhou-vpc.sae.run
   */
  intranetURL?: string;
  /**
   * @remarks
   * The time when the application was last modified.
   * 
   * @example
   * 2019-07-11 20:12:58
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The ID of the namespace to which the application belongs.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configurations of the revision version.
   */
  revisionConfig?: RevisionConfig;
  /**
   * @remarks
   * The Virtual Private Cloud (VPC) ID of the application namespace.
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The scaling configurations of the application.
   */
  webScalingConfig?: WebScalingConfig;
  /**
   * @remarks
   * The traffic configurations of the application.
   */
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

