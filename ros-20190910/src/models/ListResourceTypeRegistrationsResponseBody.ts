// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypeRegistrationsResponseBodyRegistrations extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2023-03-02T07:28:35
   */
  createTime?: string;
  /**
   * @remarks
   * The entity type. Only Module may be returned.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the registration record.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  registrationId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The registration state. Valid values:
   * 
   * *   IN_PROGRESS: The registration is in progress.
   * *   COMPLETE: The registration is successful.
   * *   FAILED: The registration failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason for the state.
   * 
   * @example
   * Module is created successfully
   */
  statusReason?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      entityType: 'EntityType',
      registrationId: 'RegistrationId',
      resourceType: 'ResourceType',
      status: 'Status',
      statusReason: 'StatusReason',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      entityType: 'string',
      registrationId: 'string',
      resourceType: 'string',
      status: 'string',
      statusReason: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypeRegistrationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The registration records of the resource.
   */
  registrations?: ListResourceTypeRegistrationsResponseBodyRegistrations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of registration records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      registrations: 'Registrations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      registrations: { 'type': 'array', 'itemType': ListResourceTypeRegistrationsResponseBodyRegistrations },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.registrations)) {
      $dara.Model.validateArray(this.registrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

