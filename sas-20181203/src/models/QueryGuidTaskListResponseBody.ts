// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGuidTaskListResponseBodyGuideTaskConfigListRewardData extends $dara.Model {
  /**
   * @remarks
   * The claim status. Valid values:
   * - **1**: Not claimed.
   * - **2**: Claimed.
   * 
   * @example
   * 1
   */
  isRewardTaked?: string;
  /**
   * @remarks
   * The reward name. Valid values:
   * - **addTrialDay**: trial days reward
   * - **addAntiRansomwareCapacity**: anti-ransomware capacity reward
   * - **addImageScanAuthCount**: image scan authorization quota reward
   * - **addWebLockAuthCount**: web tamper-proofing authorization quota reward
   * - **addSlsCapacity**: log analysis storage capacity reward.
   * 
   * @example
   * addAntiRansomwareCapacity
   */
  reward?: string;
  /**
   * @remarks
   * The reward configuration information. This parameter is in JSON format.
   * > The key in the JSON object indicates the reward content, and the value indicates the reward amount. Valid values of the key:
   * - **webLockAuthCount**: the web tamper-proofing authorization quota
   * - **ransomwareCapacity**: the anti-ransomware capacity, in GB
   * - **slsCapacity**: the log analysis capacity, in GB
   * - **days**: the number of usage days
   * - **imageScanAuthCount**: the image scan authorization quota
   * - **honeypotAuthCount**: the cloud honeypot authorization quota.
   * 
   * @example
   * {"days":60,"ransomwareCapacity":10}
   */
  rewardConfig?: string;
  static names(): { [key: string]: string } {
    return {
      isRewardTaked: 'IsRewardTaked',
      reward: 'Reward',
      rewardConfig: 'RewardConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isRewardTaked: 'string',
      reward: 'string',
      rewardConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuidTaskListResponseBodyGuideTaskConfigList extends $dara.Model {
  /**
   * @remarks
   * The reward information for task completion.
   */
  rewardData?: QueryGuidTaskListResponseBodyGuideTaskConfigListRewardData;
  /**
   * @remarks
   * The security score increase that can be gained by completing this task.
   * 
   * @example
   * 80
   */
  securityScore?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - **0**: Closed.
   * - **1**: In progress.
   * - **2**: Completed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-000d8slfgx4p40kb64ad
   */
  taskId?: number;
  /**
   * @remarks
   * The node name. Valid values:
   * 
   * - **guid_task_security_score_promote_video**: the node of watching the beginner quick start video
   * - **guide_sub_task_config_defence_hbr**: the anti-ransomware configuration node for servers
   * - **guide_sub_task_config_uni_defence_hbr**: the anti-ransomware configuration node for databases
   * - **guid_task_log_analysis_config**: the log analysis node
   * - **guide_sub_task_web_lock_config**: the web tamper-proofing node
   * - **guide_sub_task_config_anti_crack**: the anti-brute-force attacks node
   * - **guid_task_container_security_video**: the container security video node
   * - **guid_task_container_image_scan_config**: the container image scan node
   * - **guid_task_k8s_log_analysis_config**: the Kubernetes threat detection node
   * - **guid_task_container_network**: the container visualization node
   * - **guide_sub_task_config_add_collection**: the node of adding the console to favorites
   * - **guide_sub_task_vul_scan**: the vulnerability scanning node
   * - **guide_sub_task_virusKill**: the virus scan node.
   * 
   * @example
   * guide_sub_task_config_add_collection
   */
  taskTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      rewardData: 'RewardData',
      securityScore: 'SecurityScore',
      status: 'Status',
      taskId: 'TaskId',
      taskTypeName: 'TaskTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rewardData: QueryGuidTaskListResponseBodyGuideTaskConfigListRewardData,
      securityScore: 'number',
      status: 'number',
      taskId: 'number',
      taskTypeName: 'string',
    };
  }

  validate() {
    if(this.rewardData && typeof (this.rewardData as any).validate === 'function') {
      (this.rewardData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuidTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of beginner task information.
   */
  guideTaskConfigList?: QueryGuidTaskListResponseBodyGuideTaskConfigList[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      guideTaskConfigList: 'GuideTaskConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guideTaskConfigList: { 'type': 'array', 'itemType': QueryGuidTaskListResponseBodyGuideTaskConfigList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.guideTaskConfigList)) {
      $dara.Model.validateArray(this.guideTaskConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

