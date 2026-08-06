// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogKmsGrantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role used by DLF to access catalog data. When configuring the KMS key policy, you must grant this role permissions to use the customer master key.
   * 
   * @example
   * acs:ram::123456789012****:role/AliyunDlfNextDataAccessRole
   */
  dataAccessRoleArn?: string;
  /**
   * @remarks
   * The authorization statement that must be added to the customer master key policy. This statement grants the DLF data access role corresponding to dataAccessRoleArn the KMS permissions required for data encryption and decryption.
   * 
   * @example
   * {"Sid":"AllowDLFDataAccess","Effect":"Allow","Principal":{"RAM":["acs:ram::123456789012****:role/
   *   AliyunDlfNextDataAccessRole"]},"Action":["kms:Decrypt","kms:GenerateDataKey"],"Resource":["*"]}
   */
  keyPolicyStatement?: string;
  /**
   * @remarks
   * The region ID to which the catalog belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The DLF workflow role ARN. In the current version, the workflow role is not granted customer master key access permissions based on the least privilege principle. Therefore, this field returns an empty value.
   * 
   * @example
   * null
   */
  workflowRoleArn?: string;
  static names(): { [key: string]: string } {
    return {
      dataAccessRoleArn: 'dataAccessRoleArn',
      keyPolicyStatement: 'keyPolicyStatement',
      region: 'region',
      workflowRoleArn: 'workflowRoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAccessRoleArn: 'string',
      keyPolicyStatement: 'string',
      region: 'string',
      workflowRoleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

