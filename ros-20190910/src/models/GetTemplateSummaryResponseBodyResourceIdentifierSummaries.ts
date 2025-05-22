// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateSummaryResponseBodyResourceIdentifierSummaries extends $dara.Model {
  /**
   * @remarks
   * The logical IDs of all resources of the type that is specified by ResouceType in the template.
   */
  logicalResourceIds?: string[];
  /**
   * @remarks
   * The resource properties. You can use a resource property to identify the resource that you want to manage. For example, VpcId is an identifier property of ALIYUN::ECS::VPC.
   */
  resourceIdentifiers?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * > The resource import feature is supported for the resource type.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceIds: 'LogicalResourceIds',
      resourceIdentifiers: 'ResourceIdentifiers',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceIdentifiers: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logicalResourceIds)) {
      $dara.Model.validateArray(this.logicalResourceIds);
    }
    if(Array.isArray(this.resourceIdentifiers)) {
      $dara.Model.validateArray(this.resourceIdentifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

