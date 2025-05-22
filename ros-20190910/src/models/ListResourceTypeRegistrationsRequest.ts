// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypeRegistrationsRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type. Set the value to Module.
   * 
   * @example
   * Module
   */
  entityType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The resource type. The resource type can contain letters, digits, colons (:), and asterisks (\\*). You can use an asterisk (\\*) to perform a fuzzy match.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  /**
   * @remarks
   * The registration state. Valid values:
   * 
   * *   IN_PROGRESS
   * *   COMPLETE
   * *   FAILED
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      registrationId: 'RegistrationId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      registrationId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

