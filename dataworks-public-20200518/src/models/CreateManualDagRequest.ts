// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManualDagRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp. The value of the data timestamp must be one or more days before the current date. For example, if the current date is November 11, 2020, set the value to 2020-11-10 00:00:00 or earlier. Configure this parameter in the YYYY-MM-DD 00:00:00 format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-11 00:00:00
   */
  bizDate?: string;
  /**
   * @remarks
   * The parameters of the manually triggered workflow, which are synchronized to all the instances in the directed acyclic graph (DAG) of the workflow. If a workflow parameter specified in DagParameters is referenced as a scheduling parameter of a node, the value of the scheduling parameter is replaced with the value of the workflow parameter.
   * 
   * @example
   * {"kaaaa": "vaaaaa", "kbbbb": "vbbbbb"}
   */
  dagParameters?: string;
  /**
   * @remarks
   * The IDs of the nodes that do not need to be run.
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
   * The IDs of the nodes that you want to run.
   * 
   * @example
   * 74324,74325
   */
  includeNodeIds?: string;
  /**
   * @remarks
   * The parameters transmitted between nodes in the manually triggered workflow. The parameters are in the following JSON format: `{ "<ID of a node in the manually triggered workflow>": "Scheduling parameter settings of the node, which are in the same format as the parameters in the Scheduling Parameter section on the Properties tab of the DataStudio page", "<ID of a node in the manually triggered workflow>": "Scheduling parameter settings of the node, which are in the same format as the parameters in the Scheduling Parameter section on the Properties tab of the DataStudio page" }`
   * 
   * @example
   * {"20000123121": "key1=val2 key2=val2", "20000123124": "kkkk=vvvvv aaaa=bbbb"}
   */
  nodeParameters?: string;
  /**
   * @remarks
   * The environment type of Operation Center. Valid values: PROD and DEV.
   * 
   * This parameter is required.
   */
  projectEnv?: string;
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
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dagParameters: 'DagParameters',
      excludeNodeIds: 'ExcludeNodeIds',
      flowName: 'FlowName',
      includeNodeIds: 'IncludeNodeIds',
      nodeParameters: 'NodeParameters',
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dagParameters: 'string',
      excludeNodeIds: 'string',
      flowName: 'string',
      includeNodeIds: 'string',
      nodeParameters: 'string',
      projectEnv: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

