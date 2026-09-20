// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateManualDagRequest extends $dara.Model {
  /**
   * @remarks
   * The business date. The value must be less than or equal to the current date minus 1 day. For example, if today is November 11, 2020, the business date must be 00:00:00 on November 10, 2020 or an earlier date. The hour, minute, and second values of the business date must all be set to 00.
   * 
   * Format example: `yyyy-MM-dd HH:mm:ss`, such as `2020-11-11 00:00:00`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-11 00:00:00
   */
  bizDate?: string;
  /**
   * @remarks
   * The business process parameters. These parameters are synchronized to all instances of the current dagrun. If the scheduling parameters of internal nodes reference the business process parameters in DagParameters, the corresponding parameter values of the nodes are replaced with the business process parameters in DagParameters.
   * 
   * @example
   * {"kaaaa": "vaaaaa", "kbbbb": "vbbbbb"}
   */
  dagParameters?: string;
  /**
   * @remarks
   * The list of node IDs that do not need to be executed.
   * 
   * @example
   * 123,456
   */
  excludeNodeIds?: string;
  /**
   * @remarks
   * The name of the manual business process.
   * 
   * This parameter is required.
   * 
   * @example
   * test_workflow
   */
  flowName?: string;
  /**
   * @remarks
   * The list of node IDs that need to be executed.
   * 
   * @example
   * 74324,74325
   */
  includeNodeIds?: string;
  /**
   * @remarks
   * The node parameter information passed when the manual business process is executed. The value is in JSON format:
   * `
   * {
   *      "<Node ID within the manual business process>": "Scheduling parameter information of the node, in the same format as the parameters in the scheduling configuration of DataStudio", 
   *      "<Node ID within the manual business process>": "Scheduling parameter information of the node, in the same format as the parameters in the scheduling configuration of DataStudio"
   * }
   * `
   * 
   * @example
   * {"20000123121": "key1=val2 key2=val2", "20000123124": "kkkk=vvvvv aaaa=bbbb"}
   */
  nodeParameters?: string;
  /**
   * @remarks
   * The environment identifier of the O&M center. PROD indicates the production environment. DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD or DEV
   */
  projectEnv?: string;
  /**
   * @remarks
   * The English name of the workspace to which the manual business process belongs.
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

