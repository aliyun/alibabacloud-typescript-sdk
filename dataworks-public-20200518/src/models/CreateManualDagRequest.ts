// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManualDagRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the business date must be less than or equal to the current date minus one day. For example, if today is November 11, 2020, the business date must be 2020-11-10 00:00:00 or an earlier date. The hour, minute, and second fields of the business date must all be set to 00.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-11 00:00:00
   */
  bizDate?: string;
  /**
   * @remarks
   * The workflow parameters. These parameters are synchronized to all instances of the current DAG. If the scheduling parameters of an internal node reference the workflow parameters in DagParameters, the corresponding parameter values of the node are replaced with the workflow parameters in DagParameters.
   * 
   * @example
   * {"kaaaa": "vaaaaa", "kbbbb": "vbbbbb"}
   */
  dagParameters?: string;
  /**
   * @remarks
   * The list of IDs of the nodes that do not need to be run.
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
   * The list of IDs of the nodes to be run.
   * 
   * @example
   * 74324,74325
   */
  includeNodeIds?: string;
  /**
   * @remarks
   * The node parameter information passed when the manual workflow is executed, in JSON format:
   * `
   * {
   *      "<A node ID inside the manual workflow>": "The scheduling parameter information of the node, consistent with the parameter format in the data development scheduling configuration", 
   *      "<A node ID inside the manual workflow>": "The scheduling parameter information of the node, consistent with the parameter format in the data development scheduling configuration"
   * }
   * `
   * 
   * @example
   * {"20000123121": "key1=val2 key2=val2", "20000123124": "kkkk=vvvvv aaaa=bbbb"}
   */
  nodeParameters?: string;
  /**
   * @remarks
   * The environment identifier of the Scheduling Operation Center. PROD indicates the production environment, and DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD or DEV
   */
  projectEnv?: string;
  /**
   * @remarks
   * The English name of the workspace to which the manual workflow belongs.
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

