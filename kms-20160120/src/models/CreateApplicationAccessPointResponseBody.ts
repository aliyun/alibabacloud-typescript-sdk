// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationAccessPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the AAP.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:applicationaccesspoint/aap_test
   */
  arn?: string;
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * ClientKey
   */
  authenticationMethod?: string;
  /**
   * @remarks
   * The description of the AAP.
   * 
   * @example
   * aap description
   */
  description?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * @example
   * aap_test
   */
  name?: string;
  /**
   * @remarks
   * The permission policy.
   * 
   * @example
   * ["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]
   */
  policies?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * bcfefe15-46f0-44a3-bd96-3d422474b71a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      authenticationMethod: 'AuthenticationMethod',
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      authenticationMethod: 'string',
      description: 'string',
      name: 'string',
      policies: 'string',
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

