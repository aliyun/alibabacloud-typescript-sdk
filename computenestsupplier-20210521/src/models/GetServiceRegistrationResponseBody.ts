// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRegistrationResponseBodyDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service has risks.
   * 
   * @example
   * true
   */
  atRisk?: boolean;
  /**
   * @remarks
   * Indicates whether the service is associated with an artifact.
   * 
   * @example
   * true
   */
  hasRelatedArtifact?: boolean;
  /**
   * @remarks
   * The review reports.
   * 
   * @example
   * { "template":"https://compute-nest-security-audit-bucket.oss-cn-hangzhou.aliyuncs.com/report" }
   */
  reports?: string;
  /**
   * @remarks
   * The URL to view the differences in the template.
   * 
   * @example
   * https://compute-nest-template-diff-bucket.oss-cn-hangzhou.aliyuncs.com/service-abc/diff
   */
  templateDiffUrl?: string;
  static names(): { [key: string]: string } {
    return {
      atRisk: 'AtRisk',
      hasRelatedArtifact: 'HasRelatedArtifact',
      reports: 'Reports',
      templateDiffUrl: 'TemplateDiffUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atRisk: 'boolean',
      hasRelatedArtifact: 'boolean',
      reports: 'string',
      templateDiffUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRegistrationResponseBodyServiceInfo extends $dara.Model {
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The trial type.
   * 
   * Valid values:
   * 
   * - Trial: The service supports trial.
   * 
   * - NotTrial: The service does not support trial.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceType: 'ServiceType',
      trialType: 'TrialType',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceType: 'string',
      trialType: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRegistrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The review comments.
   * 
   * @example
   * comment message
   */
  comment?: string;
  /**
   * @remarks
   * The review details.
   */
  detail?: GetServiceRegistrationResponseBodyDetail;
  /**
   * @remarks
   * The time when the review was completed.
   * 
   * @example
   * 2024-12-07T11:05:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the review request.
   * 
   * @example
   * sr-1b4aabc1c9eb4109****
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c2d118c9193e49xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service details.
   */
  serviceInfo?: GetServiceRegistrationResponseBodyServiceInfo;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * beta
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The status of the review request. Valid values:
   * 
   * - Submitted
   * 
   * - Approved
   * 
   * - Rejected
   * 
   * - Canceled
   * 
   * - Executed: The service version is published.
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * The time when the request was submitted.
   * 
   * @example
   * 2024-12-07T11:05:50Z
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      detail: 'Detail',
      finishTime: 'FinishTime',
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceVersion: 'ServiceVersion',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      detail: GetServiceRegistrationResponseBodyDetail,
      finishTime: 'string',
      registrationId: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceInfo: GetServiceRegistrationResponseBodyServiceInfo,
      serviceVersion: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    if(this.serviceInfo && typeof (this.serviceInfo as any).validate === 'function') {
      (this.serviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

