// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHanaInstanceRequest extends $dara.Model {
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
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **SELF_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
   * - **CROSS_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The IDs of the ECS instances that host the SAP HANA instance to be registered. Cloud Backup installs backup clients on the specified ECS instances.
   * 
   * @example
   * [\\"i-uf6ir9y******hvisj\\"]
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the SAP HANA instance.
   * 
   * @example
   * HANA-DEV
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
   * @example
   * 00
   */
  instanceNumber?: number;
  /**
   * @remarks
   * The password that is used to connect with the SAP HANA database.
   * 
   * @example
   * ************
   */
  password?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4ebtpkzx7zy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security identifier (SID) of the SAP HANA database. For more information, see [How to find sid user and instance number of HANA db?](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?spm=a2c4g.11186623.0.0.55c34b4ftZeXNK).
   * 
   * @example
   * HXE
   */
  sid?: string;
  /**
   * @remarks
   * Specifies whether to connect with the SAP HANA database over Secure Sockets Layer (SSL).
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
   * Specifies whether to verify the SSL certificate of the SAP HANA database.
   * 
   * @example
   * false
   */
  validateCertificate?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0003v4a******gfv2
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      ecsInstanceId: 'EcsInstanceId',
      hanaName: 'HanaName',
      host: 'Host',
      instanceNumber: 'InstanceNumber',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      useSsl: 'UseSsl',
      userName: 'UserName',
      validateCertificate: 'ValidateCertificate',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      ecsInstanceId: 'string',
      hanaName: 'string',
      host: 'string',
      instanceNumber: 'number',
      password: 'string',
      resourceGroupId: 'string',
      sid: 'string',
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

