// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHanaInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-000axjt******c6j8
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the SAP HANA instance.
   * 
   * @example
   * SAP-HANA-DEV
   */
  hanaName?: string;
  /**
   * @remarks
   * The private or internal IP address of the host where the primary node of the SAP HANA instance resides.
   * 
   * @example
   * 47.100.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The instance number of the SAP HANA system.
   * 
   * This parameter is required.
   * 
   * @example
   * 00
   */
  instanceNumber?: number;
  /**
   * @remarks
   * The password that is used to connect with the SAP HANA database.
   * 
   * @example
   * **********
   */
  password?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzvx7d3c4kpny
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to connect with the SAP HANA database over Secure Sockets Layer (SSL). Valid values:
   * 
   * *   true: The SAP HANA database is connected over SSL.
   * *   false: The SAP HANA database is not connected over SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useSsl?: boolean;
  /**
   * @remarks
   * The username of the SYSTEMDB database.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * Specifies whether to verify the SSL certificate of the SAP HANA database. Valid values:
   * 
   * *   true: The SSL certificate of the SAP HANA database is verified.
   * *   false: The SSL certificate of the SAP HANA database is not verified.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  validateCertificate?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0003v4ah******9xp
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clusterId: 'ClusterId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clusterId: 'string',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      password: 'string',
      resourceGroupId: 'string',
      useSsl: 'boolean',
      userName: 'string',
      validateCertificate: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

