// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceLastAccessedDetailsResponseBodyJobError extends $dara.Model {
  /**
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @example
   * InternalError
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLastAccessedDetailsResponseBodyServicesLastAccessedGrantPolicies extends $dara.Model {
  /**
   * @example
   * acs:ram::123459***:role/TestRole
   */
  attachedEntity?: string;
  /**
   * @example
   * 123459***
   */
  attachedScope?: string;
  /**
   * @example
   * AdministratorAccess
   */
  policyName?: string;
  /**
   * @example
   * System
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachedEntity: 'AttachedEntity',
      attachedScope: 'AttachedScope',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedEntity: 'string',
      attachedScope: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLastAccessedDetailsResponseBodyServicesLastAccessedTrackedActionsLastAccessed extends $dara.Model {
  /**
   * @example
   * ram:CreateAccessKey
   */
  actionName?: string;
  /**
   * @example
   * acs:ram::123459***:role/TestRole
   */
  lastAccessedEntity?: string;
  /**
   * @example
   * 2024-01-29T07:48:35Z
   */
  lastAccessedTime?: string;
  serviceCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      lastAccessedEntity: 'LastAccessedEntity',
      lastAccessedTime: 'LastAccessedTime',
      serviceCodes: 'ServiceCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      lastAccessedEntity: 'string',
      lastAccessedTime: 'string',
      serviceCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceCodes)) {
      $dara.Model.validateArray(this.serviceCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLastAccessedDetailsResponseBodyServicesLastAccessed extends $dara.Model {
  grantPolicies?: GetServiceLastAccessedDetailsResponseBodyServicesLastAccessedGrantPolicies[];
  /**
   * @example
   * 2024-01-29T07:48:35Z
   */
  lastAuthenticated?: string;
  /**
   * @example
   * acs:ram::123459***:role/TestRole
   */
  lastAuthenticatedEntity?: string;
  /**
   * @example
   * ecs
   */
  RAMCode?: string;
  serviceCodes?: string[];
  /**
   * @example
   * 1
   */
  totalAuthenticatedEntities?: number;
  trackedActionsLastAccessed?: GetServiceLastAccessedDetailsResponseBodyServicesLastAccessedTrackedActionsLastAccessed[];
  static names(): { [key: string]: string } {
    return {
      grantPolicies: 'GrantPolicies',
      lastAuthenticated: 'LastAuthenticated',
      lastAuthenticatedEntity: 'LastAuthenticatedEntity',
      RAMCode: 'RAMCode',
      serviceCodes: 'ServiceCodes',
      totalAuthenticatedEntities: 'TotalAuthenticatedEntities',
      trackedActionsLastAccessed: 'TrackedActionsLastAccessed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantPolicies: { 'type': 'array', 'itemType': GetServiceLastAccessedDetailsResponseBodyServicesLastAccessedGrantPolicies },
      lastAuthenticated: 'string',
      lastAuthenticatedEntity: 'string',
      RAMCode: 'string',
      serviceCodes: { 'type': 'array', 'itemType': 'string' },
      totalAuthenticatedEntities: 'number',
      trackedActionsLastAccessed: { 'type': 'array', 'itemType': GetServiceLastAccessedDetailsResponseBodyServicesLastAccessedTrackedActionsLastAccessed },
    };
  }

  validate() {
    if(Array.isArray(this.grantPolicies)) {
      $dara.Model.validateArray(this.grantPolicies);
    }
    if(Array.isArray(this.serviceCodes)) {
      $dara.Model.validateArray(this.serviceCodes);
    }
    if(Array.isArray(this.trackedActionsLastAccessed)) {
      $dara.Model.validateArray(this.trackedActionsLastAccessed);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLastAccessedDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @example
   * 2024-06-08T02:24:48Z
   */
  jobCompletionTime?: string;
  /**
   * @example
   * 2024-06-08T02:20:47Z
   */
  jobCreationTime?: string;
  jobError?: GetServiceLastAccessedDetailsResponseBodyJobError;
  /**
   * @example
   * COMPLETED
   */
  jobStatus?: string;
  /**
   * @example
   * SERVICE_LEVEL
   */
  jobType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CgxMaXN0UmFtVXNlcnMSEDE5OTQ5NTMxMDYwOTAzNzkaAjQ0IGQ=
   */
  marker?: string;
  /**
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
   */
  requestId?: string;
  servicesLastAccessed?: GetServiceLastAccessedDetailsResponseBodyServicesLastAccessed[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      jobCompletionTime: 'JobCompletionTime',
      jobCreationTime: 'JobCreationTime',
      jobError: 'JobError',
      jobStatus: 'JobStatus',
      jobType: 'JobType',
      marker: 'Marker',
      requestId: 'RequestId',
      servicesLastAccessed: 'ServicesLastAccessed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      jobCompletionTime: 'string',
      jobCreationTime: 'string',
      jobError: GetServiceLastAccessedDetailsResponseBodyJobError,
      jobStatus: 'string',
      jobType: 'string',
      marker: 'string',
      requestId: 'string',
      servicesLastAccessed: { 'type': 'array', 'itemType': GetServiceLastAccessedDetailsResponseBodyServicesLastAccessed },
    };
  }

  validate() {
    if(this.jobError && typeof (this.jobError as any).validate === 'function') {
      (this.jobError as any).validate();
    }
    if(Array.isArray(this.servicesLastAccessed)) {
      $dara.Model.validateArray(this.servicesLastAccessed);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

