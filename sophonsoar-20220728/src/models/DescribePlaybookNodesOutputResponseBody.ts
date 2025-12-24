// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput extends $dara.Model {
  /**
   * @remarks
   * The name of the component node.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The historical output data of the component node. The value is in the JSON string format. If no data is found, the parameter is left empty.
   * 
   * @example
   * {
   *     "datalist": [
   *         {
   *             "score": "10",
   *             "ip": "1.1.1.1"
   *         }
   *     ],
   *     "total_data_successful": 1,
   *     "filter_total_data": 1,
   *     "total_data": 1,
   *     "total_exe_successful": 1,
   *     "total_exe": 1,
   *     "total_data_with_dup": 1,
   *     "filter_total_data_successful": 1,
   *     "status": true
   * }
   */
  nodeOutput?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      nodeOutput: 'NodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      nodeOutput: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The output data of the component node.
   */
  playbookNodesOutput?: DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A491170C-FE1F-520E-83D4-72ED205B72ED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookNodesOutput: 'PlaybookNodesOutput',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookNodesOutput: DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput,
      requestId: 'string',
    };
  }

  validate() {
    if(this.playbookNodesOutput && typeof (this.playbookNodesOutput as any).validate === 'function') {
      (this.playbookNodesOutput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

