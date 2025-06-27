// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos } from "./PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos";


export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreview extends $dara.Model {
  /**
   * @remarks
   * The ID of the GTM instance to which the previewed disaster recovery plan belongs.
   * 
   * @example
   * instance-example
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the GTM instance to which the previewed disaster recovery plan belongs.
   * 
   * @example
   * name-example
   */
  name?: string;
  /**
   * @remarks
   * The returned information of the switching policies for address pools.
   */
  switchInfos?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos;
  /**
   * @remarks
   * The user\\"s domain name or domain name list.
   * 
   * @example
   * 30.yyy.com
   */
  userDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      switchInfos: 'SwitchInfos',
      userDomainName: 'UserDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      switchInfos: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos,
      userDomainName: 'string',
    };
  }

  validate() {
    if(this.switchInfos && typeof (this.switchInfos as any).validate === 'function') {
      (this.switchInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

