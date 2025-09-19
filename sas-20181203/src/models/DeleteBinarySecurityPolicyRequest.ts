// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBinarySecurityPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the binary security policy.
   * 
   * @example
   * policy-auto-bfu7pm
   */
  name?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 42.120.XXX.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

