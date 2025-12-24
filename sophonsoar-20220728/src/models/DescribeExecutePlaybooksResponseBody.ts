// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExecutePlaybooksResponseBodyPlaybookMetrics extends $dara.Model {
  /**
   * @remarks
   * The playbook description.
   * 
   * @example
   * a demo playbook
   */
  description?: string;
  /**
   * @remarks
   * The playbook name.
   * 
   * @example
   * demo_playbook
   */
  displayName?: string;
  /**
   * @remarks
   * The configuration of the input parameter. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  paramConfig?: string;
  /**
   * @remarks
   * The input parameter type of the playbook.
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * @example
   * c5c88b5e-97ca-435d-8c20-2xxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      paramConfig: 'ParamConfig',
      paramType: 'ParamType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      paramConfig: 'string',
      paramType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutePlaybooksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The playbook.
   */
  playbookMetrics?: DescribeExecutePlaybooksResponseBodyPlaybookMetrics[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 88A39217-2802-5B1E-BA2B-CF1BBC43C1F5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookMetrics: 'PlaybookMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookMetrics: { 'type': 'array', 'itemType': DescribeExecutePlaybooksResponseBodyPlaybookMetrics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playbookMetrics)) {
      $dara.Model.validateArray(this.playbookMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

