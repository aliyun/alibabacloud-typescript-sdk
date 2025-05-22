// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTemplateByScratchResponseBodyResourcesToImport extends $dara.Model {
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * @example
   * ECSVPC_001
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The key-value mapping between strings. The value is a JSON string that identifies the resource that you want to import into a stack.\\
   * A key is an identifier for a resource, and a value is an assignment of data to the key. For example, VpcId is a key that indicates the ID of a virtual private cloud (VPC), and `vpc-bp1m6fww66xbntjyc****"` is a value that is assigned to VpcId.
   * 
   * @example
   * {"VpcId": "vpc-bp1m6fww66xbntjyc****" }
   */
  resourceIdentifier?: { [key: string]: any };
  /**
   * @remarks
   * The type of the resource.
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
      resourceIdentifier: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
    };
  }

  validate() {
    if(this.resourceIdentifier) {
      $dara.Model.validateMap(this.resourceIdentifier);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

