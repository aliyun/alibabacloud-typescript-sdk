// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGuidTaskListResponseBodyGuideTaskConfigListRewardData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the reward is claimed. Valid values:
   * 
   * *   **1**: no.
   * *   **2**: yes.
   * 
   * @example
   * 1
   */
  isRewardTaked?: string;
  /**
   * @remarks
   * The name of the reward. Valid values:
   * 
   * *   **addTrialDay**: the days of trial use.
   * *   **addAntiRansomwareCapacity**: the anti-ransomware capacity.
   * *   **addImageScanAuthCount**: the quota for container image scan.
   * *   **addWebLockAuthCount**: the quota for web tamper proofing.
   * *   **addSlsCapacity**: the log storage capacity.
   * 
   * @example
   * addWebLockAuthCount
   */
  reward?: string;
  /**
   * @remarks
   * The reward configuration. The value of this parameter is in the JSON format.
   * 
   * >  The key indicates the reward type, and the value indicates the number of rewards. Valid values of key:
   * 
   * *   **webLockAuthCount**: the quota for web tamper proofing.
   * *   **webLockAuthCount**: the anti-ransomware capacity. Unit: GB.
   * *   **slsCapacity**: the log storage capacity. Unit: GB.
   * *   **days**: the days of trial use.
   * *   **imageScanAuthCount**: the quota for container image scan.
   * *   **honeypotAuthCount**: the quota for cloud honeypot.
   * 
   * @example
   * {"days":60,"ransomwareCapacity":100}
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
   * The information about the reward for a complete task.
   */
  rewardData?: QueryGuidTaskListResponseBodyGuideTaskConfigListRewardData;
  /**
   * @remarks
   * The security score that is increased after you complete the task.
   * 
   * @example
   * 80
   */
  securityScore?: number;
  /**
   * @remarks
   * The status of the beginner task. Valid values:
   * 
   * *   **0**: disabled.
   * *   **1**: in progress.
   * *   **2**: complete.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the beginner task.
   * 
   * @example
   * t-000d8slfgx4p40kb64ad
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task type. Valid values:
   * 
   * *   **guid_task_security_score_promote_video**: the task of viewing a video tutorial for beginners.
   * *   **guide_sub_task_config_defence_hbr**: the task of configuring anti-ransomware for servers.
   * *   **guide_sub_task_config_uni_defence_hbr**: the task of configuring anti-ransomware for databases.
   * *   **guid_task_log_analysis_config**: the task of configuring log analysis.
   * *   **guide_sub_task_web_lock_config**: the task of configuring web tamper proofing.
   * *   **guide_sub_task_config_anti_crack**: the task of configuring protection against brute-force attacks.
   * *   **guid_task_container_security_video**: the task of viewing the video on how to protect containers.
   * *   **guid_task_container_image_scan_config**: the task of configuring container image scan.
   * *   **guid_task_k8s_log_analysis_config**: the task of configuring threat detection on Kubernetes containers.
   * *   **guid_task_container_network**: the task of configuring container network visualization.
   * *   **guide_sub_task_config_add_collection**: the task of saving a console URL.
   * *   **guide_sub_task_vul_scan**: the task of scanning for vulnerabilities.
   * *   **guide_sub_task_virusKill**: the task of configuring virus detection and removal.
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
   * The list of beginner tasks.
   */
  guideTaskConfigList?: QueryGuidTaskListResponseBodyGuideTaskConfigList[];
  /**
   * @remarks
   * The request ID.
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

