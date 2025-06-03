// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList";
import { GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList";


export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The interval at which the node corresponding to the file is rerun. Unit: milliseconds.
   * 
   * @example
   * 120000
   */
  autoRerunIntervalMillis?: number;
  /**
   * @remarks
   * The number of times that the node corresponding to the file can be rerun.
   * 
   * @example
   * 3
   */
  autoRerunTimes?: number;
  /**
   * @remarks
   * The cron expression that is used to schedule the node corresponding to the file.
   * 
   * @example
   * 00 05 00 * * ?
   */
  cronExpress?: string;
  /**
   * @remarks
   * The type of the scheduling cycle of the node that corresponds to the file. Valid values: NOT_DAY and DAY. The value NOT_DAY indicates that the node is scheduled to run by minute or hour. The value DAY indicates that the node is scheduled to run by day, week, or month.
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
   * The value of this parameter is equivalent to the ID of the node that you specified after you select Other Nodes for Cross-Cycle Dependency (Original Previous-Cycle Dependency) in the Dependencies section of the Properties tab on the DataStudio page in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The output information about the parent files on which the current file depends.
   */
  inputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList[];
  /**
   * @remarks
   * The output information about the current file.
   */
  outputList?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList[];
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
  static names(): { [key: string]: string } {
    return {
      autoRerunIntervalMillis: 'AutoRerunIntervalMillis',
      autoRerunTimes: 'AutoRerunTimes',
      cronExpress: 'CronExpress',
      cycleType: 'CycleType',
      dependentNodeIdList: 'DependentNodeIdList',
      dependentType: 'DependentType',
      inputList: 'InputList',
      outputList: 'OutputList',
      paraValue: 'ParaValue',
      rerunMode: 'RerunMode',
      resourceGroupId: 'ResourceGroupId',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunIntervalMillis: 'number',
      autoRerunTimes: 'number',
      cronExpress: 'string',
      cycleType: 'string',
      dependentNodeIdList: 'string',
      dependentType: 'string',
      inputList: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList },
      outputList: { 'type': 'array', 'itemType': GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList },
      paraValue: 'string',
      rerunMode: 'string',
      resourceGroupId: 'number',
      schedulerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputList)) {
      $dara.Model.validateArray(this.inputList);
    }
    if(Array.isArray(this.outputList)) {
      $dara.Model.validateArray(this.outputList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

