// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEgressProxyIpPoolAttributeRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @example
   * True
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eppool-gw80606a59ecc101****
   */
  egressProxyIpPoolId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyIpPoolName?: string;
  /**
   * @example
   * SourceIP
   */
  hashFactor?: string;
  /**
   * @example
   * X-Forwarded-For
   */
  hashHeaderName?: string;
  /**
   * @example
   * Random
   */
  scheduler?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
      egressProxyIpPoolName: 'EgressProxyIpPoolName',
      hashFactor: 'HashFactor',
      hashHeaderName: 'HashHeaderName',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      egressProxyIpPoolId: 'string',
      egressProxyIpPoolName: 'string',
      hashFactor: 'string',
      hashHeaderName: 'string',
      scheduler: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

