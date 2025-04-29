// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceMetadataOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the access channel is enabled for instance metadata. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Indicates whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
   * 
   * *   optional: The security hardening mode (IMDSv2) is not forcefully used.
   * *   required: The security hardening mode (IMDSv2) is forcefully used.
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  static names(): { [key: string]: string } {
    return {
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

