// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * 110109200001214284
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days to automatically archive and save after the storage expires, 0 means no archiving. The range of archiving days is as follows:
   * * V1: 60~365 days.
   * * V2: 60~3650 days (3650 indicates permanent storage).
   * 
   * @example
   * 60
   * 
   * **if can be null:**
   * true
   */
  archiveDuration?: number;
  /**
   * @remarks
   * Password-free read policy (supports IP segments and VpcId).
   * 
   * @example
   * {
   *   "SourceIp": [
   *     "192.168.1.0/24",
   *     "172.168.2.22"
   *   ],
   *   "SourceVpc": [
   *     "vpc-xx1",
   *     "vpc-xx2"
   *   ]
   * }
   */
  authFreeReadPolicy?: string;
  /**
   * @remarks
   * Password-free write policy.
   * 
   * @example
   * {
   *   "SourceIp": [
   *     "192.168.1.0/24",
   *     "172.168.2.22"
   *   ],
   *   "SourceVpc": [
   *     "vpc-xx1",
   *     "vpc-xx2"
   *   ]
   * }
   */
  authFreeWritePolicy?: string;
  /**
   * @remarks
   * Whether to enable password-free read (only supported in V2 version).
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Whether to enable password-free write (only supported in V2 version).
   * 
   * @example
   * true
   */
  enableAuthFreeWrite?: boolean;
  /**
   * @remarks
   * Whether to enable authorization Token (only supported in V1 version).
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * Billing method:
   * * POSTPAY: Postpaid by metric reporting volume.
   * * POSTPAY_GB: Postpaid by metric write volume.
   * Note, if left blank, the user\\"s default billing method configuration will be used. If the user has not configured a default, the system defaults to billing by metric reporting volume.
   * 
   * @example
   * POSTPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * name1
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * Instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Storage duration (days):
   * * By write volume: 90, 180.
   * * By metric reporting volume: 15, 30, 60, 90, 180.
   * 
   * @example
   * 90
   */
  storageDuration?: number;
  /**
   * @remarks
   * Tag values.
   */
  tags?: CreatePrometheusInstanceRequestTags[];
  /**
   * @remarks
   * Belonging workspace, default value: default-cms-{userId}-{regionId}.
   * 
   * @example
   * wokspace1
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      archiveDuration: 'archiveDuration',
      authFreeReadPolicy: 'authFreeReadPolicy',
      authFreeWritePolicy: 'authFreeWritePolicy',
      enableAuthFreeRead: 'enableAuthFreeRead',
      enableAuthFreeWrite: 'enableAuthFreeWrite',
      enableAuthToken: 'enableAuthToken',
      paymentType: 'paymentType',
      prometheusInstanceName: 'prometheusInstanceName',
      status: 'status',
      storageDuration: 'storageDuration',
      tags: 'tags',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDuration: 'number',
      authFreeReadPolicy: 'string',
      authFreeWritePolicy: 'string',
      enableAuthFreeRead: 'boolean',
      enableAuthFreeWrite: 'boolean',
      enableAuthToken: 'boolean',
      paymentType: 'string',
      prometheusInstanceName: 'string',
      status: 'string',
      storageDuration: 'number',
      tags: { 'type': 'array', 'itemType': CreatePrometheusInstanceRequestTags },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

