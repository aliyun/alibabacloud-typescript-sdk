// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupReferencesResponseBodySecurityGroupReferences } from "./DescribeSecurityGroupReferencesResponseBodySecurityGroupReferences";


export class DescribeSecurityGroupReferencesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the references to the specified security groups.
   */
  securityGroupReferences?: DescribeSecurityGroupReferencesResponseBodySecurityGroupReferences;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupReferences: 'SecurityGroupReferences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupReferences: DescribeSecurityGroupReferencesResponseBodySecurityGroupReferences,
    };
  }

  validate() {
    if(this.securityGroupReferences && typeof (this.securityGroupReferences as any).validate === 'function') {
      (this.securityGroupReferences as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

