// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAttestorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * @example
   * 2e81355b-f8e7-4090-8082-a8f8124a****
   */
  keyId?: string;
  /**
   * @remarks
   * The region ID of the Key Management Service (KMS) key.
   * 
   * @example
   * cn-hangzhou
   */
  keyRegionId?: string;
  /**
   * @remarks
   * The version ID of the KMS key.
   * 
   * @example
   * 8d7c9c91-57ce-4cf4-a959-1e700e13****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The name of the witness.
   * 
   * @example
   * attestor-auto-ad5316
   */
  name?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * attestor
   */
  remark?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyRegionId: 'KeyRegionId',
      keyVersionId: 'KeyVersionId',
      name: 'Name',
      remark: 'Remark',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyRegionId: 'string',
      keyVersionId: 'string',
      name: 'string',
      remark: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

