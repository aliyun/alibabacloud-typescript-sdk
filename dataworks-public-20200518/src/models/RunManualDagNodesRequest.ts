// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunManualDagNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. The value must be less than or equal to the current date minus 1 day. For example, if today is November 11, 2020, the business date must be 00:00:00 on November 10, 2020 or an earlier date. The hour, minute, and second values of the business date must all be set to 00.
   * 
   * This parameter is used together with the StartBizDate and EndBizDate parameters. You can configure only one of BizDate or the StartBizDate and EndBizDate pair.
   * 
   * Format: `yyyy-MM-dd HH:mm:ss`. Example: `2020-11-11 00:00:00`.
   * 
   * @example
   * 2020-11-11 00:00:00
   */
  bizDate?: string;
  /**
   * @remarks
   * This parameter is synchronized to all instances of the current dagrun. If the scheduling parameters of internal nodes ([supported node types](https://help.aliyun.com/document_detail/147245.html)) reference workflow parameters in DagParameters, the corresponding parameter values of the nodes are replaced with the workflow parameters in DagParameters.
   * 
   * @example
   * {"kaaaa": "vaaaaa", "kbbbb": "vbbbbb"}
   */
  dagParameters?: string;
  /**
   * @remarks
   * The business end date. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is used together with the StartBizDate parameter. You can configure only one of the StartBizDate and EndBizDate pair or the BizDate parameter.
   * 
   * @example
   * 2020-02-03 00:00:00
   */
  endBizDate?: string;
  /**
   * @remarks
   * The IDs of nodes that you do not want to run within the workflow. The specified nodes generate dry-run instances during execution. After a dry-run instance is scheduled, it immediately succeeds without executing the script content. Separate multiple node IDs with commas (,).
   * 
   * The ExcludeNodeIds parameter takes effect only when used together with the IncludeNodeIds parameter.
   * 
   * @example
   * 123,456
   */
  excludeNodeIds?: string;
  /**
   * @remarks
   * The name of the manual workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * test_workflow
   */
  flowName?: string;
  /**
   * @remarks
   * The IDs of specific nodes to run within the manual workflow. Separate multiple node IDs with commas (,).
   * 
   * @example
   * 74324,74325
   */
  includeNodeIds?: string;
  /**
   * @remarks
   * The node parameter information passed when the manual workflow is executed. This corresponds to the **scheduling parameters** configured in the **Properties** of nodes within the manual workflow.
   * 
   * A JSON format: { "<Node ID within the manual workflow>": "Scheduling parameter information of the node, in the same format as the parameters in the data development scheduling configuration", "<Node ID within the manual workflow>": "Scheduling parameter information of the node, in the same format as the parameters in the data development scheduling configuration" }
   * 
   * @example
   * {"20000123121": "key1=val2 key2=val2", "20000123124": "kkkk=vvvvv aaaa=bbbb"}
   */
  nodeParameters?: string;
  /**
   * @remarks
   * The environment identifier of the Operation Center. PROD indicates the production environment. DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD or DEV
   */
  projectEnv?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace to which the manual workflow belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test_workspace
   */
  projectName?: string;
  /**
   * @remarks
   * The business start date. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is used together with the EndBizDate parameter. You can configure only one of the StartBizDate and EndBizDate pair or the BizDate parameter.
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

