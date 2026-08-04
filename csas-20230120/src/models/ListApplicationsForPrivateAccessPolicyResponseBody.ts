// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * The end port.
   * 
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications extends $dara.Model {
  /**
   * @remarks
   * A collection of private access application addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The ID of the private access application.
   * 
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the private access application was created.
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the private access application.
   * 
   * @example
   * 这是一条被内网访问策略引用的内网访问应用
   */
  description?: string;
  /**
   * @remarks
   * The name of the private access application.
   * 
   * @example
   * application_name
   */
  name?: string;
  /**
   * @remarks
   * A collection of port ranges for the private access application.
   */
  portRanges?: ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges[];
  /**
   * @remarks
   * The protocol of the private access application. Valid values:
   * 
   * - **All**: All protocols.
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The status of the private access application. Valid values:
   * 
   * - **Enabled**: The application is enabled.
   * 
   * - **Disabled**: The application is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolices extends $dara.Model {
  /**
   * @remarks
   * A collection of private access applications.
   */
  applications?: ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications[];
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications },
      policyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of private access policies.
   */
  polices?: ListApplicationsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

