// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMeshEditionPartiallyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to upgrade the ASM gateways for the ASM instance. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  ASMGatewayContinue?: boolean;
  /**
   * @remarks
   * The expected version that desired to be upgraded to.
   * 
   * @example
   * v1.15.3.118-g4712daf0-aliyun
   */
  expectedVersion?: string;
  /**
   * @remarks
   * Specifies whether to perform an upgrade check. If the value of this parameter is set to true, only the upgrade check is performed and the ASM instance is not upgraded.
   * 
   * @example
   * true
   */
  preCheck?: boolean;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ca04bc38979214bf2882be79d39b4****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * Specifies whether to upgrade the ASM instance to Professional Edition. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  switchToPro?: boolean;
  /**
   * @remarks
   * Specifies the ASM gateways to be upgraded. Separate multiple ASM gateways with commas (,).
   * 
   * @example
   * ingressgateway1,ingressgateway2
   */
  upgradeGatewayRecords?: string;
  static names(): { [key: string]: string } {
    return {
      ASMGatewayContinue: 'ASMGatewayContinue',
      expectedVersion: 'ExpectedVersion',
      preCheck: 'PreCheck',
      serviceMeshId: 'ServiceMeshId',
      switchToPro: 'SwitchToPro',
      upgradeGatewayRecords: 'UpgradeGatewayRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayContinue: 'boolean',
      expectedVersion: 'string',
      preCheck: 'boolean',
      serviceMeshId: 'string',
      switchToPro: 'boolean',
      upgradeGatewayRecords: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

