// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFileResponseBodyDataNodeConfigurationInputList } from "./GetFileResponseBodyDataNodeConfigurationInputList";
import { GetFileResponseBodyDataNodeConfigurationInputParameters } from "./GetFileResponseBodyDataNodeConfigurationInputParameters";
import { GetFileResponseBodyDataNodeConfigurationOutputList } from "./GetFileResponseBodyDataNodeConfigurationOutputList";
import { GetFileResponseBodyDataNodeConfigurationOutputParameters } from "./GetFileResponseBodyDataNodeConfigurationOutputParameters";


export class GetFileResponseBodyDataNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether scheduling configurations immediately take effect after the deployment.
   * 
   * @example
   * true
   */
  applyScheduleImmediately?: string;
  /**
   * @remarks
   * The interval between automatic reruns after an error occurs. Unit: milliseconds.
   * 
   * This parameter corresponds to the Rerun interval parameter that is displayed after the Auto Rerun upon Failure check box is selected in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console). The interval that you specify in the DataWorks console is measured in minutes. Pay attention to the conversion between the units of time when you call the operation.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of automatic reruns that are allowed after an error occurs.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The cron expression that represents the periodic scheduling policy of the node.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle. Valid values: NOT_DAY and DAY. The value NOT_DAY indicates that the node is scheduled to run by minute or hour. The value DAY indicates that the node is scheduled to run by day, week, or month.
   * 
   * This parameter corresponds to the Scheduling Cycle parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * DAY
   */
  cycleType?: string;
  /**
   * @remarks
   * The ID of the node on which the node that corresponds to the file depends when the DependentType parameter is set to USER_DEFINE. Multiple IDs are separated by commas (,).
   * 
   * The value of this parameter is equivalent to the ID of the node that you specified after you select Previous Cycle and set Depend On to Other Nodes in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 5,10,15,20
   */
  dependentNodeIdList?: string;
  /**
   * @remarks
   * The type of the cross-cycle scheduling dependency of the node. Valid values:
   * 
   * *   SELF: The instance generated for the node in the current cycle depends on the instance generated for the node in the previous cycle.
   * *   CHILD: The instance generated for the node in the current cycle depends on the instances generated for the descendant nodes at the nearest level of the node in the previous cycle.
   * *   USER_DEFINE: The instance generated for the node in the current cycle depends on the instances generated for one or more specified nodes in the previous cycle.
   * *   NONE: No cross-cycle scheduling dependency type is selected for the node.
   * 
   * @example
   * USER_DEFINE
   */
  dependentType?: string;
  /**
   * @remarks
   * The end of the time range for automatic scheduling. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * Configuring this parameter is equivalent to specifying an end time for the Validity Period parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 4155787800000
   */
  endEffectDate?: number;
  /**
   * @remarks
   * Indicates whether the dry-run property of the ancestor nodes of the node is skipped. This parameter corresponds to the Skip the dry-run property of the ancestor node parameter that is displayed after you configure the Depend On parameter in the Dependencies section of the Properties tab on the DataStudio page in the DataWorks console.
   * 
   * @example
   * true
   */
  ignoreParentSkipRunningProperty?: string;
  /**
   * @remarks
   * The custom image ID.
   * 
   * @example
   * m-bp1h4b5a8ogkbll2f3tr
   */
  imageId?: string;
  /**
   * @remarks
   * The output information about the parent files on which the current file depends.
   */
  inputList?: GetFileResponseBodyDataNodeConfigurationInputList[];
  /**
   * @remarks
   * The input parameters of the node.
   */
  inputParameters?: GetFileResponseBodyDataNodeConfigurationInputParameters[];
  /**
   * @remarks
   * The output information about the current file.
   */
  outputList?: GetFileResponseBodyDataNodeConfigurationOutputList[];
  /**
   * @remarks
   * The output parameters of the node.
   */
  outputParameters?: GetFileResponseBodyDataNodeConfigurationOutputParameters[];
  /**
   * @remarks
   * The scheduling parameters of the node.
   * 
   * This parameter corresponds to the Scheduling Parameter section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console). For more information about the configurations of scheduling parameters, see [Configure scheduling parameters](https://help.aliyun.com/document_detail/137548.html).
   * 
   * @example
   * a=x b=y
   */
  paraValue?: string;
  /**
   * @remarks
   * Indicates whether the node that corresponds to the file can be rerun. Valid values:
   * 
   * *   ALL_ALLOWED: The node can be rerun regardless of whether it is successfully run or fails to run.
   * *   FAILURE_ALLOWED: The node can be rerun only after it fails to run.
   * *   ALL_DENIED: The node cannot be rerun regardless of whether it is successfully run or fails to run.
   * 
   * This parameter corresponds to the Rerun parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * ALL_ALLOWED
   */
  rerunMode?: string;
  /**
   * @remarks
   * The ID of the resource group that is used to run the node that corresponds to the file. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the available resource groups in the workspace.
   * 
   * @example
   * 375827434852437
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL: The node is an auto triggered node.
   * *   MANUAL: The node is a manually triggered node. Manually triggered nodes cannot be automatically triggered. They correspond to the nodes in the Manually Triggered Workflows pane.
   * *   PAUSE: The node is a paused node.
   * *   SKIP: The node is a dry-run node. Dry-run nodes are started as scheduled, but the system sets the status of the nodes to successful when it starts to run them.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The beginning of the time range for automatic scheduling. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * Configuring this parameter is equivalent to specifying a start time for the Validity Period parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 936923400000
   */
  startEffectDate?: number;
  /**
   * @remarks
   * Indicates whether a node is immediately run after the node is deployed to the production environment.
   * 
   * This parameter is valid only for an EMR Spark Streaming node or an EMR Streaming SQL node. This parameter corresponds to the Start Method parameter in the Schedule section of the Configure tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * true
   */
  startImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether the scheduling for the node is suspended Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter corresponds to the Recurrence parameter in the Schedule section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 1
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      applyScheduleImmediately: 'ApplyScheduleImmediately',
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      endEffectDate: 'EndEffectDate',
      ignoreParentSkipRunningProperty: 'IgnoreParentSkipRunningProperty',
      imageId: 'ImageId',
      inputList: 'InputList',
      inputParameters: 'InputParameters',
      outputList: 'OutputList',
      outputParameters: 'OutputParameters',
      paraValue: 'ParaValue',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
      startEffectDate: 'StartEffectDate',
      startImmediately: 'StartImmediately',
      stop: 'Stop',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyScheduleImmediately: 'string',
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      endEffectDate: 'number',
      ignoreParentSkipRunningProperty: 'string',
      imageId: 'string',
      inputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationInputList },
      inputParameters: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationInputParameters },
      outputList: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationOutputList },
      outputParameters: { 'type': 'array', 'itemType': GetFileResponseBodyDataNodeConfigurationOutputParameters },
      paraValue: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      schedulerType: 'string',
      startEffectDate: 'number',
      startImmediately: 'boolean',
      stop: 'boolean',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inputList)) {
      $dara.Model.validateArray(this.inputList);
    }
    if(Array.isArray(this.inputParameters)) {
      $dara.Model.validateArray(this.inputParameters);
    }
    if(Array.isArray(this.outputList)) {
      $dara.Model.validateArray(this.outputList);
    }
    if(Array.isArray(this.outputParameters)) {
      $dara.Model.validateArray(this.outputParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

