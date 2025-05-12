// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateErAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically receive all routes from all instances under the Lingjun HUB. Valid values:
   * 
   * *   **true**: received automatically.
   * *   **false**: Not received.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * This parameter is required.
   * 
   * @example
   * er-attachemnt-vpd-xksd2obl
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * Lingjun HUB ID.
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the network instance. Valid values: **VPD** and **VCC**.
   * 
   * For more information, see [What is Lingjun?](https://help.aliyun.com/document_detail/444430.html)
   * 
   * You can query **Lingjun CIDR Block** and **Lingjun Connection** by [ListVpds](https://help.aliyun.com/document_detail/2331077.html) and [ListVccs](https://help.aliyun.com/document_detail/2399526.html?) respectively.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xksd2obl
   */
  instanceId?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * *   **VPD**: indicates the Lingjun CIDR block.
   * *   **VCC**: indicates a Lingjun connection.
   * 
   * This parameter is required.
   * 
   * @example
   * VPD
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs. This parameter is required for cross-account resources.
   * 
   * @example
   * 1620939556166277
   */
  resourceTenantId?: string;
  static names(): { [key: string]: string } {
    return {
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      resourceTenantId: 'ResourceTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReceiveAllRoute: 'boolean',
      erAttachmentName: 'string',
      erId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      resourceTenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

