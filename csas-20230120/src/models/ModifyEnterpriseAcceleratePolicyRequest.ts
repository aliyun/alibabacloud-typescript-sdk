// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEnterpriseAcceleratePolicyRequest extends $dara.Model {
  /**
   * @example
   * whiltelist
   */
  accelerationType?: string;
  description?: string;
  /**
   * @example
   * eap-ce153a7165c8feea
   */
  eapId?: string;
  name?: string;
  /**
   * @example
   * 0
   */
  onTls?: number;
  /**
   * @example
   * 999
   */
  priority?: number;
  /**
   * @example
   * 0
   */
  showInClient?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12.34.56.XX
   */
  upstreamHost?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  upstreamPort?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ga
   */
  upstreamType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userAttributeGroup?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationType: 'AccelerationType',
      description: 'Description',
      eapId: 'EapId',
      name: 'Name',
      onTls: 'OnTls',
      priority: 'Priority',
      showInClient: 'ShowInClient',
      upstreamHost: 'UpstreamHost',
      upstreamPort: 'UpstreamPort',
      upstreamType: 'UpstreamType',
      userAttributeGroup: 'UserAttributeGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationType: 'string',
      description: 'string',
      eapId: 'string',
      name: 'string',
      onTls: 'number',
      priority: 'number',
      showInClient: 'number',
      upstreamHost: 'string',
      upstreamPort: 'number',
      upstreamType: 'string',
      userAttributeGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

