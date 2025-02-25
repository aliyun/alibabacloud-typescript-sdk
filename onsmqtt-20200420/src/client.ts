// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class BatchQuerySessionByClientIdsResponseBodyOnlineStatusList extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT client. For more information about client IDs, see [Terms](https://help.aliyun.com/document_detail/42420.html).
   * 
   * @example
   * GID_test@0001
   */
  clientId?: string;
  /**
   * @remarks
   * Indicates whether the ApsaraMQ for MQTT client is online. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  onlineStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      onlineStatus: 'OnlineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      onlineStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertificateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Content of the CA certificate.
   * > \\n represents a new line.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END CERTIFICATE-----
   */
  caContent?: string;
  /**
   * @remarks
   * Name of the CA certificate
   * 
   * @example
   * mqtt_ca
   */
  caName?: string;
  /**
   * @remarks
   * Registration code of the CA certificate
   * 
   * @example
   * 13274673-8f90-4630-bea1-9cccb25756ad2089******
   */
  registrationCode?: string;
  /**
   * @remarks
   * The SN serial number of the CA certificate, used to uniquely identify a CA certificate. Value range: no more than 128 bytes.
   * 
   * @example
   * 00f26900ba87******
   */
  sn?: string;
  /**
   * @remarks
   * The status of the CA certificate. The values are as follows:
   * - **0**: Indicates that the certificate is in an inactive state. - **1**: Indicates that the certificate is in an active state.
   * > After the CA certificate is registered, it is in an active state by default.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The start time when the CA certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @remarks
   * The end time when the CA certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1969497303000
   */
  validEnd?: string;
  /**
   * @remarks
   * Content of the Verification certificate.
   * > \\n represents a new line.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIID/DCCAu+Y5sRMpp9tnd+4s******\\n-----END CERTIFICATE-----
   */
  verificationContent?: string;
  static names(): { [key: string]: string } {
    return {
      caContent: 'CaContent',
      caName: 'CaName',
      registrationCode: 'RegistrationCode',
      sn: 'Sn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
      verificationContent: 'VerificationContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caContent: 'string',
      caName: 'string',
      registrationCode: 'string',
      sn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
      verificationContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The SN serial number of the CA certificate to which the device certificate belongs, used to uniquely identify a CA certificate.
   * 
   * @example
   * 00f26900ba87******
   */
  caSn?: string;
  /**
   * @remarks
   * Content of the device certificate.
   * 
   *  represents a new line.
   * 
   * @example
   * -----BEGIN DEVICECERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END DEVICECERTIFICATE-----
   */
  deviceContent?: string;
  /**
   * @remarks
   * Name of the device certificate.
   * 
   * @example
   * mqtt_device
   */
  deviceName?: string;
  /**
   * @remarks
   * The SN serial number of the device certificate, used to uniquely identify a device certificate.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The status of the device certificate. The values are as follows:
   * - **0**: Indicates that the certificate is in an inactive state. - **1**: Indicates that the certificate is in an active state.
   * > After the device certificate is registered, it is in an active state by default.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The start time when the device certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @remarks
   * The end time when the device certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1969497303000
   */
  validEnd?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceContent: 'DeviceContent',
      deviceName: 'DeviceName',
      deviceSn: 'DeviceSn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceContent: 'string',
      deviceName: 'string',
      deviceSn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponseBodyDeviceCredential extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was created. Unit: milliseconds.
   * 
   * @example
   * 1605541382000
   */
  createTime?: number;
  /**
   * @remarks
   * The AccessKey ID of the device.
   * 
   * @example
   * DC.Z5fXh9sRRVufyLi6wo****
   */
  deviceAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of the device.
   * 
   * @example
   * DC.BJMkn4eMQJK2vaApTS****
   */
  deviceAccessKeySecret?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was last updated. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1605541382000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      createTime: 'CreateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      createTime: 'number',
      deviceAccessKeyId: 'string',
      deviceAccessKeySecret: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponseBodyDataCaCertificateVOS extends $dara.Model {
  /**
   * @remarks
   * Content of the CA certificate. 
   * > \\n represents a new line.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END CERTIFICATE-----
   */
  caContent?: string;
  /**
   * @remarks
   * Name of the CA certificate
   * 
   * @example
   * mqtt_ca
   */
  caName?: string;
  /**
   * @remarks
   * Registration code of the CA certificate
   * 
   * @example
   * 13274673-8f90-4630-bea1-9cccb25756ad2089******
   */
  registrationCode?: string;
  /**
   * @remarks
   * SN serial number of the CA certificate
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  /**
   * @remarks
   * The status of the CA certificate. The values are as follows:
   * - **0**: Indicates that the certificate is in an inactive state. - **1**: Indicates that the certificate is in an active state.
   * > After the CA certificate is registered, it is in an active state by default.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The start time when the CA certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @remarks
   * The end time when the CA certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1969497303000
   */
  validEnd?: string;
  /**
   * @remarks
   * Verify the content of the certificate. 
   * > \\n represents a new line.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIID/DCCAu+Y5sRMpp9tnd+4s******\\n-----END CERTIFICATE-----
   */
  verificationContent?: string;
  static names(): { [key: string]: string } {
    return {
      caContent: 'CaContent',
      caName: 'CaName',
      registrationCode: 'RegistrationCode',
      sn: 'Sn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
      verificationContent: 'VerificationContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caContent: 'string',
      caName: 'string',
      registrationCode: 'string',
      sn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
      verificationContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details of the CA certificate
   */
  caCertificateVOS?: ListCaCertificateResponseBodyDataCaCertificateVOS[];
  /**
   * @remarks
   * The current page number of the returned query records.
   * 
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @remarks
   * The maximum number of results to display per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Maximum number of pages in the query result.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      caCertificateVOS: 'CaCertificateVOS',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificateVOS: { 'type': 'array', 'itemType': ListCaCertificateResponseBodyDataCaCertificateVOS },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.caCertificateVOS)) {
      $dara.Model.validateArray(this.caCertificateVOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateResponseBodyDataDeviceCertificateVOS extends $dara.Model {
  /**
   * @remarks
   * The SN serial number of the CA certificate to which the device certificate belongs, used to uniquely identify a CA certificate.
   * 
   * @example
   * 00f26900ba87******
   */
  caSn?: string;
  /**
   * @remarks
   * Content of the device certificate.
   * 
   *  represents a new line.
   * 
   * @example
   * -----BEGIN DEVICECERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END DEVICECERTIFICATE-----
   */
  deviceContent?: string;
  /**
   * @remarks
   * Name of the device certificate.
   * 
   * @example
   * mqtt_device
   */
  deviceName?: string;
  /**
   * @remarks
   * The SN serial number of the device certificate, used to uniquely identify a device certificate.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The status of the device certificate. The values are as follows:
   * - 0: indicates that the certificate is in an inactive state. - 1: indicates that the certificate is in an active state.
   * After the device certificate is registered, it defaults to the active state.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The start time when the device certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @remarks
   * The end time when the device certificate becomes effective. Formatted as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1969497303000
   */
  validEnd?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceContent: 'DeviceContent',
      deviceName: 'DeviceName',
      deviceSn: 'DeviceSn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceContent: 'string',
      deviceName: 'string',
      deviceSn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details of the device certificate.
   */
  deviceCertificateVOS?: ListDeviceCertificateResponseBodyDataDeviceCertificateVOS[];
  /**
   * @remarks
   * The current page number of the returned query records.
   * 
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @remarks
   * The maximum number of results to display per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Maximum number of pages in the query result.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      deviceCertificateVOS: 'DeviceCertificateVOS',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCertificateVOS: { 'type': 'array', 'itemType': ListDeviceCertificateResponseBodyDataDeviceCertificateVOS },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceCertificateVOS)) {
      $dara.Model.validateArray(this.deviceCertificateVOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnResponseBodyDataDeviceCertificateVOS extends $dara.Model {
  /**
   * @remarks
   * The SN serial number of the CA certificate to which the device certificate belongs, used to uniquely identify a CA certificate.
   * 
   * @example
   * 00f26900ba87******
   */
  caSn?: string;
  /**
   * @remarks
   * Content of the device certificate.
   * 
   *  represents a new line.
   * 
   * @example
   * -----BEGIN DEVICECERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END DEVICECERTIFICATE-----
   */
  deviceContent?: string;
  /**
   * @remarks
   * Name of the device certificate.
   * 
   * @example
   * mqtt_device
   */
  deviceName?: string;
  /**
   * @remarks
   * The SN serial number of the device certificate, used to uniquely identify a device certificate.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The status of the device certificate. The values are as follows:
   * - 0: indicates that the certificate is in an inactive state. 
   * - 1: indicates that the certificate is in an active state.
   * 
   * After the device certificate is registered, it is in an active state by default.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The start time when the device certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @remarks
   * The end time when the device certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1969497303000
   */
  validEnd?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceContent: 'DeviceContent',
      deviceName: 'DeviceName',
      deviceSn: 'DeviceSn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceContent: 'string',
      deviceName: 'string',
      deviceSn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details of the device certificate.
   */
  deviceCertificateVOS?: ListDeviceCertificateByCaSnResponseBodyDataDeviceCertificateVOS[];
  /**
   * @remarks
   * The current page number of the returned query records.
   * 
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @remarks
   * The maximum number of results to display per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      deviceCertificateVOS: 'DeviceCertificateVOS',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCertificateVOS: { 'type': 'array', 'itemType': ListDeviceCertificateByCaSnResponseBodyDataDeviceCertificateVOS },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceCertificateVOS)) {
      $dara.Model.validateArray(this.deviceCertificateVOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList extends $dara.Model {
  /**
   * @remarks
   * Client list.
   */
  clientIdList?: string[];
  /**
   * @remarks
   * Indicates whether there is a token (Token) for the next query. Values: 
   * - For the first query and when there is no next query, this field does not need to be filled. 
   * - If there is a next query, the value should be the NextToken returned from the previous API call.
   * 
   * @example
   * 634dxxxxx75b5f
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number of the returned query records.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of results to display per page.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 10
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdList: 'ClientIdList',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      pageNo: 'string',
      pageSize: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientIdList)) {
      $dara.Model.validateArray(this.clientIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the group was created.
   * 
   * @example
   * 1564577317000
   */
  createTime?: number;
  /**
   * @remarks
   * The queried group that belongs to the ApsaraMQ for MQTT instance.
   * 
   * @example
   * GID_test1
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether a separate namespace is configured for the ApsaraMQ for MQTT instance. Valid values:
   * 
   * *   **true**: A separate namespace is configured for the ApsaraMQ for MQTT instance. Resource names must be unique within an ApsaraMQ for MQTT instance but can be the same across ApsaraMQ for MQTT instances.
   * *   **false**: No separate namespace is configured for the ApsaraMQ for MQTT instance. Resource names must be globally unique within an ApsaraMQ for MQTT instance and across ApsaraMQ for MQTT instances.
   * 
   * @example
   * true
   */
  independentNaming?: boolean;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the group belongs.
   * 
   * @example
   * post-cn-45910tj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the group was last updated.
   * 
   * @example
   * 1564577317000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupId: 'string',
      independentNaming: 'boolean',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * test
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @example
   * mqtt-cn-5yd3xxx
   */
  resourceId?: string;
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * GID_TEST@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * Indicates whether to allow or deny access.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * The authorized permissions.
   * 
   * @example
   * CONNECT
   */
  permitAction?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      effect: 'Effect',
      permitAction: 'PermitAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      effect: 'string',
      permitAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAZ0cM0HTqLXvgm7oMHWXcvc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned results.
   */
  results?: QueryCustomAuthConnectBlackResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthConnectBlackResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The client ID if IdentityType is set to CLIENT.
   * 
   * @example
   * GID_ICP@@@4d378084
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * 62a5916d71767185b48907d85c2efae2
   */
  secret?: string;
  /**
   * @remarks
   * The signature verification mode. ORIGIN: compares the password and the AccessKey secret. SIGNED: uses the HMAC_SHA1 algorithm to sign the client ID to obtain a password and then compares the password.
   * 
   * @example
   * SIGNED
   */
  signMode?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      secret: 'Secret',
      signMode: 'SignMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      secret: 'string',
      signMode: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * AAAAAXA+GzVqTutYpgkFjBrchKzuvSbpuTqtt6OF9tsC9QnJ
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned results.
   */
  results?: QueryCustomAuthIdentityResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthIdentityResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to allow or deny access.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * The username or client ID.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The authorized permissions.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
  /**
   * @remarks
   * The topic name. Multi-level topics and wildcard characters are supported.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      identity: 'Identity',
      identityType: 'IdentityType',
      permitAction: 'PermitAction',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      identity: 'string',
      identityType: 'string',
      permitAction: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * AAAAAV/vsqTyeMlX1MIk7/b6NrZLIlsSVf49O04ac7HAmlBoaYspakK7ZZkR3vRDp5Y9Nz0EmuWYrtF+1qkUwuJzPk/qEto/FGxl5Kd+qdwNt3t8
   */
  nextToken?: string;
  /**
   * @remarks
   * The response results.
   */
  results?: QueryCustomAuthPermissionResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthPermissionResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponseBodyDeviceInfoList extends $dara.Model {
  /**
   * @remarks
   * The action on the device. Valid values:
   * 
   * *   **connect**: The ApsaraMQ for MQTT client requests a connection to the ApsaraMQ for MQTT broker.
   * *   **close**: The TCP connection is closed.
   * *   **disconnect**: The ApsaraMQ for MQTT client requests a disconnection from the ApsaraMQ for MQTT broker.
   * 
   * @example
   * connect
   */
  action?: string;
  /**
   * @remarks
   * The returned code for the action on the device. Valid values:
   * 
   * *   **mqtt.trace.action.connect**: This value is returned if the value of Action is **connect**.
   * *   **mqtt.trace.action.close**: This value is returned if the value of Action is **close**.
   * *   **mqtt.trace.action.disconnect**: This value is returned if the value of Action is **disconnect**.
   * 
   * @example
   * mqtt.trace.action.connect
   */
  actionCode?: string;
  /**
   * @remarks
   * The returned information for the action on the device. Valid values:
   * 
   * *   **accepted**: The ApsaraMQ for MQTT broker accepts the connection request from the ApsaraMQ for MQTT client.
   * *   **not authorized**: The TCP connection is closed because the permission verification of the client to access the instance fails.
   * *   **clientId conflict**: The TCP connection is closed due to a conflict in the ID of the ApsaraMQ for MQTT client.
   * *   **resource auth failed**: The TCP connection is closed because the permission verification for the ApsaraMQ for MQTT client to access the topic or group fails.
   * *   **no heart**: The TCP connection is closed because no heartbeat is detected on the client.
   * *   **closed by client**: The TCP connection is closed because an exception occurs on the client.
   * *   **disconnected by client**: The client requests a disconnection.
   * *   **invalid param**: The TCP connection is closed due to invalid request parameters.
   * *   **Socket IOException**: The TCP connection is closed due to network jitter or packet loss.
   * 
   * @example
   * accept
   */
  actionInfo?: string;
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * c69fe839209547fa9d073781b9cd****
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the action occurred on the device.
   * 
   * @example
   * 2021-05-21 15:51:54.867
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      channelId: 'ChannelId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      channelId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList extends $dara.Model {
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * *   **pub_mqtt**: The ApsaraMQ for MQTT client sends the message.
   * *   **sub**: The ApsaraMQ for MQTT client subscribes to the message.
   * *   **push_offline**: The ApsaraMQ for MQTT broker pushes the offline message to the ApsaraMQ for MQTT client.
   * 
   * @example
   * pub_mqtt
   */
  action?: string;
  /**
   * @remarks
   * The returned code for the action on the message. Valid values:
   * 
   * *   **mqtt.trace.action.msg.pub.mqtt**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **mqtt.trace.action.msg.sub**: This value is returned if the value of Action is **sub**.
   * *   **mqtt.trace.action.msg.push.offline**: This value is returned if the value of Action is **push_offline**.
   * 
   * @example
   * mqtt.trace.action.msg.pub.mqtt
   */
  actionCode?: string;
  /**
   * @remarks
   * The information returned for the action on the message. Valid values:
   * 
   * *   **Pub From Mqtt Client**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **Push To Mqtt Client**: This value is returned if the value of Action is **sub**.
   * *   **Push Offline Msg To Mqtt Client**: This value is returned if the value of Action is **push_offline**.
   * 
   * @example
   * Pub From Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC1EC0030EAB78308DB16A3EC773****
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was sent or received.
   * 
   * @example
   * 2021-05-21 15:08:19.234
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      clientId: 'ClientId',
      msgId: 'MsgId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      clientId: 'string',
      msgId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponseBodyMessageTraceLists extends $dara.Model {
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * *   **pub_mqtt**: indicates that the message was sent by an ApsaraMQ for MQTT client.
   * *   **pub_mq**: indicates that the message was sent by an ApsaraMQ for RocketMQ client.
   * 
   * @example
   * pub_mqtt
   */
  action?: string;
  /**
   * @remarks
   * The returned code for the action on the message. Valid values:
   * 
   * *   **mqtt.trace.action.msg.pub.mqtt**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **mqtt.trace.action.msg.pub.mq**: This value is returned if the value of Action is **pub_mq**.
   * 
   * @example
   * mqtt.trace.action.msg.pub.mqtt
   */
  actionCode?: string;
  /**
   * @remarks
   * The returned information for the action on the message. Valid values:
   * 
   * *   **Pub From Mqtt Client**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **Pub From MQ**: This value is returned if the value of Action is **pub_mq**.
   * 
   * @example
   * Pub From Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The ID of the client that sends the message.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC1EC0030EAB78308DB16A3EC773BD95
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was sent.
   * 
   * @example
   * 2021-05-21 15:08:19.210
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      clientId: 'ClientId',
      msgId: 'MsgId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      clientId: 'string',
      msgId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists extends $dara.Model {
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * *   **sub**: The ApsaraMQ for MQTT client subscribes to the message.
   * *   **push_offline**: The ApsaraMQ for MQTT broker pushes the offline message to the ApsaraMQ for MQTT client.
   * 
   * @example
   * sub
   */
  action?: string;
  /**
   * @remarks
   * The code returned for the action on the message. Valid values:
   * 
   * *   **mqtt.trace.action.msg.sub**: The value that is returned if the value of Action is **sub**.
   * *   **mqtt.trace.action.msg.push.offline**: The value that is returned if the value of Action is **push_offline**.
   * 
   * @example
   * mqtt.trace.action.msg.sub
   */
  actionCode?: string;
  /**
   * @remarks
   * The returned information for the action on the message. Valid values:
   * 
   * *   **Push To Mqtt Client**: The value that is returned if the value of Action is **sub**.
   * *   **Push Offline Msg To Mqtt Client**: The value that is returned if the value of Action is **push_offline**.
   * 
   * @example
   * Push To Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The ID of the client that subscribes to the message.
   * 
   * @example
   * GID_test@@@consumer
   */
  clientId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC1EC1B33D5978308DB17F3245E4****
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was delivered.
   * 
   * @example
   * 2021-05-25 16:46:41.274
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      clientId: 'ClientId',
      msgId: 'MsgId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      clientId: 'string',
      msgId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialResponseBodyDeviceCredential extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was created. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1605541382000
   */
  createTime?: number;
  /**
   * @remarks
   * The AccessKey ID of the device.
   * 
   * @example
   * DC.Z5fXh9sRRVufyLi6wo****
   */
  deviceAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of the device.
   * 
   * @example
   * DC.BJMkn4eMQJK2vaApTS****
   */
  deviceAccessKeySecret?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was last updated. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1605541382000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      createTime: 'CreateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      createTime: 'number',
      deviceAccessKeyId: 'string',
      deviceAccessKeySecret: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialResponseBodyDeviceCredential extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was created. Unit: milliseconds.
   * 
   * @example
   * 1605541382000
   */
  createTime?: number;
  /**
   * @remarks
   * The AccessKey ID of the device.
   * 
   * @example
   * DC.Z5fXh9sRRVufyLi6wo****
   */
  deviceAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of the device.
   * 
   * @example
   * DC.BJMkn4eMQJK2vaApTS****
   */
  deviceAccessKeySecret?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was last updated. Unit: milliseconds.
   * 
   * @example
   * 1605541382000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      createTime: 'CreateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      createTime: 'number',
      deviceAccessKeyId: 'string',
      deviceAccessKeySecret: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSniConfigResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * SetSniConfig
   */
  authAction?: string;
  /**
   * @example
   * 2063xxxxxxxx533
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 1245xxxxx34343
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFma6gWZmuoFkMxQ0M3MUVCLTRFQzQtNTI1OS1BQ0Q0LTlBMTFGQkVDOTA3Qw==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * test
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ActiveCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the CA certificate is bound.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The serial number of the CA certificate that you want to reactivate. The serial number is the unique identifier of a CA certificate.
   * 
   * The serial number of a CA certificate cannot exceed 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * The SN serial number of the activated CA certificate, used to uniquely identify a CA certificate.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveCaCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActiveCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActiveCaCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The serial number of the CA certificate to which the device certificate belongs. The serial number is the unique identifier of a CA certificate.
   * 
   * The serial number of a CA certificate cannot exceed 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * The serial number of the device certificate that you want to reactivate. The serial number is the unique identifier of a device.
   * 
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the device certificate is bound.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
      mqttInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveDeviceCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The serial number of the device certificate that you reactivated. The serial number is the unique identifier of a device certificate.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveDeviceCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActiveDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActiveDeviceCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthConnectBlackRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device whose connections you want to disable.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthConnectBlackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthConnectBlackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomAuthConnectBlackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomAuthConnectBlackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID if you set IdentityType to CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the Message Queue for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  secret?: string;
  /**
   * @remarks
   * The signature verification mode. ORIGIN: compares the password and the AccessKey secret. SIGNED: uses the HMAC_SHA1 algorithm to sign the client ID to obtain a password and then compares the password.
   * 
   * This parameter is required.
   * 
   * @example
   * SIGNED
   */
  signMode?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      secret: 'Secret',
      signMode: 'SignMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      secret: 'string',
      signMode: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthIdentityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthIdentityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomAuthIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomAuthIdentityResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow or deny access.
   * 
   * This parameter is required.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * The username or client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values: USER and CLIENT.
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The permissions that you want to grant.
   * 
   * This parameter is required.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
  /**
   * @remarks
   * The topics on which you want to grant permissions. Multi-level topics and wildcard characters are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test/t1
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      permitAction: 'PermitAction',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      permitAction: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomAuthPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomAuthPermissionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The permission type of the token. Valid values:
   * 
   * *   **R**: read-only. You can only subscribe to the specified topics.
   * *   **W**: write-only. You can only send messages to the specified topics.
   * *   **R,W**: read and write. You can send messages to and subscribe to the specified topics. Separate **R** and **W** with a comma (,).
   * 
   * This parameter is required.
   * 
   * @example
   * R
   */
  actions?: string;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the token expires. Unit: milliseconds. The minimum validity period of a token is 60 seconds, and the maximum validity period of a token is 30 days. If you specify a validity period of more than 30 days for a token, no errors are returned. However, the token is valid only for 30 days.
   * 
   * For example, you want to specify a validity period of 60 seconds for a token. If the current system timestamp is 1609434061000, you must set this parameter to **1609434121000**. The value is calculated by using the following formula: 1609434061000 + 60 x 1000 = 1609434121000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1609434121000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com/).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The topics on the ApsaraMQ for MQTT instance. Separate multiple topics with commas (,). Each token can be used to access up to 100 topics. Multiple topics are sorted in alphabetic order. MQTT wildcards, including single-level wildcards represented by plus signs (+) and multi-level wildcards represented by number signs (#), can be used for the Resources parameter that you register to apply for a token.
   * 
   * For example, if you set the **Resources** parameter to Topic1/+ when you apply for a token, the ApsaraMQ for MQTT client can manage the topics in Topic1/xxx. If you set the **Resources** parameter to Topic1/# when you apply for a token, the ApsaraMQ for MQTT client can manage topics of any level in Topic1/xxx/xxx/xxx.
   * 
   * >  ApsaraMQ for MQTT supports subtopics. You can specify subtopics in the code for messaging instead of configuring them in the ApsaraMQ for MQTT console. Forward slashes (/) are used to separate topics of different levels. For more information, see [Terms](https://help.aliyun.com/document_detail/42420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * TopicA/+
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      expireTime: 'number',
      instanceId: 'string',
      resources: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 31782AAF-D0CC-44C3-ABFD-1B500276****
   */
  requestId?: string;
  /**
   * @remarks
   * The token that is returned by the ApsaraMQ for MQTT broker.
   * 
   * >  Do not assume the length, format, or rule of the token to return. The actual returned token shall prevail.
   * 
   * @example
   * LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYxn8aQbALNtml7QZKl9L9kPe6LqUb95tEVo+zUqOogs9+jZwDUSzsd4X4qaD3n2TrBEuMOqKkk1Xdrvu9VBQQvIYbz7MJWZDYC3DlW7gLEr33Cuj54iIhagtBi3epStJitsssWs7otY9zhKOSZxhr49G3d0bh35mwyP18EMvDas8UlzeSozsSrujNUqZXOGK0PEBSd+rWMGDJlCt6GFmJgm2JFY7PJwf/7OOSmUYIYFs5o/PuPpoTMF+hcVXMs+0yDukIMTOzG9m3t8k36PVrghFmnK6pC3Rt3mibjW****ng==
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsRequest extends $dara.Model {
  /**
   * @remarks
   * The ApsaraMQ for MQTT clients.
   * 
   * This parameter is required.
   * 
   * @example
   * ClientIdList.1
   */
  clientIdList?: string[];
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdList: 'ClientIdList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientIdList)) {
      $dara.Model.validateArray(this.clientIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status list of all queried ApsaraMQ for MQTT clients.
   */
  onlineStatusList?: BatchQuerySessionByClientIdsResponseBodyOnlineStatusList[];
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 63309FDB-ED6C-46AE-B31C-A172FBA0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatusList: 'OnlineStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatusList: { 'type': 'array', 'itemType': BatchQuerySessionByClientIdsResponseBodyOnlineStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.onlineStatusList)) {
      $dara.Model.validateArray(this.onlineStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchQuerySessionByClientIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchQuerySessionByClientIdsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Client ID of the device
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * ID of the Micro Message Queue MQTT version instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code of the interface: 200 indicates success. Other values indicate error codes. For details about the error codes, see Error Codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Call result information
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. true means success, false means failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the group that you want to create. The group ID must meet the following conventions:
   * 
   * *   The ID must be 7 to 64 characters in length. It must start with GID_ or GID- and can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The ID cannot be changed after the group is created. For more information, see [Terms](https://help.aliyun.com/document_detail/42420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 2C7D722D-0F3D-4415-A9CD-A464D82C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGroupIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the CA certificate is bound.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The serial number of the CA certificate that you want to delete. The serial number is the unique identifier of a CA certificate.
   * 
   * The serial number of a CA certificate cannot exceed 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the CA certificate that you deleted. The serial number is the unique identifier of a CA certificate.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCaCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCaCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthConnectBlackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT client.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthConnectBlackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 317076B7-F946-46BC-A98F-4CF9777C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthConnectBlackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomAuthConnectBlackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomAuthConnectBlackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID if you set IdentityType to CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthIdentityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11568B5B-13A8-4E72-9DBA-3A14F7D3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthIdentityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomAuthIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomAuthIdentityResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The username or client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The topic on which you want to grant permissions. Multi-level topics and Wildcard characters are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test/t1
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34063BCA-0946-49C1-B824-2ED2C905****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomAuthPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomAuthPermissionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The serial number of the CA certificate to which the device certificate belongs. The serial number is the unique identifier of a CA certificate. CA certificates are used to validate device certificates.
   * 
   * The serial number of a CA certificate cannot exceed 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * The serial number of the device certificate whose registration information you want to delete. The serial number is the unique identifier of a device.
   * 
   * The serial number of a device certificate cannot exceed 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * 356217374433****
   */
  deviceSn?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the device certificate is bound.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
      mqttInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The serial number of the device certificate whose registration information is deleted. The serial number is the unique identifier of a device certificate.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDeviceCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the group that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance from which you want to delete a group.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 0621DDD7-F0E9-4D35-8900-518116D6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGroupIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisasterDowngradeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxxx
   */
  downgradeInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      downgradeInstanceId: 'DowngradeInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downgradeInstanceId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisasterDowngradeResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisasterDowngradeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisasterDowngradeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisasterDowngradeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisasterRecoveryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxx
   */
  recoveryInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      recoveryInstanceId: 'RecoveryInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      recoveryInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisasterRecoveryResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 135F8639-F262-4417-98D1-4DE4595C****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisasterRecoveryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisasterRecoveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisasterRecoveryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID bound to the CA certificate, which is the instance ID of the MQTT version of the cloud message queue.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The SN serial number of the CA certificate to be queried, used to uniquely identify a CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Certificate details.
   */
  data?: GetCaCertificateResponseBodyData;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCaCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCaCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The SN serial number of the CA certificate to which the device certificate to be queried belongs, used to uniquely identify a CA certificate. Value range: no more than 128 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * The SN serial number of the device certificate to be queried, used to uniquely identify a device certificate. Value range: no more than 128 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The instance ID to which the device certificate is bound, i.e., the instance ID of the Cloud Message Queue MQTT version.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
      mqttInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Certificate details.
   */
  data?: GetDeviceCertificateResponseBodyData;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDeviceCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device whose access credential you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access credential of the device.
   */
  deviceCredential?: GetDeviceCredentialResponseBodyDeviceCredential;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DQDC0E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredential: 'DeviceCredential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredential: GetDeviceCredentialResponseBodyDeviceCredential,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceCredential && typeof (this.deviceCredential as any).validate === 'function') {
      (this.deviceCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceCredentialResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisterCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisterCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The registration code of the CA certificate.
   * 
   * @example
   * 13274673-8f90-4630-bea1-9cccb25756ad2089******
   */
  registerCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registerCode: 'RegisterCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registerCode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisterCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRegisterCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRegisterCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the CA certificate is bound.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The serial number of the CA certificate that you want to deregister. The serial number is the unique identifier of a CA certificate.
   * 
   * The serial number of a CA certificate cannot exceed 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the CA certificate that is deregistered. The serial number is the unique identifier of a CA certificate.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateCaCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InactivateCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InactivateCaCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The serial number of the CA certificate to which the device certificate that you want to deregister belongs. The serial number is the unique identifier of a CA certificate.
   * 
   * The serial number of a CA certificate cannot exceed 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * The serial number of the device certificate that you want to deregister. The serial number is the unique identifier of a device.
   * 
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the device certificate that you want to deregister is bound.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
      mqttInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateDeviceCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The serial number of the device certificate that is deregistered. The serial number is the unique identifier of a device certificate.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateDeviceCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InactivateDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InactivateDeviceCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Cloud Message Queue MQTT version, indicating which instance\\"s CA certificates need to be viewed.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * Indicates the page number of the returned results. The starting page is counted from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of query records to display per page. Value range: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Query result.
   */
  data?: ListCaCertificateResponseBodyData;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCaCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCaCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Cloud Message Queue MQTT version, indicating which instance\\"s device certificates need to be viewed.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * Indicates which page of the results to return. The starting page is counted from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of query records to display per page. Value range: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Query result.
   */
  data?: ListDeviceCertificateResponseBodyData;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDeviceCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnRequest extends $dara.Model {
  /**
   * @remarks
   * The SN serial number of the CA certificate to be queried, indicating which CA certificate\\"s registered device certificates are to be retrieved.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * The instance ID bound to the CA certificate, which is the instance ID of the MQTT version of the cloud message queue.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * Indicates the page number of the returned results. The starting page is counted from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of query records to display per page. Value range: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      mqttInstanceId: 'MqttInstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      mqttInstanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnResponseBody extends $dara.Model {
  /**
   * @remarks
   * Query result.
   */
  data?: ListDeviceCertificateByCaSnResponseBodyData;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDeviceCertificateByCaSnResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceCertificateByCaSnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceCertificateByCaSnResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdRequest extends $dara.Model {
  /**
   * @remarks
   * Group ID of the MQTT version of the micro message queue.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_xxx
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the Cloud Message Queue MQTT version instance, which must match the actual instance ID used by the client. You can obtain this ID from the **Instance Details** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-xxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Token for starting the next page query.
   * 
   * @example
   * FFdXXXXXWa
   */
  nextToken?: string;
  /**
   * @remarks
   * Indicates the page number of the returned results. The starting page is counted from 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of query records to display per page. 
   * Value range: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      nextToken: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returns the information list.
   */
  deviceCredentialClientIdList?: ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredentialClientIdList: 'DeviceCredentialClientIdList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredentialClientIdList: ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceCredentialClientIdList && typeof (this.deviceCredentialClientIdList as any).validate === 'function') {
      (this.deviceCredentialClientIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceCredentialClientIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceCredentialClientIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance whose groups you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of a queried group.
   */
  data?: ListGroupIdResponseBodyData[];
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 95996EEB-D894-44FA-A87C-940F5CD9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListGroupIdResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @example
   * AAAAAaFXUH1VTHnBlds7StUakOQ=
   */
  nextToken?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @example
   * AAAAAaFXUH1VTHnBlds7StUakOQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34063BCA-0946-49C1-B824-2ED2C905****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client to be queried.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * xOfRU60sGEwN1OlFBIL8Ew==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of clients to be queried. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful. Other status codes indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCustomAuthConnectBlackResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthConnectBlackResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCustomAuthConnectBlackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCustomAuthConnectBlackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID if you set IdentityType to CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTM4MTcxODk3NDQzMjQ1OSIsImV2ZW50SWQiOiJGMkUxOUE3QS1FM0Q0LTVCOEYtQkU4OS1CNkMyM0RBM0UyRjIiLCJsb2dJZCI6IjY2LTEzODE3MTg5NzQ0MzI0NTkiLCJydyI6IlciLCJ0aW1lIjoxNjc4MzI2MTI1MDAwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of identities to be queried. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful. Other status codes indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCustomAuthIdentityResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11568B5B-13A8-4E72-9DBA-3A14F7D3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthIdentityResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCustomAuthIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCustomAuthIdentityResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The username or client ID.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * AAAAAThmKW2HkRgzo4G7IRRTK2fC6zZmAk6y0bwoNPFOOcSP
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of queries to be returned. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The topic whose authorization information you want to query. Multi-level topics and wildcard characters are supported.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCustomAuthPermissionResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 63309FDB-ED6C-46AE-B31C-A172FBA0****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthPermissionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCustomAuthPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCustomAuthPermissionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621580400000
   */
  beginTime?: number;
  /**
   * @remarks
   * The client ID of the device whose trace you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. If the input parameter value is greater than the total number of pages, the returned result is empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621584000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the returned results are displayed in reverse chronological order. Valid values:
   * 
   * *   **true**: The returned results are displayed in reverse time order of actions on the device. This means that the information about the latest action on the device is displayed as the first entry and the information about the earliest action on the device is displayed as the last entry.
   * *   **false**: The returned results are displayed in time order of actions on the device. This means that the information about the earliest action on the device is displayed as the first entry and the information about the latest action on the device is displayed as the last entry.
   * 
   * If you do not specify this parameter, the returned results are displayed in time order of actions on the device by default.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clientId: 'ClientId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clientId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The details of the action on the device.
   */
  deviceInfoList?: QueryMqttTraceDeviceResponseBodyDeviceInfoList[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * 317076B7-F946-46BC-A98F-4CF9777C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned actions on the device.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceInfoList: 'DeviceInfoList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceInfoList: { 'type': 'array', 'itemType': QueryMqttTraceDeviceResponseBodyDeviceInfoList },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfoList)) {
      $dara.Model.validateArray(this.deviceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMqttTraceDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMqttTraceDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1618646400000
   */
  beginTime?: number;
  /**
   * @remarks
   * The client ID of the device whose messages you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. If the input parameter value is greater than the total number of pages, the returned result is empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621591200000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section of the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the returned results are displayed in reverse chronological order. Valid values:
   * 
   * *   **true**: The returned results are displayed in reverse order of the time when messages are sent or received. This means that the latest sent or received message is displayed as the first entry and the earliest sent or received message is displayed as the last entry.
   * *   **false**: The returned results are displayed in order of the time when messages are sent or received. This means that the earliest sent or received message is displayed as the first entry and the latest sent or received message is displayed as the last entry.
   * 
   * If this parameter is not specified, the returned results are displayed in order of the time when messages are sent or received.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clientId: 'ClientId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clientId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned messages.
   */
  messageOfClientList?: QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * B096B9D6-62F3-4567-BB59-58D1362E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of messages returned.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      messageOfClientList: 'MessageOfClientList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      messageOfClientList: { 'type': 'array', 'itemType': QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messageOfClientList)) {
      $dara.Model.validateArray(this.messageOfClientList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMqttTraceMessageOfClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMqttTraceMessageOfClientResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1618646400000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621591200000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AC1EC0030EAB78308DB16A3EC773****
   */
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      msgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message traces.
   */
  messageTraceLists?: QueryMqttTraceMessagePublishResponseBodyMessageTraceLists[];
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * 69AD5550-BF22-438A-9202-A6E89185****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageTraceLists: 'MessageTraceLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageTraceLists: { 'type': 'array', 'itemType': QueryMqttTraceMessagePublishResponseBodyMessageTraceLists },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageTraceLists)) {
      $dara.Model.validateArray(this.messageTraceLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMqttTraceMessagePublishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMqttTraceMessagePublishResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621936800000
   */
  beginTime?: number;
  /**
   * @remarks
   * The ID of the client that subscribes to the message. If you do not specify this parameter, the IDs of all clients that subscribe to the message are returned.
   * 
   * @example
   * GID_test@@@consumer
   */
  clientId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. If the input parameter value is greater than the total number of pages, the returned result is empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1618646400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section of the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AC1EC1B33D5978308DB17F3245E4****
   */
  msgId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the returned results are displayed in reverse chronological order. Valid values:
   * 
   * *   **true**: The returned results are displayed in reverse order of the time when messages are delivered. This means that the latest consumed message is displayed as the first entry and the earliest consumed message is displayed as the last entry.
   * *   **false**: The returned results are displayed in order of the time when messages are delivered. This means that the earliest consumed message is displayed as the first entry and the latest consumed message is displayed as the last entry.
   * 
   * If you do not specify this parameter, the returned results are displayed in order of time when messages are delivered.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clientId: 'ClientId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      msgId: 'MsgId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clientId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      msgId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The delivery trace of the queried message.
   */
  messageTraceLists?: QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID that the system generates for the request. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * 4E685844-ADAF-4D85-9EAC-F9471E8C****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned delivery traces.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      messageTraceLists: 'MessageTraceLists',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      messageTraceLists: { 'type': 'array', 'itemType': QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messageTraceLists)) {
      $dara.Model.validateArray(this.messageTraceLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMqttTraceMessageSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMqttTraceMessageSubscribeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByClientIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT client that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByClientIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the ApsaraMQ for MQTT client is connected to the ApsaraMQ for MQTT broker. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  onlineStatus?: boolean;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DBBC0E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatus: 'OnlineStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatus: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByClientIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySessionByClientIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySessionByClientIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com/).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYxn8aQbALNtml7QZKl9L9kPe6LqUb95tEVo+zUqOogs9+jZwDUSzsd4X4qaD3n2TrBEuMOqKkk1Xdrvu9VBQQvIYbz7MJWZDYC3DlW7gLEr33Cuj54iIhagtBi3epStJitsssWs7otY9zhKOSZxhr49G3d0bh35mwyP18EMvDas8UlzeSozsSrujNUqZXOGK0PEBSd+rWMGDJlCt6GFmJgm2JFY7PJwf/7OOSmUYIYFs5o/PuPpoTMF+hcVXMs+0yDukIMTOzG9m3t8k36PVrghFmnK6pC3Rt3mibjW****ng==
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * 5C8AADD0-6A95-436D-AFA0-3405CCE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the queried token. Valid values:
   * 
   * *   **true**: indicates the token is valid.
   * *   **false**: indicates the token is invalid.
   * 
   * @example
   * true
   */
  tokenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tokenStatus: 'TokenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tokenStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device whose access credential you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access credential of the device.
   */
  deviceCredential?: RefreshDeviceCredentialResponseBodyDeviceCredential;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DBDC0F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredential: 'DeviceCredential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredential: RefreshDeviceCredentialResponseBodyDeviceCredential,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceCredential && typeof (this.deviceCredential as any).validate === 'function') {
      (this.deviceCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshDeviceCredentialResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the CA certificate that you want to register with an ApsaraMQ for MQTT broker.
   * 
   * 
   * > In the example, \\n indicates a line feed.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END CERTIFICATE-----
   */
  caContent?: string;
  /**
   * @remarks
   * The name of the CA certificate that you want to register with an ApsaraMQ for MQTT broker.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt_ca
   */
  caName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which you want to bind the CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The content of the validation certificate issued by the CA certificate that you want to register with an ApsaraMQ for MQTT broker. The validation certificate must be used together with the registration code of the CA certificate to verify the private key of the CA certificate.
   * > In the example, \\n indicates a line feed.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIID/DCCAu+Y5sRMpp9tnd+4s******\\n-----END CERTIFICATE-----
   */
  verificationContent?: string;
  static names(): { [key: string]: string } {
    return {
      caContent: 'CaContent',
      caName: 'CaName',
      mqttInstanceId: 'MqttInstanceId',
      verificationContent: 'VerificationContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caContent: 'string',
      caName: 'string',
      mqttInstanceId: 'string',
      verificationContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the registered CA certificate. The serial number is the unique identifier of a CA certificate.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCaCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterCaCertificateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device for which you want to create an access credential.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access credential of the device.
   */
  deviceCredential?: RegisterDeviceCredentialResponseBodyDeviceCredential;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DBDC0E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredential: 'DeviceCredential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredential: RegisterDeviceCredentialResponseBodyDeviceCredential,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceCredential && typeof (this.deviceCredential as any).validate === 'function') {
      (this.deviceCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterDeviceCredentialResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com/).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that you want to revoke.
   * 
   * This parameter is required.
   * 
   * @example
   * LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYxn8aQbALNtml7QZKl9L9kPe6LqUb95tEVo+zUqOogs9+jZwDUSzsd4X4qaD3n2TrBEuMOqKkk1Xdrvu9VBQQvIYbz7MJWZDYC3DlW7gLEr33Cuj54iIhagtBi3epStJitsssWs7otY9zhKOSZxhr49G3d0bh35mwyP18EMvDas8UlzeSozsSrujNUqZXOGK0PEBSd+rWMGDJlCt6GFmJgm2JFY7PJwf/7OOSmUYIYFs5o/PuPpoTMF+hcVXMs+0yDukIMTOzG9m3t8k36PVrghFmnK6pC3Rt3mibjW****ng==
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 833EDFCB-C447-4CE3-B21F-3A4C2D1B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The topic to which you want to send a message on the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * TopicA
   */
  mqttTopic?: string;
  /**
   * @remarks
   * The message content, which is the payload of the message. We recommend that you encode the content in Base64 to prevent non-printable characters from being transmitted.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mqttTopic: 'MqttTopic',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mqttTopic: 'string',
      payload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique message ID that is returned by the ApsaraMQ for MQTT broker after the message is sent.
   * 
   * @example
   * 0B736D997B7F45FF54E61C1C1B58****
   */
  msgId?: string;
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendMessageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSniConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The default certificate. If the domain name that you access cannot match the certificates of the broker, the default certificate is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1533xxxx-cn-hangzhou
   */
  defaultCertificate?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-5yd3xxx
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The Server Name Indication (SNI) configuration. This parameter is used to map domain names and certificates. Format: Domain name#Certificate ID#Password (if available);Domain name#Certificate ID#Password (if available).
   * 
   * @example
   * *.mqtt.aliyuncs.com#15xxxxx-cn-hangzhou;mqtt-test.mqtt.aliyuncs.com#15xxxx9-cn-hangzhou
   */
  sniConfig?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCertificate: 'DefaultCertificate',
      mqttInstanceId: 'MqttInstanceId',
      sniConfig: 'SniConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCertificate: 'string',
      mqttInstanceId: 'string',
      sniConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSniConfigResponseBody extends $dara.Model {
  accessDeniedDetail?: SetSniConfigResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DQDC0E****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: SetSniConfigResponseBodyAccessDeniedDetail,
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSniConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSniConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetSniConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterDeviceCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device whose access credential you want to deregister.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterDeviceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * E4581CCD-62AF-44D9-B5B4-D1DBDC0E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterDeviceCredentialResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnRegisterDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnRegisterDeviceCredentialResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @example
   * False
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B3C2F69B-B543-49B0-8B21-C8843AE0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID if you set IdentityType to CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  secret?: string;
  /**
   * @remarks
   * The signature verification mode. ORIGIN: compares the password and the AccessKey secret. SIGNED: uses the HMAC_SHA1 algorithm to sign the client ID to obtain a password and then compares the password.
   * 
   * This parameter is required.
   * 
   * @example
   * SIGNED
   */
  signMode?: string;
  /**
   * @remarks
   * The username. The value cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      secret: 'Secret',
      signMode: 'SignMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      secret: 'string',
      signMode: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthIdentityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F00084A-7F07-4B15-BADA-8903A4FB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthIdentityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomAuthIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomAuthIdentityResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow or deny access.
   * 
   * This parameter is required.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * Username or Client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * ID of the Cloud Message Queue MQTT version instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The permissions that you want to grant.
   * 
   * This parameter is required.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
  /**
   * @remarks
   * Authorized Topic, supporting multi-level MQTT topics and wildcards.
   * 
   * This parameter is required.
   * 
   * @example
   * test/t1
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      permitAction: 'PermitAction',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      permitAction: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code returned upon failed invocation. For more information, see Error Codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Information
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8CC04203-679B-4DED-89D9-E7C2E979****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. true: Call succeeded. false: Call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomAuthPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomAuthPermissionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("onsmqtt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Activate CA Certificate
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * *   You can call this operation to reactivate only CA certificates that are registered with ApsaraMQ for MQTT brokers. You can call the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query CA certificates that are registered with an ApsaraMQ for MQTT instance.
   * 
   * @param request - ActiveCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveCaCertificateResponse
   */
  async activeCaCertificateWithOptions(request: ActiveCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<ActiveCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ActiveCaCertificateResponse>(await this.callApi(params, req, runtime), new ActiveCaCertificateResponse({}));
    } else {
      return $dara.cast<ActiveCaCertificateResponse>(await this.execute(params, req, runtime), new ActiveCaCertificateResponse({}));
    }

  }

  /**
   * Activate CA Certificate
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * *   You can call this operation to reactivate only CA certificates that are registered with ApsaraMQ for MQTT brokers. You can call the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query CA certificates that are registered with an ApsaraMQ for MQTT instance.
   * 
   * @param request - ActiveCaCertificateRequest
   * @returns ActiveCaCertificateResponse
   */
  async activeCaCertificate(request: ActiveCaCertificateRequest): Promise<ActiveCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeCaCertificateWithOptions(request, runtime);
  }

  /**
   * Reactivates a device certificate. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client based on the registered CA certificate. If the CA certificate matches the device certificate, the client passes the authentication and the system automatically registers the device certificate with the ApsaraMQ for MQTT broker. After a device certificate is registered with an ApsaraMQ for MQTT broker, the certificate is automatically activated. If your device certificate is changed to the inactivated state, you can call this operation to reactivate the device certificate.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ActiveDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveDeviceCertificateResponse
   */
  async activeDeviceCertificateWithOptions(request: ActiveDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<ActiveDeviceCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!$dara.isNull(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ActiveDeviceCertificateResponse>(await this.callApi(params, req, runtime), new ActiveDeviceCertificateResponse({}));
    } else {
      return $dara.cast<ActiveDeviceCertificateResponse>(await this.execute(params, req, runtime), new ActiveDeviceCertificateResponse({}));
    }

  }

  /**
   * Reactivates a device certificate. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client based on the registered CA certificate. If the CA certificate matches the device certificate, the client passes the authentication and the system automatically registers the device certificate with the ApsaraMQ for MQTT broker. After a device certificate is registered with an ApsaraMQ for MQTT broker, the certificate is automatically activated. If your device certificate is changed to the inactivated state, you can call this operation to reactivate the device certificate.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ActiveDeviceCertificateRequest
   * @returns ActiveDeviceCertificateResponse
   */
  async activeDeviceCertificate(request: ActiveDeviceCertificateRequest): Promise<ActiveDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Adds a device to the connection blacklist to disable connections from the device.
   * 
   * @param request - AddCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthConnectBlackResponse
   */
  async addCustomAuthConnectBlackWithOptions(request: AddCustomAuthConnectBlackRequest, runtime: $dara.RuntimeOptions): Promise<AddCustomAuthConnectBlackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new AddCustomAuthConnectBlackResponse({}));
    } else {
      return $dara.cast<AddCustomAuthConnectBlackResponse>(await this.execute(params, req, runtime), new AddCustomAuthConnectBlackResponse({}));
    }

  }

  /**
   * Adds a device to the connection blacklist to disable connections from the device.
   * 
   * @param request - AddCustomAuthConnectBlackRequest
   * @returns AddCustomAuthConnectBlackResponse
   */
  async addCustomAuthConnectBlack(request: AddCustomAuthConnectBlackRequest): Promise<AddCustomAuthConnectBlackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Adds the information about identity authentication. The identity can be accurate to a client.
   * 
   * @param request - AddCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthIdentityResponse
   */
  async addCustomAuthIdentityWithOptions(request: AddCustomAuthIdentityRequest, runtime: $dara.RuntimeOptions): Promise<AddCustomAuthIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!$dara.isNull(request.signMode)) {
      body["SignMode"] = request.signMode;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new AddCustomAuthIdentityResponse({}));
    } else {
      return $dara.cast<AddCustomAuthIdentityResponse>(await this.execute(params, req, runtime), new AddCustomAuthIdentityResponse({}));
    }

  }

  /**
   * Adds the information about identity authentication. The identity can be accurate to a client.
   * 
   * @param request - AddCustomAuthIdentityRequest
   * @returns AddCustomAuthIdentityResponse
   */
  async addCustomAuthIdentity(request: AddCustomAuthIdentityRequest): Promise<AddCustomAuthIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Grants permissions on topics. You must create a parent topic in the console before you call this API operation.
   * 
   * @param request - AddCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthPermissionResponse
   */
  async addCustomAuthPermissionWithOptions(request: AddCustomAuthPermissionRequest, runtime: $dara.RuntimeOptions): Promise<AddCustomAuthPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.effect)) {
      body["Effect"] = request.effect;
    }

    if (!$dara.isNull(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.permitAction)) {
      body["PermitAction"] = request.permitAction;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new AddCustomAuthPermissionResponse({}));
    } else {
      return $dara.cast<AddCustomAuthPermissionResponse>(await this.execute(params, req, runtime), new AddCustomAuthPermissionResponse({}));
    }

  }

  /**
   * Grants permissions on topics. You must create a parent topic in the console before you call this API operation.
   * 
   * @param request - AddCustomAuthPermissionRequest
   * @returns AddCustomAuthPermissionResponse
   */
  async addCustomAuthPermission(request: AddCustomAuthPermissionRequest): Promise<AddCustomAuthPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * Applies for a token from ApsaraMQ for MQTT. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **ApplyToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ApplyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyTokenResponse
   */
  async applyTokenWithOptions(request: ApplyTokenRequest, runtime: $dara.RuntimeOptions): Promise<ApplyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actions)) {
      query["Actions"] = request.actions;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyTokenResponse>(await this.callApi(params, req, runtime), new ApplyTokenResponse({}));
    } else {
      return $dara.cast<ApplyTokenResponse>(await this.execute(params, req, runtime), new ApplyTokenResponse({}));
    }

  }

  /**
   * Applies for a token from ApsaraMQ for MQTT. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **ApplyToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ApplyTokenRequest
   * @returns ApplyTokenResponse
   */
  async applyToken(request: ApplyTokenRequest): Promise<ApplyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyTokenWithOptions(request, runtime);
  }

  /**
   * Queries the status of multiple ApsaraMQ for MQTT clients by client ID.
   * 
   * @remarks
   *   You can call the **BatchQuerySessionByClientIds** operation up to 100 times per second. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   You can call the **BatchQuerySessionByClientIds** operation to query the status of up to 10 ApsaraMQ for MQTT clients in a single query.
   * *   Each successful call to the **BatchQuerySessionByClientIds** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - BatchQuerySessionByClientIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQuerySessionByClientIdsResponse
   */
  async batchQuerySessionByClientIdsWithOptions(request: BatchQuerySessionByClientIdsRequest, runtime: $dara.RuntimeOptions): Promise<BatchQuerySessionByClientIdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIdList)) {
      query["ClientIdList"] = request.clientIdList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchQuerySessionByClientIds",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchQuerySessionByClientIdsResponse>(await this.callApi(params, req, runtime), new BatchQuerySessionByClientIdsResponse({}));
    } else {
      return $dara.cast<BatchQuerySessionByClientIdsResponse>(await this.execute(params, req, runtime), new BatchQuerySessionByClientIdsResponse({}));
    }

  }

  /**
   * Queries the status of multiple ApsaraMQ for MQTT clients by client ID.
   * 
   * @remarks
   *   You can call the **BatchQuerySessionByClientIds** operation up to 100 times per second. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   You can call the **BatchQuerySessionByClientIds** operation to query the status of up to 10 ApsaraMQ for MQTT clients in a single query.
   * *   Each successful call to the **BatchQuerySessionByClientIds** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - BatchQuerySessionByClientIdsRequest
   * @returns BatchQuerySessionByClientIdsResponse
   */
  async batchQuerySessionByClientIds(request: BatchQuerySessionByClientIdsRequest): Promise<BatchQuerySessionByClientIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchQuerySessionByClientIdsWithOptions(request, runtime);
  }

  /**
   * Proactively closes an online connection. After you call this API operation, the device may reconnect to the broker based on the client reconnection mechanism.
   * 
   * @remarks
   * This API is still in the testing phase and is only available for Professional Edition instances in the Shanghai region. Legacy instances are not supported at this time.
   * 
   * @param request - CloseConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseConnectionResponse
   */
  async closeConnectionWithOptions(request: CloseConnectionRequest, runtime: $dara.RuntimeOptions): Promise<CloseConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseConnection",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloseConnectionResponse>(await this.callApi(params, req, runtime), new CloseConnectionResponse({}));
    } else {
      return $dara.cast<CloseConnectionResponse>(await this.execute(params, req, runtime), new CloseConnectionResponse({}));
    }

  }

  /**
   * Proactively closes an online connection. After you call this API operation, the device may reconnect to the broker based on the client reconnection mechanism.
   * 
   * @remarks
   * This API is still in the testing phase and is only available for Professional Edition instances in the Shanghai region. Legacy instances are not supported at this time.
   * 
   * @param request - CloseConnectionRequest
   * @returns CloseConnectionResponse
   */
  async closeConnection(request: CloseConnectionRequest): Promise<CloseConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeConnectionWithOptions(request, runtime);
  }

  /**
   * Creates a group ID. Before you connect producers and consumers to an ApsaraMQ for MQTT broker to send and receive messages, you must specify a unique ID for each client for identification. A client ID is in the format of \\<GroupID>@@@\\<DeviceID>. In the preceding format, DeviceID is the custom ID that you specify for the client, and GroupID is the ID of the group that you create on the ApsaraMQ for MQTT broker in advance.
   * 
   * @remarks
   * Each successful call to the **CreateGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - CreateGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupIdResponse
   */
  async createGroupIdWithOptions(request: CreateGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<CreateGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateGroupIdResponse>(await this.callApi(params, req, runtime), new CreateGroupIdResponse({}));
    } else {
      return $dara.cast<CreateGroupIdResponse>(await this.execute(params, req, runtime), new CreateGroupIdResponse({}));
    }

  }

  /**
   * Creates a group ID. Before you connect producers and consumers to an ApsaraMQ for MQTT broker to send and receive messages, you must specify a unique ID for each client for identification. A client ID is in the format of \\<GroupID>@@@\\<DeviceID>. In the preceding format, DeviceID is the custom ID that you specify for the client, and GroupID is the ID of the group that you create on the ApsaraMQ for MQTT broker in advance.
   * 
   * @remarks
   * Each successful call to the **CreateGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - CreateGroupIdRequest
   * @returns CreateGroupIdResponse
   */
  async createGroupId(request: CreateGroupIdRequest): Promise<CreateGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupIdWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate authority (CA) certificate from an ApsaraMQ for MQTT broker. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates. Before you can use a CA certificate, you must register the certificate with an ApsaraMQ for MQTT broker. If you no longer require a CA certificate, you can call this operation to delete the certificate from the ApsaraMQ for MQTT broker.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * *   You can call this operation to delete only CA certificates that are registered with ApsaraMQ for MQTT brokers. You can call the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query CA certificates that are registered with an ApsaraMQ for MQTT instance.
   * *   If you delete a specific CA certificate from an ApsaraMQ for MQTT broker, all device certificates that are issued by the CA certificate and are registered with the ApsaraMQ for MQTT broker are automatically deleted.
   * 
   * @param request - DeleteCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCaCertificateResponse
   */
  async deleteCaCertificateWithOptions(request: DeleteCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCaCertificateResponse>(await this.callApi(params, req, runtime), new DeleteCaCertificateResponse({}));
    } else {
      return $dara.cast<DeleteCaCertificateResponse>(await this.execute(params, req, runtime), new DeleteCaCertificateResponse({}));
    }

  }

  /**
   * Deletes a certificate authority (CA) certificate from an ApsaraMQ for MQTT broker. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates. Before you can use a CA certificate, you must register the certificate with an ApsaraMQ for MQTT broker. If you no longer require a CA certificate, you can call this operation to delete the certificate from the ApsaraMQ for MQTT broker.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * *   You can call this operation to delete only CA certificates that are registered with ApsaraMQ for MQTT brokers. You can call the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query CA certificates that are registered with an ApsaraMQ for MQTT instance.
   * *   If you delete a specific CA certificate from an ApsaraMQ for MQTT broker, all device certificates that are issued by the CA certificate and are registered with the ApsaraMQ for MQTT broker are automatically deleted.
   * 
   * @param request - DeleteCaCertificateRequest
   * @returns DeleteCaCertificateResponse
   */
  async deleteCaCertificate(request: DeleteCaCertificateRequest): Promise<DeleteCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCaCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a connection blacklist.
   * 
   * @param request - DeleteCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthConnectBlackResponse
   */
  async deleteCustomAuthConnectBlackWithOptions(request: DeleteCustomAuthConnectBlackRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCustomAuthConnectBlackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new DeleteCustomAuthConnectBlackResponse({}));
    } else {
      return $dara.cast<DeleteCustomAuthConnectBlackResponse>(await this.execute(params, req, runtime), new DeleteCustomAuthConnectBlackResponse({}));
    }

  }

  /**
   * Deletes a connection blacklist.
   * 
   * @param request - DeleteCustomAuthConnectBlackRequest
   * @returns DeleteCustomAuthConnectBlackResponse
   */
  async deleteCustomAuthConnectBlack(request: DeleteCustomAuthConnectBlackRequest): Promise<DeleteCustomAuthConnectBlackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Deletes an identity for custom authorization.
   * 
   * @param request - DeleteCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthIdentityResponse
   */
  async deleteCustomAuthIdentityWithOptions(request: DeleteCustomAuthIdentityRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCustomAuthIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new DeleteCustomAuthIdentityResponse({}));
    } else {
      return $dara.cast<DeleteCustomAuthIdentityResponse>(await this.execute(params, req, runtime), new DeleteCustomAuthIdentityResponse({}));
    }

  }

  /**
   * Deletes an identity for custom authorization.
   * 
   * @param request - DeleteCustomAuthIdentityRequest
   * @returns DeleteCustomAuthIdentityResponse
   */
  async deleteCustomAuthIdentity(request: DeleteCustomAuthIdentityRequest): Promise<DeleteCustomAuthIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Deletes permissions on a topic.
   * 
   * @param request - DeleteCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthPermissionResponse
   */
  async deleteCustomAuthPermissionWithOptions(request: DeleteCustomAuthPermissionRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCustomAuthPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new DeleteCustomAuthPermissionResponse({}));
    } else {
      return $dara.cast<DeleteCustomAuthPermissionResponse>(await this.execute(params, req, runtime), new DeleteCustomAuthPermissionResponse({}));
    }

  }

  /**
   * Deletes permissions on a topic.
   * 
   * @param request - DeleteCustomAuthPermissionRequest
   * @returns DeleteCustomAuthPermissionResponse
   */
  async deleteCustomAuthPermission(request: DeleteCustomAuthPermissionRequest): Promise<DeleteCustomAuthPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * Deletes the registration information about a specific device certificate from an ApsaraMQ for MQTT broker. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client. If you no longer require a device certificate, you can call this operation to delete the registration information about the certificate from an ApsaraMQ for MQTT broker.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - DeleteDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeviceCertificateResponse
   */
  async deleteDeviceCertificateWithOptions(request: DeleteDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDeviceCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!$dara.isNull(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDeviceCertificateResponse>(await this.callApi(params, req, runtime), new DeleteDeviceCertificateResponse({}));
    } else {
      return $dara.cast<DeleteDeviceCertificateResponse>(await this.execute(params, req, runtime), new DeleteDeviceCertificateResponse({}));
    }

  }

  /**
   * Deletes the registration information about a specific device certificate from an ApsaraMQ for MQTT broker. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client. If you no longer require a device certificate, you can call this operation to delete the registration information about the certificate from an ApsaraMQ for MQTT broker.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - DeleteDeviceCertificateRequest
   * @returns DeleteDeviceCertificateResponse
   */
  async deleteDeviceCertificate(request: DeleteDeviceCertificateRequest): Promise<DeleteDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a group from an ApsaraMQ for MQTT instance.
   * 
   * @remarks
   * Each successful call to the **DeleteGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - DeleteGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupIdResponse
   */
  async deleteGroupIdWithOptions(request: DeleteGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<DeleteGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteGroupIdResponse>(await this.callApi(params, req, runtime), new DeleteGroupIdResponse({}));
    } else {
      return $dara.cast<DeleteGroupIdResponse>(await this.execute(params, req, runtime), new DeleteGroupIdResponse({}));
    }

  }

  /**
   * Deletes a group from an ApsaraMQ for MQTT instance.
   * 
   * @remarks
   * Each successful call to the **DeleteGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - DeleteGroupIdRequest
   * @returns DeleteGroupIdResponse
   */
  async deleteGroupId(request: DeleteGroupIdRequest): Promise<DeleteGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupIdWithOptions(request, runtime);
  }

  /**
   * DisasterDowngrade
   * 
   * @param request - DisasterDowngradeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisasterDowngradeResponse
   */
  async disasterDowngradeWithOptions(request: DisasterDowngradeRequest, runtime: $dara.RuntimeOptions): Promise<DisasterDowngradeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.downgradeInstanceId)) {
      body["DowngradeInstanceId"] = request.downgradeInstanceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisasterDowngrade",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisasterDowngradeResponse>(await this.callApi(params, req, runtime), new DisasterDowngradeResponse({}));
    } else {
      return $dara.cast<DisasterDowngradeResponse>(await this.execute(params, req, runtime), new DisasterDowngradeResponse({}));
    }

  }

  /**
   * DisasterDowngrade
   * 
   * @param request - DisasterDowngradeRequest
   * @returns DisasterDowngradeResponse
   */
  async disasterDowngrade(request: DisasterDowngradeRequest): Promise<DisasterDowngradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disasterDowngradeWithOptions(request, runtime);
  }

  /**
   * DisasterRecovery
   * 
   * @param request - DisasterRecoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisasterRecoveryResponse
   */
  async disasterRecoveryWithOptions(request: DisasterRecoveryRequest, runtime: $dara.RuntimeOptions): Promise<DisasterRecoveryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.recoveryInstanceId)) {
      body["RecoveryInstanceId"] = request.recoveryInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisasterRecovery",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisasterRecoveryResponse>(await this.callApi(params, req, runtime), new DisasterRecoveryResponse({}));
    } else {
      return $dara.cast<DisasterRecoveryResponse>(await this.execute(params, req, runtime), new DisasterRecoveryResponse({}));
    }

  }

  /**
   * DisasterRecovery
   * 
   * @param request - DisasterRecoveryRequest
   * @returns DisasterRecoveryResponse
   */
  async disasterRecovery(request: DisasterRecoveryRequest): Promise<DisasterRecoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disasterRecoveryWithOptions(request, runtime);
  }

  /**
   * Queries the details of a certificate authority (CA) certificate, such as the content and status of the certificate. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCaCertificateResponse
   */
  async getCaCertificateWithOptions(request: GetCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<GetCaCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCaCertificateResponse>(await this.callApi(params, req, runtime), new GetCaCertificateResponse({}));
    } else {
      return $dara.cast<GetCaCertificateResponse>(await this.execute(params, req, runtime), new GetCaCertificateResponse({}));
    }

  }

  /**
   * Queries the details of a certificate authority (CA) certificate, such as the content and status of the certificate. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetCaCertificateRequest
   * @returns GetCaCertificateResponse
   */
  async getCaCertificate(request: GetCaCertificateRequest): Promise<GetCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCaCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the details of a device certificate. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceCertificateResponse
   */
  async getDeviceCertificateWithOptions(request: GetDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<GetDeviceCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDeviceCertificateResponse>(await this.callApi(params, req, runtime), new GetDeviceCertificateResponse({}));
    } else {
      return $dara.cast<GetDeviceCertificateResponse>(await this.execute(params, req, runtime), new GetDeviceCertificateResponse({}));
    }

  }

  /**
   * Queries the details of a device certificate. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetDeviceCertificateRequest
   * @returns GetDeviceCertificateResponse
   */
  async getDeviceCertificate(request: GetDeviceCertificateRequest): Promise<GetDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the access credential of a device. If unique-certificate-per-device authentication is used as the authentication method on an ApsaraMQ for MQTT broker, an access credential that you apply for in advance is required for authentication when you connect your device to the broker. The connection can be established only after the authentication is passed.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **GetDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - GetDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceCredentialResponse
   */
  async getDeviceCredentialWithOptions(request: GetDeviceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<GetDeviceCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDeviceCredentialResponse>(await this.callApi(params, req, runtime), new GetDeviceCredentialResponse({}));
    } else {
      return $dara.cast<GetDeviceCredentialResponse>(await this.execute(params, req, runtime), new GetDeviceCredentialResponse({}));
    }

  }

  /**
   * Queries the access credential of a device. If unique-certificate-per-device authentication is used as the authentication method on an ApsaraMQ for MQTT broker, an access credential that you apply for in advance is required for authentication when you connect your device to the broker. The connection can be established only after the authentication is passed.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **GetDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - GetDeviceCredentialRequest
   * @returns GetDeviceCredentialResponse
   */
  async getDeviceCredential(request: GetDeviceCredentialRequest): Promise<GetDeviceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * Obtains the registration code of a specific certificate authority (CA) certificate. When you register a CA certificate with an ApsaraMQ for MQTT broker, you must upload the validation certificate of the CA certificate to verify whether you have the private key of the CA certificate. The validation certificate of a CA certificate must be generated by using the registration code of the CA certificate.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetRegisterCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegisterCodeResponse
   */
  async getRegisterCodeWithOptions(request: GetRegisterCodeRequest, runtime: $dara.RuntimeOptions): Promise<GetRegisterCodeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegisterCode",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRegisterCodeResponse>(await this.callApi(params, req, runtime), new GetRegisterCodeResponse({}));
    } else {
      return $dara.cast<GetRegisterCodeResponse>(await this.execute(params, req, runtime), new GetRegisterCodeResponse({}));
    }

  }

  /**
   * Obtains the registration code of a specific certificate authority (CA) certificate. When you register a CA certificate with an ApsaraMQ for MQTT broker, you must upload the validation certificate of the CA certificate to verify whether you have the private key of the CA certificate. The validation certificate of a CA certificate must be generated by using the registration code of the CA certificate.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetRegisterCodeRequest
   * @returns GetRegisterCodeResponse
   */
  async getRegisterCode(request: GetRegisterCodeRequest): Promise<GetRegisterCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRegisterCodeWithOptions(request, runtime);
  }

  /**
   * Deregister a certificate authority (CA) certificate. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates. If you no longer require a CA certificate, you can call this operation to deregister the certificate. If you want to continue using a deregistered CA certificate, you can call the ActiveCaCertificate operation to reactivate the certificate.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * *   You can call this operation to deregister only CA certificates that are registered with ApsaraMQ for MQTT brokers. You can call the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query CA certificates that are registered with an ApsaraMQ for MQTT instance.
   * 
   * @param request - InactivateCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InactivateCaCertificateResponse
   */
  async inactivateCaCertificateWithOptions(request: InactivateCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<InactivateCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InactivateCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InactivateCaCertificateResponse>(await this.callApi(params, req, runtime), new InactivateCaCertificateResponse({}));
    } else {
      return $dara.cast<InactivateCaCertificateResponse>(await this.execute(params, req, runtime), new InactivateCaCertificateResponse({}));
    }

  }

  /**
   * Deregister a certificate authority (CA) certificate. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates. If you no longer require a CA certificate, you can call this operation to deregister the certificate. If you want to continue using a deregistered CA certificate, you can call the ActiveCaCertificate operation to reactivate the certificate.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * *   You can call this operation to deregister only CA certificates that are registered with ApsaraMQ for MQTT brokers. You can call the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query CA certificates that are registered with an ApsaraMQ for MQTT instance.
   * 
   * @param request - InactivateCaCertificateRequest
   * @returns InactivateCaCertificateResponse
   */
  async inactivateCaCertificate(request: InactivateCaCertificateRequest): Promise<InactivateCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inactivateCaCertificateWithOptions(request, runtime);
  }

  /**
   * Deregisters a device certificate. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - InactivateDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InactivateDeviceCertificateResponse
   */
  async inactivateDeviceCertificateWithOptions(request: InactivateDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<InactivateDeviceCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!$dara.isNull(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InactivateDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InactivateDeviceCertificateResponse>(await this.callApi(params, req, runtime), new InactivateDeviceCertificateResponse({}));
    } else {
      return $dara.cast<InactivateDeviceCertificateResponse>(await this.execute(params, req, runtime), new InactivateDeviceCertificateResponse({}));
    }

  }

  /**
   * Deregisters a device certificate. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - InactivateDeviceCertificateRequest
   * @returns InactivateDeviceCertificateResponse
   */
  async inactivateDeviceCertificate(request: InactivateDeviceCertificateRequest): Promise<InactivateDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inactivateDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Queries all certificate authority (CA) certificates that are registered with an ApsaraMQ for MQTT instance. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCaCertificateResponse
   */
  async listCaCertificateWithOptions(request: ListCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<ListCaCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCaCertificateResponse>(await this.callApi(params, req, runtime), new ListCaCertificateResponse({}));
    } else {
      return $dara.cast<ListCaCertificateResponse>(await this.execute(params, req, runtime), new ListCaCertificateResponse({}));
    }

  }

  /**
   * Queries all certificate authority (CA) certificates that are registered with an ApsaraMQ for MQTT instance. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListCaCertificateRequest
   * @returns ListCaCertificateResponse
   */
  async listCaCertificate(request: ListCaCertificateRequest): Promise<ListCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCaCertificateWithOptions(request, runtime);
  }

  /**
   * Queries all device certificates that are registered with an ApsaraMQ for MQTT instance. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCertificateResponse
   */
  async listDeviceCertificateWithOptions(request: ListDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<ListDeviceCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeviceCertificateResponse>(await this.callApi(params, req, runtime), new ListDeviceCertificateResponse({}));
    } else {
      return $dara.cast<ListDeviceCertificateResponse>(await this.execute(params, req, runtime), new ListDeviceCertificateResponse({}));
    }

  }

  /**
   * Queries all device certificates that are registered with an ApsaraMQ for MQTT instance. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListDeviceCertificateRequest
   * @returns ListDeviceCertificateResponse
   */
  async listDeviceCertificate(request: ListDeviceCertificateRequest): Promise<ListDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Queries all device certificates that are issued by a certificate authority (CA) certificate and registered with ApsaraMQ for MQTT brokers. Device certificates are digital certificates issued to clients by CA root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListDeviceCertificateByCaSnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCertificateByCaSnResponse
   */
  async listDeviceCertificateByCaSnWithOptions(request: ListDeviceCertificateByCaSnRequest, runtime: $dara.RuntimeOptions): Promise<ListDeviceCertificateByCaSnResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceCertificateByCaSn",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeviceCertificateByCaSnResponse>(await this.callApi(params, req, runtime), new ListDeviceCertificateByCaSnResponse({}));
    } else {
      return $dara.cast<ListDeviceCertificateByCaSnResponse>(await this.execute(params, req, runtime), new ListDeviceCertificateByCaSnResponse({}));
    }

  }

  /**
   * Queries all device certificates that are issued by a certificate authority (CA) certificate and registered with ApsaraMQ for MQTT brokers. Device certificates are digital certificates issued to clients by CA root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListDeviceCertificateByCaSnRequest
   * @returns ListDeviceCertificateByCaSnResponse
   */
  async listDeviceCertificateByCaSn(request: ListDeviceCertificateByCaSnRequest): Promise<ListDeviceCertificateByCaSnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceCertificateByCaSnWithOptions(request, runtime);
  }

  /**
   * Queries clients that have applied for access credentials in unique-certificate-per-device authentication mode in an ApsaraMQ for MQTT instance.
   * 
   * @param request - ListDeviceCredentialClientIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCredentialClientIdResponse
   */
  async listDeviceCredentialClientIdWithOptions(request: ListDeviceCredentialClientIdRequest, runtime: $dara.RuntimeOptions): Promise<ListDeviceCredentialClientIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceCredentialClientId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDeviceCredentialClientIdResponse>(await this.callApi(params, req, runtime), new ListDeviceCredentialClientIdResponse({}));
    } else {
      return $dara.cast<ListDeviceCredentialClientIdResponse>(await this.execute(params, req, runtime), new ListDeviceCredentialClientIdResponse({}));
    }

  }

  /**
   * Queries clients that have applied for access credentials in unique-certificate-per-device authentication mode in an ApsaraMQ for MQTT instance.
   * 
   * @param request - ListDeviceCredentialClientIdRequest
   * @returns ListDeviceCredentialClientIdResponse
   */
  async listDeviceCredentialClientId(request: ListDeviceCredentialClientIdRequest): Promise<ListDeviceCredentialClientIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceCredentialClientIdWithOptions(request, runtime);
  }

  /**
   * Queries all groups on an ApsaraMQ for MQTT instance.
   * 
   * @remarks
   * Each successful call to the **ListGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ListGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupIdResponse
   */
  async listGroupIdWithOptions(request: ListGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<ListGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGroupIdResponse>(await this.callApi(params, req, runtime), new ListGroupIdResponse({}));
    } else {
      return $dara.cast<ListGroupIdResponse>(await this.execute(params, req, runtime), new ListGroupIdResponse({}));
    }

  }

  /**
   * Queries all groups on an ApsaraMQ for MQTT instance.
   * 
   * @remarks
   * Each successful call to the **ListGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ListGroupIdRequest
   * @returns ListGroupIdResponse
   */
  async listGroupId(request: ListGroupIdRequest): Promise<ListGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupIdWithOptions(request, runtime);
  }

  /**
   * 查询标签
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * 查询标签
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a client ID in a connection blacklist.
   * 
   * @param request - QueryCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthConnectBlackResponse
   */
  async queryCustomAuthConnectBlackWithOptions(request: QueryCustomAuthConnectBlackRequest, runtime: $dara.RuntimeOptions): Promise<QueryCustomAuthConnectBlackResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new QueryCustomAuthConnectBlackResponse({}));
    } else {
      return $dara.cast<QueryCustomAuthConnectBlackResponse>(await this.execute(params, req, runtime), new QueryCustomAuthConnectBlackResponse({}));
    }

  }

  /**
   * Queries a client ID in a connection blacklist.
   * 
   * @param request - QueryCustomAuthConnectBlackRequest
   * @returns QueryCustomAuthConnectBlackResponse
   */
  async queryCustomAuthConnectBlack(request: QueryCustomAuthConnectBlackRequest): Promise<QueryCustomAuthConnectBlackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Queries the information about custom identity authentication.
   * 
   * @param request - QueryCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthIdentityResponse
   */
  async queryCustomAuthIdentityWithOptions(request: QueryCustomAuthIdentityRequest, runtime: $dara.RuntimeOptions): Promise<QueryCustomAuthIdentityResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new QueryCustomAuthIdentityResponse({}));
    } else {
      return $dara.cast<QueryCustomAuthIdentityResponse>(await this.execute(params, req, runtime), new QueryCustomAuthIdentityResponse({}));
    }

  }

  /**
   * Queries the information about custom identity authentication.
   * 
   * @param request - QueryCustomAuthIdentityRequest
   * @returns QueryCustomAuthIdentityResponse
   */
  async queryCustomAuthIdentity(request: QueryCustomAuthIdentityRequest): Promise<QueryCustomAuthIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Queries the authorization information about a topic.
   * 
   * @param request - QueryCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthPermissionResponse
   */
  async queryCustomAuthPermissionWithOptions(request: QueryCustomAuthPermissionRequest, runtime: $dara.RuntimeOptions): Promise<QueryCustomAuthPermissionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new QueryCustomAuthPermissionResponse({}));
    } else {
      return $dara.cast<QueryCustomAuthPermissionResponse>(await this.execute(params, req, runtime), new QueryCustomAuthPermissionResponse({}));
    }

  }

  /**
   * Queries the authorization information about a topic.
   * 
   * @param request - QueryCustomAuthPermissionRequest
   * @returns QueryCustomAuthPermissionResponse
   */
  async queryCustomAuthPermission(request: QueryCustomAuthPermissionRequest): Promise<QueryCustomAuthPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * Queries the trace of a device that corresponds to an ApsaraMQ for MQTT client by page. When the status of a device is abnormal, you can call this operation to query the connection history of the device. This helps you efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceDevice** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceDeviceResponse
   */
  async queryMqttTraceDeviceWithOptions(request: QueryMqttTraceDeviceRequest, runtime: $dara.RuntimeOptions): Promise<QueryMqttTraceDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMqttTraceDevice",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryMqttTraceDeviceResponse>(await this.callApi(params, req, runtime), new QueryMqttTraceDeviceResponse({}));
    } else {
      return $dara.cast<QueryMqttTraceDeviceResponse>(await this.execute(params, req, runtime), new QueryMqttTraceDeviceResponse({}));
    }

  }

  /**
   * Queries the trace of a device that corresponds to an ApsaraMQ for MQTT client by page. When the status of a device is abnormal, you can call this operation to query the connection history of the device. This helps you efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceDevice** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceDeviceRequest
   * @returns QueryMqttTraceDeviceResponse
   */
  async queryMqttTraceDevice(request: QueryMqttTraceDeviceRequest): Promise<QueryMqttTraceDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMqttTraceDeviceWithOptions(request, runtime);
  }

  /**
   * Queries messages on a device within a specific period of time. If a message is not sent or received as expected, you can call this operation to query the messaging status of the message to efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageOfClient** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageOfClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessageOfClientResponse
   */
  async queryMqttTraceMessageOfClientWithOptions(request: QueryMqttTraceMessageOfClientRequest, runtime: $dara.RuntimeOptions): Promise<QueryMqttTraceMessageOfClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMqttTraceMessageOfClient",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryMqttTraceMessageOfClientResponse>(await this.callApi(params, req, runtime), new QueryMqttTraceMessageOfClientResponse({}));
    } else {
      return $dara.cast<QueryMqttTraceMessageOfClientResponse>(await this.execute(params, req, runtime), new QueryMqttTraceMessageOfClientResponse({}));
    }

  }

  /**
   * Queries messages on a device within a specific period of time. If a message is not sent or received as expected, you can call this operation to query the messaging status of the message to efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageOfClient** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageOfClientRequest
   * @returns QueryMqttTraceMessageOfClientResponse
   */
  async queryMqttTraceMessageOfClient(request: QueryMqttTraceMessageOfClientRequest): Promise<QueryMqttTraceMessageOfClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMqttTraceMessageOfClientWithOptions(request, runtime);
  }

  /**
   * Queries the trace of a message. If a message is not sent or received as expected, you can call this operation to view the message details to troubleshoot the issue. For example, you can query the time when the message is published and the client that publishes the message.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessagePublish** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessagePublishRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessagePublishResponse
   */
  async queryMqttTraceMessagePublishWithOptions(request: QueryMqttTraceMessagePublishRequest, runtime: $dara.RuntimeOptions): Promise<QueryMqttTraceMessagePublishResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMqttTraceMessagePublish",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryMqttTraceMessagePublishResponse>(await this.callApi(params, req, runtime), new QueryMqttTraceMessagePublishResponse({}));
    } else {
      return $dara.cast<QueryMqttTraceMessagePublishResponse>(await this.execute(params, req, runtime), new QueryMqttTraceMessagePublishResponse({}));
    }

  }

  /**
   * Queries the trace of a message. If a message is not sent or received as expected, you can call this operation to view the message details to troubleshoot the issue. For example, you can query the time when the message is published and the client that publishes the message.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessagePublish** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessagePublishRequest
   * @returns QueryMqttTraceMessagePublishResponse
   */
  async queryMqttTraceMessagePublish(request: QueryMqttTraceMessagePublishRequest): Promise<QueryMqttTraceMessagePublishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMqttTraceMessagePublishWithOptions(request, runtime);
  }

  /**
   * Queries the delivery trace of a message. If a message is not sent or received as expected, you can call this operation to view the details about the message. For example, you can query the clients that subscribe to the message and the time when the message is delivered. This operation helps you locate the problem and identify the cause of the problem.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageSubscribe** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessageSubscribeResponse
   */
  async queryMqttTraceMessageSubscribeWithOptions(request: QueryMqttTraceMessageSubscribeRequest, runtime: $dara.RuntimeOptions): Promise<QueryMqttTraceMessageSubscribeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMqttTraceMessageSubscribe",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryMqttTraceMessageSubscribeResponse>(await this.callApi(params, req, runtime), new QueryMqttTraceMessageSubscribeResponse({}));
    } else {
      return $dara.cast<QueryMqttTraceMessageSubscribeResponse>(await this.execute(params, req, runtime), new QueryMqttTraceMessageSubscribeResponse({}));
    }

  }

  /**
   * Queries the delivery trace of a message. If a message is not sent or received as expected, you can call this operation to view the details about the message. For example, you can query the clients that subscribe to the message and the time when the message is delivered. This operation helps you locate the problem and identify the cause of the problem.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageSubscribe** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageSubscribeRequest
   * @returns QueryMqttTraceMessageSubscribeResponse
   */
  async queryMqttTraceMessageSubscribe(request: QueryMqttTraceMessageSubscribeRequest): Promise<QueryMqttTraceMessageSubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMqttTraceMessageSubscribeWithOptions(request, runtime);
  }

  /**
   * Queries the running status of an ApsaraMQ for MQTT client. You can troubleshoot issues based on the queried results. You can enter the ID of an ApsaraMQ for MQTT client to check the connection status and IP address of the device.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second.**** For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **QuerySessionByClientId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QuerySessionByClientIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionByClientIdResponse
   */
  async querySessionByClientIdWithOptions(request: QuerySessionByClientIdRequest, runtime: $dara.RuntimeOptions): Promise<QuerySessionByClientIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySessionByClientId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QuerySessionByClientIdResponse>(await this.callApi(params, req, runtime), new QuerySessionByClientIdResponse({}));
    } else {
      return $dara.cast<QuerySessionByClientIdResponse>(await this.execute(params, req, runtime), new QuerySessionByClientIdResponse({}));
    }

  }

  /**
   * Queries the running status of an ApsaraMQ for MQTT client. You can troubleshoot issues based on the queried results. You can enter the ID of an ApsaraMQ for MQTT client to check the connection status and IP address of the device.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second.**** For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **QuerySessionByClientId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QuerySessionByClientIdRequest
   * @returns QuerySessionByClientIdResponse
   */
  async querySessionByClientId(request: QuerySessionByClientIdRequest): Promise<QuerySessionByClientIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySessionByClientIdWithOptions(request, runtime);
  }

  /**
   * Queries the status of a token. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker. A token is a temporary credential and is valid only within a specific period of time. You can call this operation to query whether a token expires.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **QueryToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QueryTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTokenResponse
   */
  async queryTokenWithOptions(request: QueryTokenRequest, runtime: $dara.RuntimeOptions): Promise<QueryTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryTokenResponse>(await this.callApi(params, req, runtime), new QueryTokenResponse({}));
    } else {
      return $dara.cast<QueryTokenResponse>(await this.execute(params, req, runtime), new QueryTokenResponse({}));
    }

  }

  /**
   * Queries the status of a token. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker. A token is a temporary credential and is valid only within a specific period of time. You can call this operation to query whether a token expires.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **QueryToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QueryTokenRequest
   * @returns QueryTokenResponse
   */
  async queryToken(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTokenWithOptions(request, runtime);
  }

  /**
   * Updates the access credential of a device.
   * 
   * @remarks
   * ## [](#)Limits
   * You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * >  Each successful call to the **RefreshDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RefreshDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDeviceCredentialResponse
   */
  async refreshDeviceCredentialWithOptions(request: RefreshDeviceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<RefreshDeviceCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RefreshDeviceCredentialResponse>(await this.callApi(params, req, runtime), new RefreshDeviceCredentialResponse({}));
    } else {
      return $dara.cast<RefreshDeviceCredentialResponse>(await this.execute(params, req, runtime), new RefreshDeviceCredentialResponse({}));
    }

  }

  /**
   * Updates the access credential of a device.
   * 
   * @remarks
   * ## [](#)Limits
   * You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * >  Each successful call to the **RefreshDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RefreshDeviceCredentialRequest
   * @returns RefreshDeviceCredentialResponse
   */
  async refreshDeviceCredential(request: RefreshDeviceCredentialRequest): Promise<RefreshDeviceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * RegisterCaCertificate
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - RegisterCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterCaCertificateResponse
   */
  async registerCaCertificateWithOptions(request: RegisterCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<RegisterCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caContent)) {
      query["CaContent"] = request.caContent;
    }

    if (!$dara.isNull(request.caName)) {
      query["CaName"] = request.caName;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.verificationContent)) {
      query["VerificationContent"] = request.verificationContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RegisterCaCertificateResponse>(await this.callApi(params, req, runtime), new RegisterCaCertificateResponse({}));
    } else {
      return $dara.cast<RegisterCaCertificateResponse>(await this.execute(params, req, runtime), new RegisterCaCertificateResponse({}));
    }

  }

  /**
   * RegisterCaCertificate
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - RegisterCaCertificateRequest
   * @returns RegisterCaCertificateResponse
   */
  async registerCaCertificate(request: RegisterCaCertificateRequest): Promise<RegisterCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerCaCertificateWithOptions(request, runtime);
  }

  /**
   * Registers an access credential for a device. In unique-certificate-per-device authentication mode, an application server applies a unique access credential for each device from the corresponding ApsaraMQ for MQTT broker. The access credential of a device consists of the client ID, AccessKey ID, and AccessKey secret of the device. When you connect a device to ApsaraMQ for MQTT, you must configure Username and Password based on the access credential of the device for authentication. You can activate the device and transfer data between the device and ApsaraMQ for MQTT only after the authentication is passed.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **RegisterDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RegisterDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDeviceCredentialResponse
   */
  async registerDeviceCredentialWithOptions(request: RegisterDeviceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<RegisterDeviceCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RegisterDeviceCredentialResponse>(await this.callApi(params, req, runtime), new RegisterDeviceCredentialResponse({}));
    } else {
      return $dara.cast<RegisterDeviceCredentialResponse>(await this.execute(params, req, runtime), new RegisterDeviceCredentialResponse({}));
    }

  }

  /**
   * Registers an access credential for a device. In unique-certificate-per-device authentication mode, an application server applies a unique access credential for each device from the corresponding ApsaraMQ for MQTT broker. The access credential of a device consists of the client ID, AccessKey ID, and AccessKey secret of the device. When you connect a device to ApsaraMQ for MQTT, you must configure Username and Password based on the access credential of the device for authentication. You can activate the device and transfer data between the device and ApsaraMQ for MQTT only after the authentication is passed.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **RegisterDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RegisterDeviceCredentialRequest
   * @returns RegisterDeviceCredentialResponse
   */
  async registerDeviceCredential(request: RegisterDeviceCredentialRequest): Promise<RegisterDeviceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * Revokes a token.
   * 
   * @remarks
   *   You can call this operation up to 5 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **RevokeToken** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RevokeTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeTokenResponse
   */
  async revokeTokenWithOptions(request: RevokeTokenRequest, runtime: $dara.RuntimeOptions): Promise<RevokeTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RevokeTokenResponse>(await this.callApi(params, req, runtime), new RevokeTokenResponse({}));
    } else {
      return $dara.cast<RevokeTokenResponse>(await this.execute(params, req, runtime), new RevokeTokenResponse({}));
    }

  }

  /**
   * Revokes a token.
   * 
   * @remarks
   *   You can call this operation up to 5 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **RevokeToken** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RevokeTokenRequest
   * @returns RevokeTokenResponse
   */
  async revokeToken(request: RevokeTokenRequest): Promise<RevokeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeTokenWithOptions(request, runtime);
  }

  /**
   * Sends a single message from an application on a cloud server to ApsaraMQ for MQTT.
   * 
   * @remarks
   *   The **SendMessage** operation is called by an application on a cloud server. This operation is complementary to the operation that is called to send a message from an ApsaraMQ for MQTT client. For information about the differences between the scenarios of sending messages from applications on cloud servers and the scenarios of sending messages from ApsaraMQ for MQTT clients, see [Developer guide](https://help.aliyun.com/document_detail/179160.html).
   * *   Messages that are sent by calling the **SendMessage** operation cannot be forwarded to ApsaraMQ for RocketMQ. If you want to use an ApsaraMQ for MQTT broker to forward messages to ApsaraMQ for RocketMQ, use [an SDK to send the messages](https://help.aliyun.com/document_detail/174527.html). The **SendMessage** operation supports up to 1,000 queries per second (QPS). For more information, see [QPS limits](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **SendMessage** operation is calculated as a message transaction per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - SendMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
   */
  async sendMessageWithOptions(request: SendMessageRequest, runtime: $dara.RuntimeOptions): Promise<SendMessageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqttTopic)) {
      query["MqttTopic"] = request.mqttTopic;
    }

    if (!$dara.isNull(request.payload)) {
      query["Payload"] = request.payload;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessage",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
    } else {
      return $dara.cast<SendMessageResponse>(await this.execute(params, req, runtime), new SendMessageResponse({}));
    }

  }

  /**
   * Sends a single message from an application on a cloud server to ApsaraMQ for MQTT.
   * 
   * @remarks
   *   The **SendMessage** operation is called by an application on a cloud server. This operation is complementary to the operation that is called to send a message from an ApsaraMQ for MQTT client. For information about the differences between the scenarios of sending messages from applications on cloud servers and the scenarios of sending messages from ApsaraMQ for MQTT clients, see [Developer guide](https://help.aliyun.com/document_detail/179160.html).
   * *   Messages that are sent by calling the **SendMessage** operation cannot be forwarded to ApsaraMQ for RocketMQ. If you want to use an ApsaraMQ for MQTT broker to forward messages to ApsaraMQ for RocketMQ, use [an SDK to send the messages](https://help.aliyun.com/document_detail/174527.html). The **SendMessage** operation supports up to 1,000 queries per second (QPS). For more information, see [QPS limits](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **SendMessage** operation is calculated as a message transaction per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - SendMessageRequest
   * @returns SendMessageResponse
   */
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  /**
   * Configures a multi-domain certificate.
   * 
   * @param request - SetSniConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSniConfigResponse
   */
  async setSniConfigWithOptions(request: SetSniConfigRequest, runtime: $dara.RuntimeOptions): Promise<SetSniConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultCertificate)) {
      query["DefaultCertificate"] = request.defaultCertificate;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.sniConfig)) {
      query["SniConfig"] = request.sniConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSniConfig",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetSniConfigResponse>(await this.callApi(params, req, runtime), new SetSniConfigResponse({}));
    } else {
      return $dara.cast<SetSniConfigResponse>(await this.execute(params, req, runtime), new SetSniConfigResponse({}));
    }

  }

  /**
   * Configures a multi-domain certificate.
   * 
   * @param request - SetSniConfigRequest
   * @returns SetSniConfigResponse
   */
  async setSniConfig(request: SetSniConfigRequest): Promise<SetSniConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSniConfigWithOptions(request, runtime);
  }

  /**
   * 新增tag
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * 新增tag
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Deregisters the access credential of a device. After the access credential of a device is deregistered, you can no longer use the access credential to authenticate the device on the ApsaraMQ for MQTT broker.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **UnRegisterDeviceCredential** operation increases the number of transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - UnRegisterDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnRegisterDeviceCredentialResponse
   */
  async unRegisterDeviceCredentialWithOptions(request: UnRegisterDeviceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<UnRegisterDeviceCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnRegisterDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnRegisterDeviceCredentialResponse>(await this.callApi(params, req, runtime), new UnRegisterDeviceCredentialResponse({}));
    } else {
      return $dara.cast<UnRegisterDeviceCredentialResponse>(await this.execute(params, req, runtime), new UnRegisterDeviceCredentialResponse({}));
    }

  }

  /**
   * Deregisters the access credential of a device. After the access credential of a device is deregistered, you can no longer use the access credential to authenticate the device on the ApsaraMQ for MQTT broker.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **UnRegisterDeviceCredential** operation increases the number of transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - UnRegisterDeviceCredentialRequest
   * @returns UnRegisterDeviceCredentialResponse
   */
  async unRegisterDeviceCredential(request: UnRegisterDeviceCredentialRequest): Promise<UnRegisterDeviceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unRegisterDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * 删除标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * 删除标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the information about custom identity authentication.
   * 
   * @param request - UpdateCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAuthIdentityResponse
   */
  async updateCustomAuthIdentityWithOptions(request: UpdateCustomAuthIdentityRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCustomAuthIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!$dara.isNull(request.signMode)) {
      body["SignMode"] = request.signMode;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new UpdateCustomAuthIdentityResponse({}));
    } else {
      return $dara.cast<UpdateCustomAuthIdentityResponse>(await this.execute(params, req, runtime), new UpdateCustomAuthIdentityResponse({}));
    }

  }

  /**
   * Updates the information about custom identity authentication.
   * 
   * @param request - UpdateCustomAuthIdentityRequest
   * @returns UpdateCustomAuthIdentityResponse
   */
  async updateCustomAuthIdentity(request: UpdateCustomAuthIdentityRequest): Promise<UpdateCustomAuthIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Updates the permissions on a topic.
   * 
   * @param request - UpdateCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAuthPermissionResponse
   */
  async updateCustomAuthPermissionWithOptions(request: UpdateCustomAuthPermissionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCustomAuthPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.effect)) {
      body["Effect"] = request.effect;
    }

    if (!$dara.isNull(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.permitAction)) {
      body["PermitAction"] = request.permitAction;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new UpdateCustomAuthPermissionResponse({}));
    } else {
      return $dara.cast<UpdateCustomAuthPermissionResponse>(await this.execute(params, req, runtime), new UpdateCustomAuthPermissionResponse({}));
    }

  }

  /**
   * Updates the permissions on a topic.
   * 
   * @param request - UpdateCustomAuthPermissionRequest
   * @returns UpdateCustomAuthPermissionResponse
   */
  async updateCustomAuthPermission(request: UpdateCustomAuthPermissionRequest): Promise<UpdateCustomAuthPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomAuthPermissionWithOptions(request, runtime);
  }

}
