// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenterPolicyListRequest extends $dara.Model {
  academicProxy?: string;
  /**
   * @remarks
   * The business type.
   * 
   * Valid values:
   * 
   * *   1: public cloud
   * *   8: commercial edition.
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
   * The page number.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the cloud computer policies.
   */
  policyGroupId?: string[];
  portProxy?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   app: cloud applications.
   * *   desktop: cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The effective scope of the cloud computer policy.
   * 
   * Valid values:
   * 
   * *   IP: The policy applies to specific IP addresses.
   * *   GLOBAL: The policy applies globally.
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

