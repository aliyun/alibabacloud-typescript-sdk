// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesRequest extends $dara.Model {
  /**
   * @example
   * api-cq7l5s5lhtgi6qasrdc0
   */
  attachResourceId?: string;
  /**
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @example
   * gw-cq2fm65lhtgm9nrrl7ag
   */
  gatewayId?: string;
  /**
   * @example
   * false
   */
  withAttachments?: boolean;
  withSystemPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      withAttachments: 'withAttachments',
      withSystemPolicy: 'withSystemPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      withAttachments: 'boolean',
      withSystemPolicy: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

