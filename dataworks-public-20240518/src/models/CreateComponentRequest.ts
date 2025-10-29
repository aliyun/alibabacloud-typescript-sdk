// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can call the [ListProjects](https://help.aliyun.com/document_detail/2852607.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec information for this UDF function. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "kind": "Component",
   *     "name": "com1",
   *     "spec": {
   *         "components": [
   *             {
   *                 "name": "test11",
   *                 "id": "1234",
   *                 "owner": "1234456",
   *                 "description": "",
   *                 "script": {
   *                     "language": "odps-sql",
   *                     "path": "test11",
   *                     "content": "select \\"@@{bizdate}\\", \\"@@{my_input_table}\\"",
   *                     "runtime": {
   *                         "command": "SQL_COMPONENT"
   *                     }
   *                 },
   *                 "inputs": [
   *                     {
   *                         "name": "bizdate",
   *                         "type": "string"
   *                     },
   *                     {
   *                         "name": "my_input_table",
   *                         "type": "string"
   *                     }
   *                 ],
   *                 "outputs": [
   *                     {
   *                         "name": "my_output_table1",
   *                         "type": "string"
   *                     }
   *                 ]
   *             }
   *         ]
   *     }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

