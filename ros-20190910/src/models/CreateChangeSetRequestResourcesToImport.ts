// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChangeSetRequestResourcesToImport extends $dara.Model {
  /**
   * @remarks
   * The logical ID of resource N. The logical ID is the name of the resource defined in the template.
   * 
   * >  This parameter takes effect only when ChangeSetType is set to IMPORT. ResourcesToImport is optional. If you specify ResourcesToImport, you must specify ResourcesToImport.N.LogicalResourceId.
   * 
   * @example
   * Vpc
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The key-value mapping between strings. The key-value mapping is used to identify resource N that you want to import. The key-value mapping must be a JSON string.\\
   * A key is an identifier property of a resource and a value is the property value. For example, the key of the ALIYUN::ECS::VPC resource is VpcId and the value is `vpc-2zevx9ios****`.
   * 
   * You can call the [GetTemplateSummary](https://help.aliyun.com/document_detail/172485.html) operation to query the identifier property of the resource.
   * 
   * >  This parameter takes effect only when ChangeSetType is set to IMPORT. ResourcesToImport is optional. If you specify ResourcesToImport, you must specify ResourcesToImport.N.ResourceIdentifier.
   * 
   * @example
   * {"VpcId": "vpc-2zevx9ios******"}
   */
  resourceIdentifier?: string;
  /**
   * @remarks
   * The type of resource N. The resource type must be the same as the resource type that is defined in the template.
   * 
   * >  This parameter takes effect only when ChangeSetType is set to IMPORT. ResourcesToImport is optional. If you specify ResourcesToImport, you must specify ResourcesToImport.N.ResourceType.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      resourceIdentifier: 'ResourceIdentifier',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      resourceIdentifier: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

