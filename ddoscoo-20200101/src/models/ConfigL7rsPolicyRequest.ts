// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigL7RsPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  policy?: string;
  resourceGroupId?: string;
  upstreamRetry?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
      resourceGroupId: 'ResourceGroupId',
      upstreamRetry: 'UpstreamRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
      resourceGroupId: 'string',
      upstreamRetry: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

