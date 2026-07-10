// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAntAndCloudAuthUserStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether financial-grade ID Verification is activated. Valid values:
   * - **true**: Activated.
   * - **false**: Not activated.
   * 
   * @example
   * true
   */
  antcloudauthEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether ID Verification is activated. Valid values:
   * - **true**: Activated.
   * - **false**: Not activated.
   * 
   * @example
   * false
   */
  cloudauthEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether enhanced ID Verification is activated. Valid values:
   * - **true**: Activated.
   * - **false**: Not activated.
   * 
   * @example
   * true
   */
  cloudauthstEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether information verification is activated. Valid values:
   * - **true**: Activated.
   * - **false**: Not activated.
   * 
   * @example
   * false
   */
  inforverifyEnabled?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3FE07CCE-DF47-51C2-9D32-CD70ED62C91B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      antcloudauthEnabled: 'AntcloudauthEnabled',
      cloudauthEnabled: 'CloudauthEnabled',
      cloudauthstEnabled: 'CloudauthstEnabled',
      inforverifyEnabled: 'InforverifyEnabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antcloudauthEnabled: 'boolean',
      cloudauthEnabled: 'boolean',
      cloudauthstEnabled: 'boolean',
      inforverifyEnabled: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

