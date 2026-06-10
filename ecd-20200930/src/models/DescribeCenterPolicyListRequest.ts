// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenterPolicyListRequest extends $dara.Model {
  academicProxy?: string;
  /**
   * @remarks
   * The business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  businessType?: number;
  modelLibrary?: string;
  /**
   * @remarks
   * The page number to return in a paged query.<br>Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of Cloud Desktop policy IDs.
   */
  policyGroupId?: string[];
  portProxy?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The scope where the Cloud Desktop policy takes effect.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      academicProxy: 'AcademicProxy',
      businessType: 'BusinessType',
      modelLibrary: 'ModelLibrary',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyGroupId: 'PolicyGroupId',
      portProxy: 'PortProxy',
      resourceType: 'ResourceType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      academicProxy: 'string',
      businessType: 'number',
      modelLibrary: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
      portProxy: 'string',
      resourceType: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupId)) {
      $dara.Model.validateArray(this.policyGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

