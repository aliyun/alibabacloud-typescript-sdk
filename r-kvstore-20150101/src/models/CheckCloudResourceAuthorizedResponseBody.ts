// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCloudResourceAuthorizedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization status. Valid values:
   * * **0**: Not authorized.
   * * **1**: Authorized.
   * * **2**: KMS is not activated. For more information, see [Activate KMS](https://help.aliyun.com/document_detail/153781.html).
   * 
   * @example
   * 1
   */
  authorizationState?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
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

