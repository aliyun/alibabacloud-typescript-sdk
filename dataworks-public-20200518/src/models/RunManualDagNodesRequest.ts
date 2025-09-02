// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunManualDagNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp. The value of the data timestamp must be one or more days before the current date. For example, if the current date is November 11, 2020, set the value to 2020-11-10 00:00:00 or earlier. Configure this parameter in the YYYY-MM-DD 00:00:00 format. The StartBizDate parameter is used together with the EndBizDate parameter. You can configure only the BizDate parameter or the StartBizDate and EndBizDate parameters.
   * 
   * @example
   * 2020-11-11 00:00:00
   */
  bizDate?: string;
  /**
   * @remarks
   * The parameters are synchronized to all the instances in the directed acyclic graph (DAG) of the workflow. If a workflow parameter specified in DagParameters is referenced as a scheduling parameter of a [node](https://help.aliyun.com/document_detail/147245.html), the value of the scheduling parameter is replaced with the value of the workflow parameter.
   * 
   * @example
   * {"kaaaa": "vaaaaa", "kbbbb": "vbbbbb"}
   */
  dagParameters?: string;
  /**
   * @remarks
   * The end of the time range in which data generated needs to be processed. Configure this parameter in the yyyy-MM-dd HH:mm:ss format. The StartBizDate parameter is used together with the EndBizDate parameter. You can configure only the BizDate parameter or the StartBizDate and EndBizDate parameters.
   * 
   * @example
   * 2020-02-03 00:00:00
   */
  endBizDate?: string;
  /**
   * @remarks
   * The IDs of the nodes that you do not need to run in the manually triggered workflow. DataWorks generates dry-run instances for all these nodes. After the dry-run instances are scheduled, the states of these instances are directly set to successful, but the scripts are not run. Separate multiple node IDs with commas (,). The ExcludeNodeIds parameter must be used together with the IncludeNodeIds parameter. This way, the settings of the ExcludeNodeIds parameter can take effect.
   * 
   * @example
   * 123,456
   */
  excludeNodeIds?: string;
  /**
   * @remarks
   * The name of the manually triggered workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * test_workflow
   */
  flowName?: string;
  /**
   * @remarks
   * The IDs of the nodes that you need to run in the manually triggered workflow. Separate multiple node IDs with commas (,).
   * 
   * @example
   * 74324,74325
   */
  includeNodeIds?: string;
  /**
   * @remarks
   * The scheduling parameters of nodes in the manually triggered workflow. Configure NodeParameters in the following JSON format: {"\\<ID of a node in the manually triggered workflow>": "Scheduling parameter settings of the node, which are in the same format as the parameter settings in the Scheduling Parameter section of the Properties tab on the DataStudio page", "\\<ID of a node in the manually triggered workflow>": "Scheduling parameter settings of the node, which are in the same format as the parameter settings in the Scheduling Parameter section of the Properties tab on the DataStudio page"}.
   * 
   * @example
   * {"20000123121": "key1=val2 key2=val2", "20000123124": "kkkk=vvvvv aaaa=bbbb"}
   */
  nodeParameters?: string;
  /**
   * @remarks
   * The environment type of Operation Center. Valid values: PROD and DEV. The value PROD indicates the production environment. The value DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD or DEV
   */
  projectEnv?: string;
  /**
   * @remarks
   * The ID of the workspace to which the manually triggered workflow belongs.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace to which the manually triggered workflow belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test_workspace
   */
  projectName?: string;
  /**
   * @remarks
   * The beginning of the time range in which data generated needs to be processed. Configure this parameter in the yyyy-MM-dd HH:mm:ss format. The StartBizDate parameter is used together with the EndBizDate parameter. You can configure only the BizDate parameter or the StartBizDate and EndBizDate parameters.
   * 
   * @example
   * 2020-02-02 00:00:00
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dagParameters: 'DagParameters',
      endBizDate: 'EndBizDate',
      excludeNodeIds: 'ExcludeNodeIds',
      flowName: 'FlowName',
      includeNodeIds: 'IncludeNodeIds',
      nodeParameters: 'NodeParameters',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dagParameters: 'string',
      endBizDate: 'string',
      excludeNodeIds: 'string',
      flowName: 'string',
      includeNodeIds: 'string',
      nodeParameters: 'string',
      projectEnv: 'string',
      projectId: 'number',
      projectName: 'string',
      startBizDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

