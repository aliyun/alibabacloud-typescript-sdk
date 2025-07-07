// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLivyComputeTokenRequestAutoExpireConfiguration } from "./CreateLivyComputeTokenRequestAutoExpireConfiguration";


export class CreateLivyComputeTokenRequest extends $dara.Model {
  autoExpireConfiguration?: CreateLivyComputeTokenRequestAutoExpireConfiguration;
  /**
   * @example
   * mytoken
   */
  name?: string;
  /**
   * @example
   * gs3fy75w4o7hqe5s
   */
  token?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoExpireConfiguration: 'autoExpireConfiguration',
      name: 'name',
      token: 'token',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoExpireConfiguration: CreateLivyComputeTokenRequestAutoExpireConfiguration,
      name: 'string',
      token: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.autoExpireConfiguration && typeof (this.autoExpireConfiguration as any).validate === 'function') {
      (this.autoExpireConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

