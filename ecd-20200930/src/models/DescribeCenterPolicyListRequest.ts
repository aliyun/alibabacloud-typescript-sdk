// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenterPolicyListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the academic proxy feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
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
  /**
   * @remarks
   * Specifies whether to enable the model library feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  modelLibrary?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. This parameter implements paging.    
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of rows per page in a paged query. This parameter implements paging.
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
  /**
   * @remarks
   * Specifies whether to enable the port proxy feature. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
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
   * The effective scope of the Cloud Desktop policy.
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

