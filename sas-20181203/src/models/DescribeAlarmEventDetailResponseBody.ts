// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmEventDetailResponseBodyDataCauseDetailsValue extends $dara.Model {
  /**
   * @remarks
   * The name of the tracing information field.
   * 
   * @example
   * sshd
   */
  name?: string;
  /**
   * @remarks
   * The display type of the tracing information field. Valid values:
   * - **text**: plain text.
   * - **html**: rich text.
   * 
   * @example
   * html
   */
  type?: string;
  /**
   * @remarks
   * The value of the tracing information field.
   * 
   * @example
   * <p>under a certain small probability, yundun may mistakenly judge the repeated attempts caused by the administrator forgetting or entering the wrong password as successful blasting. Please check according to the account number and time shown in the alarm details. Once it is confirmed that it is not the initiative of the administrator, it is recommended to immediately block the IP, and you can open it at the same time<a href="https://yundun.console.aliyun.com/?p=pam">PAM</a>, hosting host login password, improving remote connection efficiency and security control ability, and according to<a href="https://click.aliyun.com/m/1000226086/">best practice of ECS account security protection</a>Modify login password and convergence asset.</p>↵
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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

export class DescribeAlarmEventDetailResponseBodyDataCauseDetails extends $dara.Model {
  /**
   * @remarks
   * The key of the alert event tracing information.
   * 
   * @example
   * 842e314e69b1a2c45d5c1a2f88a16***
   */
  key?: string;
  /**
   * @remarks
   * The value of the alert event tracing information.
   */
  value?: DescribeAlarmEventDetailResponseBodyDataCauseDetailsValue[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': DescribeAlarmEventDetailResponseBodyDataCauseDetailsValue },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * Login with unusual location
   */
  alarmEventAliasName?: string;
  /**
   * @remarks
   * The description of the alert event.
   * 
   * @example
   * The detection model finds that self-mutation is running on your server. A self-mutation Trojan is a Trojan horse program with self-mutation function. It will change its hash or copy a large number of itself to different paths, and run in the background to avoid cleaning.
   */
  alarmEventDesc?: string;
  /**
   * @remarks
   * The unique identifier of the alert event.
   * 
   * > To query the details of an alert event, you must provide the unique identifier of the alert event. You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain this identifier.
   * 
   * @example
   * 9f62555666f177aa84ee1eaf465a****
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The name of the container application.
   * 
   * @example
   * app:msdp-uat-service
   */
  appName?: string;
  /**
   * @remarks
   * Indicates whether the alert can be handled online. Valid values:  
   * 
   * - **true**: The alert can be unmarked as a false positive.
   * 
   * - **false**: The alert cannot be unmarked as a false positive.
   * 
   * @example
   * false
   */
  canBeDealOnLine?: boolean;
  /**
   * @remarks
   * Indicates whether the alert can be canceled. Valid values:  
   * 
   * - **true**: The alert can be unmarked as a false positive.
   * 
   * - **false**: The alert cannot be unmarked as a false positive.
   * 
   * @example
   * false
   */
  canCancelFault?: boolean;
  /**
   * @remarks
   * The cause of the alert event (tracing information).
   */
  causeDetails?: DescribeAlarmEventDetailResponseBodyDataCauseDetails[];
  /**
   * @remarks
   * Indicates whether the important activity protection mode is enabled.
   * 
   * @example
   * true
   */
  containHwMode?: boolean;
  /**
   * @remarks
   * The ID of the container application.
   * 
   * @example
   * container_1606995441910_394868_01_000***
   */
  containerId?: string;
  /**
   * @remarks
   * The ID of the container image.
   * 
   * @example
   * cadb7a725641
   */
  containerImageId?: string;
  /**
   * @remarks
   * The name of the container image.
   * 
   * @example
   * jenkins/jenkins:latest
   */
  containerImageName?: string;
  /**
   * @remarks
   * The data source of the alert event.
   * 
   * @example
   * aegis_***
   */
  dataSource?: string;
  /**
   * @remarks
   * The timestamp when the alert event ended, in milliseconds.
   * 
   * @example
   * 1542366542000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * i-wz92q7m5hsbgfhdss***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the associated instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the associated instance.
   * 
   * @example
   * 172.25.30.**
   */
  intranetIp?: string;
  /**
   * @remarks
   * The ID of the Kubernetes cluster.
   * 
   * @example
   * c562cf0d68e9749ee9fe544a7ab2f****
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * The name of the Kubernetes cluster.
   * 
   * @example
   * TestK8sCluser
   */
  k8sClusterName?: string;
  /**
   * @remarks
   * The Kubernetes namespace.
   * 
   * @example
   * sit-saic-trip
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The ID of the Kubernetes node.
   * 
   * @example
   * i-bp14a1ay8e0aa9t0l***
   */
  k8sNodeId?: string;
  /**
   * @remarks
   * The name of the Kubernetes node.
   * 
   * @example
   * cn-hangzhou.10.188.139.**
   */
  k8sNodeName?: string;
  /**
   * @remarks
   * The name of the Kubernetes pod.
   * 
   * @example
   * myapp-pod
   */
  k8sPodName?: string;
  /**
   * @remarks
   * The severity level of the alert event. Valid values:
   * - **serious**: Critical.
   * - **suspicious**: Suspicious.
   * - **remind**: Reminder.
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The solution for the alert event.
   * 
   * @example
   * An invalid logon source IP has been detected. If you recognize this logon attempt, we recommend that you add the current logon source IP to the valid logon source IP list to avoid future alerts. If you do not recognize this logon attempt, we recommend that you modify the password.
   */
  solution?: string;
  /**
   * @remarks
   * The timestamp when the alert event started, in milliseconds.
   * 
   * @example
   * 1542378601000
   */
  startTime?: number;
  /**
   * @remarks
   * The alerting type. Valid values:
   * <props="china">
   * - Suspicious Process
   * - Web shell
   * - Unusual Logon
   * - Unusual Event
   * - Sensitive File Tampering
   * - Malicious Process (Cloud Scan)
   * - Suspicious Network Connectivity
   * - Other
   * - Suspicious Account
   * - Application Intrusion Event
   * - Cloud Product Threat Detection
   * - Precision Defense
   * - Application Whitelist
   * - Persistence Backdoor
   * - Web Application Threat Detection
   * - Malicious Scripts
   * - Threat Intelligence
   * - Malicious Network Behavior
   * - Container Cluster Exception
   * - Web shell (Local Scan)
   * - Vulnerability Exploits
   * - Malicious Process (Local Scan)
   * - Trusted Exception
   * 
   * <props="intl">
   * - Suspicious Process
   * - Webshell
   * - Unusual Logon
   * - Malicious Software
   * - Sensitive File Tampering
   * - Unusual Network Connection
   * - Other
   * - Suspicious Account
   * - Cloud threat detection
   * - Precision defense
   * - Application Whitelist
   * - Persistence
   * - Web Application Threat Detection
   * - Malicious scripts
   * - Malicious Network Activity
   * - K8s Abnormal Behavior
   * - Website backdoor (local engine)
   * - Exploit
   * - Image Scan
   * - Trusted exception
   * 
   * @example
   * Webshell
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the asset instance.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventAliasName: 'AlarmEventAliasName',
      alarmEventDesc: 'AlarmEventDesc',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      appName: 'AppName',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      causeDetails: 'CauseDetails',
      containHwMode: 'ContainHwMode',
      containerId: 'ContainerId',
      containerImageId: 'ContainerImageId',
      containerImageName: 'ContainerImageName',
      dataSource: 'DataSource',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      k8sClusterId: 'K8sClusterId',
      k8sClusterName: 'K8sClusterName',
      k8sNamespace: 'K8sNamespace',
      k8sNodeId: 'K8sNodeId',
      k8sNodeName: 'K8sNodeName',
      k8sPodName: 'K8sPodName',
      level: 'Level',
      solution: 'Solution',
      startTime: 'StartTime',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventAliasName: 'string',
      alarmEventDesc: 'string',
      alarmUniqueInfo: 'string',
      appName: 'string',
      canBeDealOnLine: 'boolean',
      canCancelFault: 'boolean',
      causeDetails: { 'type': 'array', 'itemType': DescribeAlarmEventDetailResponseBodyDataCauseDetails },
      containHwMode: 'boolean',
      containerId: 'string',
      containerImageId: 'string',
      containerImageName: 'string',
      dataSource: 'string',
      endTime: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      k8sClusterId: 'string',
      k8sClusterName: 'string',
      k8sNamespace: 'string',
      k8sNodeId: 'string',
      k8sNodeName: 'string',
      k8sPodName: 'string',
      level: 'string',
      solution: 'string',
      startTime: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.causeDetails)) {
      $dara.Model.validateArray(this.causeDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the alert event.
   */
  data?: DescribeAlarmEventDetailResponseBodyData;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 7EA50837-2F0B-5BCC-AB61-4968D88D75AD
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
      data: DescribeAlarmEventDetailResponseBodyData,
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

